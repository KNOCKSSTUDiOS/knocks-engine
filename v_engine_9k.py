import time
import uuid

class UniversalBot:
    def __init__(self, role, language="English"):
        self.id = uuid.uuid4().hex[:6]
        self.role = role
        self.language = language
        self.status = "ACTIVE"

    def __repr__(self):
        return f"🤖 [Bot-{self.id} | {self.role}]"

class HollywoodSwarmEngine:
    def __init__(self):
        # Starting with a core team
        self.swarm = {
            "Radio": [UniversalBot("Radio")],
            "School": [UniversalBot("School")],
            "Store": [UniversalBot("Store")],
            "Engine": [UniversalBot("Engine")],
            "Fixer": [UniversalBot("Fixer")] # The bots that fix bots
        }

    def scale_up(self, sector, count=1):
        """Spawns as many bots as needed for the international load."""
        for _ in range(count):
            new_bot = UniversalBot(sector)
            self.swarm[sector].append(new_bot)
        print(f"🚀 [SWARM]: Scaled {sector} by +{count}. Total {sector} Bots: {len(self.swarm[sector])}")

    def monitor_and_heal(self):
        print(f"\n--- 🌐 GLOBAL SWARM STATUS | {time.strftime('%H:%M:%S')} ---")
        for sector, bots in self.swarm.items():
            print(f"{sector} Cluster: {bots}")
            
            # Logic: Always maintain at least 1 backup per active bot
            if len(bots) < 2:
                print(f"⚠️  [WISE_CHECK]: {sector} is low on redundancy. Deploying backup...")
                self.scale_up(sector, 1)

# --- LAUNCHING THE INFINITE STUDIO ---
studio = HollywoodSwarmEngine()

# 1. Initial Pulse
studio.monitor_and_heal()

# 2. Simulate a Massive International Traffic Spike in the School & Store
print("\n🌍 [TRAFFIC]: 500 new students from UAE & Japan entering the School...")
studio.scale_up("School", 4) # Add 4 more teachers
studio.scale_up("Store", 2)  # Add 2 more merchants
studio.scale_up("Radio", 2)  # Add 2 more DJs for localized music

# 3. Final Health Check
studio.monitor_and_heal()
