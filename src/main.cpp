#include <iostream>
#include "../i18n/Dictionary.h"
#include "../include/MetalMoldingMaterial.h"
#include "../include/Security.h"
#include "../styles/MetalPresets.h"

int main() {
    // 1. Initialize International Voice & Security
    KnocksEngine::GlobalSpeaker voice;
    KnocksEngine::SecureStyle security;
    KnocksEngine::MetalMoldingMaterial jungleMetal;

    // 2. Security Check (Privacy Lock)
    security.ValidateSystem();

    // 3. International Welcome Message
    std::cout << voice.GetGreeting("es") << " (ES)" << std::endl; 
    std::cout << voice.GetGreeting("en") << " (EN)" << std::endl;

    std::cout << "\n=== KNOCKS 9K BRAND KIT: ACTIVE ===" << std::endl;
    std::cout << "STYLE: EXTRAVAGANT JUNGLE (NEON)" << std::endl;
    std::cout << "COLORS: ELECTRIC BLUE, LIME GREEN, CANDY RED" << std::endl;
    std::cout << "METAL SHINE: MAX" << std::endl;

    // 4. Run the 9K Animation
    jungleMetal.Update(0.016f);

    std::cout << ">>> Brand Security: VERIFIED" << std::endl;
    std::cout << ">>> Status: Shining and moving with 9K Style! ™" << std::endl;

    return 0;
}
