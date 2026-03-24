/* * KNOCKSSTUDiOS ™ | ORIGINAL 9K ULTRA POWER
 * MODULE: SENTINEL V SENSORY ARRAY (MAD MODE)
 */

#ifndef AUDIO_REACTIVE_H
#define AUDIO_REACTIVE_H

namespace KnocksEngine {
    class AudioShine {
    public:
        float intensity = 1.0f;

        // Detects raspy Sentinel voice to trigger Cyan Glow
        void ReactToVoice(float decibels) {
            intensity = 1.0f + (decibels / 100.0f);
            
            if (decibels > 90.0f) {
                // COMMAND: IGNITE STEALTH V ON CHEST PLATE
                this->IgniteMadMode();
            }
        }

    private:
        void IgniteMadMode() {
            // SETS EMISSIVE TO CYAN (THROUGH OBSIDIAN ARMOR)
        }
    };
}

#endif
