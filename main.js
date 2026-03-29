import org.springframework.web.bind.annotation.*;
import com.stripe.Stripe;
import com.stripe.model.Event;
import com.stripe.model.checkout.Session;
import com.stripe.net.Webhook;
import com.stripe.param.checkout.SessionCreateParams;
import java.util.*;

@RestController
@RequestMapping("/api/v1/knocks")
@CrossOrigin(origins = "*")
public class SovereignMasterEngine {

    private final String STRIPE_KEY = "sk_live_YOUR_STRIPE_KEY";
    private final String WEBHOOK_SECRET = "whsec_YOUR_WEBHOOK_SECRET";
    private final int BASE_COINS = 2000;

    // --- PART A: THE INITIALIZER (Smart Gate + Payment Link) ---
    @PostMapping("/initialize-vault")
    public Map<String, Object> initialize(@RequestBody Map<String, String> data) throws Exception {
        Stripe.apiKey = STRIPE_KEY;
        String email = data.get("email").toLowerCase();
        String tier = data.get("tier").toUpperCase();

        // 1. SMART GATE: Enterprise Detection (Automatic)
        boolean isEnterprise = email.matches(".*@(corp|studio|app|platform|agency|enterprise)\\..*");
        int logicUnits = isEnterprise ? 50 : 5;

        // 2. TIER MATH: Base 2000 + Bonus
        String priceId = switch(tier) {
            case "MASTER" -> "price_MASTER_ID";     // $19.99
            case "SCHOLAR" -> "price_SCHOLAR_ID";   // $29.99
            case "TITAN" -> "price_TITAN_ID";       // $49.99
            case "ULTRA_TITAN" -> "price_ULTRA_ID"; // $99.99
            default -> "free";
        };

        // 3. CREATE STRIPE SESSION
        SessionCreateParams params = SessionCreateParams.builder()
            .setMode(SessionCreateParams.Mode.SUBSCRIPTION)
            .setSuccessUrl("https://knocksstudios.com/success?email=" + email)
            .setCancelUrl("https://knocksstudios.com/vault")
            .addLineItem(SessionCreateParams.LineItem.builder().setQuantity(1L).setPrice(priceId).build())
            .setCustomerEmail(email)
            .build();
        
        Session session = Session.create(params);

        Map<String, Object> res = new HashMap<>();
        res.put("checkoutUrl", session.getUrl());
        res.put("units", logicUnits);
        res.put("isEnterprise", isEnterprise);
        return res;
    }

    // --- PART B: THE WEBHOOK (Unlocks Money & Coins Automatically) ---
    @PostMapping("/webhook")
    public String handleWebhook(@RequestBody String payload, @RequestHeader("Stripe-Signature") String sigHeader) {
        try {
            Event event = Webhook.constructEvent(payload, sigHeader, WEBHOOK_SECRET);
            if ("checkout.session.completed".equals(event.getType())) {
                Session session = (Session) event.getDataObjectDeserializer().getObject().get();
                String email = session.getCustomerEmail();
                
                // Logic: Find user in Database and add their (BASE_COINS + TIER_BONUS)
                System.out.println("PAYMENT SUCCESS: Unlocking Vault for " + email);
            }
            return "Success";
        } catch (Exception e) { return "Error"; }
    }
}
