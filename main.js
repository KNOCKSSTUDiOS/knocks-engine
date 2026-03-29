import org.springframework.web.bind.annotation.*;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api/v1/knocks")
@CrossOrigin(origins = "*") // Allows your HTML to talk to this Java Engine
public class KnocksSovereignController {

    private final String PRINTIFY_API_KEY = "YOUR_PRINTIFY_API_TOKEN";
    private final String SHOP_ID = "YOUR_SHOP_ID";

    // 1. THE PEACH SAMPLE LOGIC ($4.00)
    @PostMapping("/purchase-sample")
    public ResponseEntity<String> purchasePeachSample(@RequestBody String userId) {
        // Logic to verify Stripe payment would go here
        System.out.println("Processing 6 9K Videos for User: " + userId);
        return ResponseEntity.ok("Peach Sample Activated. 6 Videos Added to Vault. Everyone leaves with a smile!");
    }

    // 2. THE PRINTIFY BRIDGE
    @PostMapping("/create-order")
    public ResponseEntity<Object> sendToPrintify(@RequestBody OrderRequest order) {
        String url = "https://api.printify.com/v1/shops/" + SHOP_ID + "/orders.json";
        
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + PRINTIFY_API_KEY);
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<OrderRequest> entity = new HttpEntity<>(order, headers);
        
        try {
            Object response = restTemplate.postForObject(url, entity, Object.class);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error connecting to Printify: " + e.getMessage());
        }
    }
}
