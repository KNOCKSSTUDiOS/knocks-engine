#include <iostream>
#include "../include/MetalMoldingMaterial.h"
#include "../include/Security.h"
#include "../styles/MetalPresets.h"

int main() {
    KnocksEngine::SecureStyle security;
    KnocksEngine::MetalMoldingMaterial jungleMetal;

    // Run security check first
    security.ValidateSystem();

    std::cout << "=== KNOCKS 9K BRAND KIT: ACTIVE ===" << std::endl;
    std::cout << "STYLE: EXTRAVAGANT JUNGLE (NEON)" << std::endl;
    std::cout << "COLORS: ELECTRIC BLUE, LIME GREEN, CANDY RED" << std::endl;
    std::cout << "METAL SHINE: MAX" << std::endl;

    // The metal moves and shines in the "Jungle" shader
    jungleMetal.Update(0.016f);

    std::cout << ">>> Brand Security: VERIFIED" << std::endl;
    std::cout << ">>> Status: Shining and moving with 9K Style!" << std::endl;

    return 0;
}
