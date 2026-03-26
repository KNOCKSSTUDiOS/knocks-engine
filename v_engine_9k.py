import time

class SentinelBot:
    def __init__(self, name, role):
        self.name = name
        self.role = role
        self.heartbeat = True  # True = Healthy, False = Down

    def __repr__(self):
        status = "🟢 ACTIVE" if self.heartbeat else "🔴 DOWN/UPDATING"
        return f"{self.name} ({status})"

class HollywoodImagingCommandCenter:
    def __init__(self):
        # 8 Bots for 4 Core Roles
        self.clusters = {
            "Radio": [SentinelBot("RA-Alpha", "Broadcast"), SentinelBot("RA-Beta", "Broadcast")],
            "School": [SentinelBot("SCH-Prime", "Mentor"), SentinelBot("SCH-Ghost", "Mentor")],
            "Store": [SentinelBot("MCH-1", "Finance"), SentinelBot("MCH-2", "Finance")],
            "Engine": [SentinelBot("SEN-Master", "9K Core"), SentinelBot("SEN-Mirror", "9K Core")]
        }

    def monitor_system(self):
        print(f"\n--- 🌐 GLOBAL SENTINEL MONITOR | {time.strftime('%H:%M:%S')} ---")
        for role, pair in self.clusters.items():
            # Check if Primary is healthy
            primary, backup = pair[0], pair[1]
            if not primary.heartbeat:
                print(f"⚠️ ALERT: {primary.name} unresponsive! Hot-swapping to {backup.name}...")
                # Logic to shift user traffic to backup happens here
            print(f"{role} Cluster: {primary} | {backup}")

# --- LAUNCHING THE UNSTOPPABLE ENGINE ---
admin = HollywoodImagingCommandCenter()

# 1. Normal Operation
admin.monitor_system()

# 2. Simulate a Bot Failure (Engine Primary goes down)
admin.clusters["Engine"][0].heartbeat = False
admin.monitor_system()
