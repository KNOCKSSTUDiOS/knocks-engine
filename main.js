import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/v1/knocks")
@CrossOrigin(origins = "*")
public class KnocksMasterController {

    private final int BASE_COINS = 2000;

    @PostMapping("/auth/gate")
    public Map<String, Object> handleAccess(@RequestBody Map<String, String> creds) {
        String email = creds.get("email").toLowerCase();
        String action = creds.get("action"); // "SIGNUP" or "SIGNIN"
        
        // ENTERPRISE DETECTION
        boolean isLabLegend = email.matches(".*@(corp|studio|app|platform|agency|legend)\\..*");
        int units = isLabLegend ? 50 : 5;

        Map<String, Object> response = new HashMap<>();
        response.put("status", "SUCCESS");
        response.put("message", action.equals("SIGNUP") ? "Identity Created." : "Identity Verified.");
        response.put("vault_base", BASE_COINS);
        response.put("logic_units", units);
        response.put("power_source", "AI LAB LEGENDS");
        
        return response;
    }

    @GetMapping("/gallery/9k-renders")
    public List<String> getGallery() {
        // Returns the 9K high-res render URLs for the public gallery
        return Arrays.asList("render1.jpg", "render2.jpg", "render3.jpg");
    }
}
