import org.springframework.web.bind.annotation.*;
import com.stripe.Stripe;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import java.util.*;

@RestController
@RequestMapping("/api/v1/sovereign")
@CrossOrigin(origins = "*") 
public class SovereignMasterController {

    // SETTINGS
    private final String STRIPE_KEY = "sk_live_YOUR_KEY";
    private final int BASE_COINS = 2000;

    @PostMapping("/initialize")
    public Map<String, Object> initialize(@RequestBody Map<String, String> data) throws Exception {
        Stripe.apiKey = STRIPE_KEY;
        String email = data.get("email").toLowerCase();
        String tier = data.get("tier").toUpperCase();
        
        // 1. SMART GATE & BOT ALLOCATION
        boolean isEnterprise = email.matches(".*@(corp|studio|app|platform|agency)\\..*");
        int logicUnits = isEnterprise ? 50 : 5;

        // 2. TIER MATH (BASE + BONUS)
        int bonus = switch(tier) {
            case "MASTER" -> 2000;       // Total 4000
            case "SCHOLAR" -> 4999;      // Total 6999
            case "TITAN" -> 7500;        // Total 9500
            case "ULTRA_TITAN" -> 10000; // Total 12000
            default -> 0;
        };

        // 3. STRIPE CASH FLOW (Generate Payment Link)
        String priceId = getPriceId(tier); 
        SessionCreateParams params = SessionCreateParams.builder()
            .setMode(SessionCreateParams.Mode.SUBSCRIPTION)
            .setSuccessUrl("https://knocksstudios.com/success")
            .setCancelUrl("https://knocksstudios.com/vault")
            .addLineItem(SessionCreateParams.LineItem.builder().setQuantity(1L).setPrice(priceId).build())
            .setCustomerEmail(email)
            .build();
        
        Session session = Session.create(params);

        // 4. THE UNIFIED RESPONSE
        Map<String, Object> response = new HashMap<>();
        response.put("checkoutUrl", session.getUrl());
        response.put("totalVault", BASE_COINS + bonus);
        response.put("unitsActive", logicUnits);
        response.put("isEnterprise", isEnterprise);
        response.put("message", "Everyone leaves with a smile.");
        
        return response;
    }

    private String getPriceId(String tier) {
        return switch(tier) {
            case "MASTER" -> "price_1999";
            case "SCHOLAR" -> "price_2999";
            case "TITAN" -> "price_4999";
            case "ULTRA_TITAN" -> "price_9999";
            default -> "free";
        };
    }
}
