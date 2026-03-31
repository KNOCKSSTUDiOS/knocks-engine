"""
================================================================================
PROPERTY OF KNOCKSSTUDiOS | OMNIPOTENT_ENGINE_V1
VAULT_KEY: [LOCAL_ONLY] | AUTH: G. TAMAYO
================================================================================
"""
import os
from google import genai

class KnocksEngine:
    def __init__(self, free_access_trigger=False):
        self.fuel = self._fetch_fuel()
        self.client = genai.Client(api_key=self.fuel)
        # The 2nd Trigger State
        self.unlocked = free_access_trigger 
        print(f"⚡ ENGINE_IGNITION: UNLOCKED={self.unlocked}")

    def _fetch_fuel(self):
        # CEO SECURITY: Looks for the file hidden by .gitignore
        if os.path.exists("engine.vault"):
            with open("engine.vault", "r") as f:
                return f.read().split("=")[1].strip()
        return os.getenv("ENGINE_FUEL_ALPHA")

    def execute_render(self, prompt, is_legend_student=False):
        """
        Logic for Free Full Access.
        If 2nd Trigger is ON or user is a Legend Student, bypass cost.
        """
        if self.unlocked or is_legend_student:
            print("💎 ACCESS_GRANTED: PROPRIETARY_BYPASS_ACTIVE")
            return self._forge(prompt)
        else:
            print("🔒 ACCESS_DENIED: PENDING_ARSENAL_VERIFICATION")
            return None

    def _forge(self, prompt):
        # 9K Proprietary Alchemy
        full_directive = f"{prompt}. 9k cinematic, anamorphic lens, KnocksStudios grit."
        return self.client.models.generate_videos(model="veo-3.1", prompt=full_directive)

# CEO CONTROL
if __name__ == "__main__":
    # Simulate turning on the 2nd Trigger from the Admin Page
    CEO_ENGINE = KnocksEngine(free_access_trigger=True)
    CEO_ENGINE.execute_render("A 9K cinematic sweep of the Metal_Laser_Eye")
