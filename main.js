import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.*;

@RestController
@RequestMapping("/api/v1/knocks")
@CrossOrigin(origins = "*") 
public class SovereignEngine {

    private static final int BASE_COINS = 2000;

    @PostMapping("/sync-vault")
    public ResponseEntity<Map<String, Object>> syncUserVault(@RequestBody Map<String, String> request) {
        String email = request.get("email").toLowerCase();
        String tier = request.get("tier").toUpperCase();
        
        Map<String, Object> response = new HashMap<>();
        
        // 1. THE SMART GATE (Enterprise Detection)
        boolean isEnterprise = email.matches(".*@(corp|studio|app|platform|enterprise|global)\\..*");

        // 2. THE CUMULATIVE 5-TIER MATH (Base 2000 + Tier)
        int tierBonus = switch (tier) {
            case "MASTER" -> 2000;       // Total 4,000
            case "SCHOLAR" -> 4999;      // Total 6,999
            case "TITAN" -> 7500;        // Total 9,500
            case "ULTRA_TITAN" -> 10000; // Total 12,000
            default -> 0;                // Citizen: 2,000
        };

        int totalCoins = BASE_COINS + tierBonus;

        // 3. BOT SWARM INITIALIZATION
        int activeBots = isEnterprise ? 50 : 5;
        String swarmType = isEnterprise ? "Enterprise Scale Swarm" : "Standard Sovereign Swarm";

        response.put("uid", UUID.randomUUID().toString());
        response.put("vault_balance", totalCoins);
        response.put("is_enterprise", isEnterprise);
        response.put("active_bots", activeBots);
        response.put("swarm_status", swarmType);
        response.put("message", "Everyone leaves with a smile.");

        return ResponseEntity.ok(response);
    }
}
