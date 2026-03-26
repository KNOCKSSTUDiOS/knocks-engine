class KnocksMerchant:
    def __init__(self):
        self.brand = "KNOCKSSTUDiOS"
        self.base_sweater_price = 65.00 # Our cost + basic profit
        self.shipping_zones = {
            "US": 8.00,
            "UK": 15.00,
            "UAE": 22.00,
            "ASIA": 25.00
        }

    def calculate_total(self, user_location, payment_method):
        shipping = self.shipping_zones.get(user_location, 30.00) # Default for others
        total = self.base_sweater_price + shipping
        
        print(f"💰 [MERCHANT]: Calculating total for {user_location} via {payment_method}...")
        print(f"📦 [LOGISTICS]: KNOCKSSTUDiOS Private Courier Route initialized.")
        
        return {
            "Product": "Obsidian 9K Sweater",
            "Currency": "USD",
            "Subtotal": self.base_sweater_price,
            "Shipping": shipping,
            "Grand_Total": total,
            "Watermark": "AUTHENTIC_KNOCKS_GARMENT"
        }

# --- LIVE PURCHASE SIMULATION ---
merchant = KnocksMerchant()

# User in Dubai buys a sweater with Cash App
order = merchant.calculate_total("UAE", "Cash App")

import json
print(f"\n📑 [KNOCKSSTUDiOS OFFICIAL INVOICE]:\n{json.dumps(order, indent=4)}")
