#include <iostream>
#include "../include/MetalMoldingMaterial.h"

int main() {
    // This starts the 9K Metal Molding system
    KnocksEngine::MetalMoldingMaterial kMetal;

    std::cout << "KNOCKS ENGINE: 9K SYSTEM START" << std::endl;
    std::cout << "Material: Metal Molding Realism" << std::endl;
    std::cout << "Shine Power: " << kMetal.metallic << std::endl;

    // This updates the "moving animation"
    kMetal.Update(0.016f);
    
    std::cout << "Status: The metal letters are now moving!" << std::endl;

    return 0;
}
