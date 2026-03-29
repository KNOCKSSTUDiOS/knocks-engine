import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/v1/sovereign")
public class SovereignEngineController {

    // THE FOUNDATION: 2000 BASE COINS
    private static final int BASE_COINS = 2000;

    @PostMapping("/onboard")
    public ResponseEntity<Map<String, Object>> onboardUser(@RequestBody Map<String, String> userData) {
        String email = userData.get("email");
        String tier = userData.get("tier").toUpperCase();
        
        Map<String, Object> response = new HashMap<>();
        
        // 1. THE SMART GATE: DETECTION
        boolean isEnterprise = email.contains("@corp") || email.contains("@studio") || email.contains("@platform");

        // 2. THE CUMULATIVE ECONOMY MATH
        int tierBonus = switch (tier) {
            case "MASTER" -> 2000;       // Total: 4000
            case "SCHOLAR" -> 4999;      // Total: 6999
            case "TITAN" -> 7500;        // Total: 9500
            case "ULTRA_TITAN" -> 10000; // Total: 12000
            default -> 0;                // Citizen: 2000
        };

        int totalVaultBalance = BASE_COINS + tierBonus;

        // 3. WAKE THE BOTS
        String botStatus = isEnterprise ? "Enterprise Swarm Active: 50 Bots Assigned" : "Standard Bot Swarm: 5 Bots Assigned";

        response.put("balance", totalVaultBalance);
        response.put("isEnterprise", isEnterprise);
        response.put("status", "Everyone leaves with a smile.");
        response.put("botLog", botStatus);

        return ResponseEntity.ok(response);
    }
}
