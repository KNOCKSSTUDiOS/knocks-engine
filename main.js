import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.*;

@RestController
@RequestMapping("/api/v1/knocks")
@CrossOrigin(origins = "*") 
public class SovereignEngine {

    // THE UNIVERSAL 2000 COIN BASE
    private static final int BASE_COINS = 2000;

    @PostMapping("/sync-vault")
    public ResponseEntity<Map<String, Object>> syncUserVault(@RequestBody Map<String, String> request) {
        String email = request.get("email").toLowerCase();
        String tier = request.get("tier").toUpperCase();
        
        Map<String, Object> response = new HashMap<>();
        
        // 1. THE SMART GATE (Professional Domain Detection)
        boolean isEnterprise = email.matches(".*@(corp|studio|app|platform|enterprise|global|agency)\\..*");

        // 2. THE CUMULATIVE 5-TIER MATH (Base 2000 + Tier Bonus)
        int tierBonus = switch (tier) {
            case "MASTER" -> 2000;       // Total 4,000
            case "SCHOLAR" -> 4999;      // Total 6,999
            case "TITAN" -> 7500;        // Total 9,500
            case "ULTRA_TITAN" -> 10000; // Total 12,000
            default -> 0;                // Citizen: 2,000
        };

        int totalCoins = BASE_COINS + tierBonus;

        // 3. INTERNAL LOGIC UNIT ALLOCATION (Bot Swarm)
        int activeUnits = isEnterprise ? 50 : 5;
        String swarmStatus = isEnterprise ? "Enterprise Multi-Thread Swarm: ONLINE" : "Standard Sovereign Swarm: ONLINE";

        response.put("vault_id", UUID.randomUUID().toString());
        response.put("balance", totalCoins);
        response.put("enterprise_access", isEnterprise);
        response.put("logic_units", activeUnits);
        response.put("system_status", swarmStatus);
        response.put("motto", "Everyone leaves with a smile.");

        return ResponseEntity.ok(response);
    }
}
