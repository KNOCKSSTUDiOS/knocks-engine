import org.springframework.web.bind.annotation.*;
import com.stripe.Stripe;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import java.util.*;

@RestController
@RequestMapping("/api/v1/knocks")
@CrossOrigin(origins = "*") 
public class SovereignMaster {

    // SETTINGS - INSERT YOUR KEYS HERE
    private final String STRIPE_KEY = "sk_live_YOUR_KEY";
    private final int BASE_COINS = 2000;

    @PostMapping("/initialize-vault")
    public Map<String, Object> initialize(@RequestBody Map<String, String> data) throws Exception {
        Stripe.apiKey = STRIPE_KEY;
        String email = data.get("email").toLowerCase();
        String tier = data.get("tier").toUpperCase();
        
        // 1. SMART GATE: ENTERPRISE DETECTION
        boolean isEnterprise = email.matches(".*@(corp|studio|app|platform|agency|legend)\\..*");
        int logicUnits = isEnterprise ? 50 : 5;

        // 2. CUMULATIVE ECONOMY (2000 BASE + TIER BONUS)
        int bonus = switch(tier) {
            case "MASTER" -> 2000;       // Total 4000
            case "SCHOLAR" -> 4999;      // Total 6999
            case "TITAN" -> 7500;        // Total 9500
            case "ULTRA_TITAN" -> 10000; // Total 12000
            default -> 0;                // Citizen: 2000
        };

        // 3. STRIPE CASH FLOW
        String priceId = getStripePrice(tier);
        SessionCreateParams params = SessionCreateParams.builder()
            .setMode(SessionCreateParams.Mode.SUBSCRIPTION)
            .setSuccessUrl("https://knocksstudios.com/success?email=" + email)
            .setCancelUrl("https://knocksstudios.com/vault")
            .addLineItem(SessionCreateParams.LineItem.builder().setQuantity(1L).setPrice(priceId).build())
            .setCustomerEmail(email)
            .build();
        
        Session session = Session.create(params);

        // 4. POWERED BY AI LAB LEGENDS RESPONSE
        Map<String, Object> response = new HashMap<>();
        response.put("checkoutUrl", session.getUrl());
        response.put("totalVault", BASE_COINS + bonus);
        response.put("units", logicUnits);
        response.put("isEnterprise", isEnterprise);
        response.put("engine", "AI LAB LEGENDS");
        
        return response;
    }

    private String getStripePrice(String tier) {
        return switch(tier) {
            case "MASTER" -> "price_1999_id";
            case "SCHOLAR" -> "price_2999_id";
            case "TITAN" -> "price_4999_id";
            case "ULTRA_TITAN" -> "price_9999_id";
            default -> "free";
        };
    }
}
