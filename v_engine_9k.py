import datetime

class HollywoodImagingEngine:
    def __init__(self, user_name, join_date_str):
        self.user_name = user_name
        self.join_date = datetime.datetime.strptime(join_date_str, "%Y-%m-%d")
        self.coins = 2000  # Initial "Freedom Month" Grant
        self.tier = 1      # Starting at Tier 1 (Free)

    def check_freedom_status(self):
        """Checks if the user is still in their first 30 days."""
        days_active = (datetime.datetime.now() - self.join_date).days
        remaining = 30 - days_active
        return max(0, remaining)

    def render_9k_sentinel(self):
        days_left = self.check_freedom_status()
        
        if days_left > 0:
            cost = 500  # High-end 9K render cost
            if self.coins >= cost:
                self.coins -= cost
                return (f"🚀 [SUCCESS]: 9K V-Sentinel Rendered for {self.user_name}.\n"
                        f"📊 [STATUS]: {days_left} Days of Freedom left. Remaining Coins: {self.coins}")
            else:
                return "❌ [ERROR]: Insufficient Coins. Upgrade to Tier 3 to refill."
        else:
            return "⚠️ [EXPIRED]: Your Freedom Month has ended. Please select a Tier to continue rendering."

# --- TEST THE ENGINE ---
# Simulate a new user who joined 5 days ago
v_user = HollywoodImagingEngine(user_name="Sentinel_Creator", join_date_str="2026-03-21")
print(v_user.render_9k_sentinel())
