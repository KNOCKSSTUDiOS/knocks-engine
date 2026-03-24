#include <iostream>
#include <string>
#include "../include/MetalMoldingMaterial.h"

int main() {
    // 1. Setup the 9K Metal Material
    KnocksEngine::MetalMoldingMaterial metalStyle;
    
    // 2. Point the engine to your new files
    std::string modelPath = "assets/Metal_Laser_Eye.obj";
    std::string shaderPath = "shaders/RainbowGlow.glsl";

    std::cout << "--- 9K ENGINE: LOADING ASSETS ---" << std::endl;
    std::cout << "Loading Model: " << modelPath << std::endl;
    std::cout << "Applying Shader: " << shaderPath << std::endl;

    // 3. Run the "Laser Eye" Logic
    std::cout << "\n[SYSTEM STATUS]" << std::endl;
    std::cout << "> Metal Texture: HIGH-GLOSS (Roughness: " << metalStyle.roughness << ")" << std::endl;
    std::cout << "> Rainbow Gradient: ACTIVE" << std::endl;
    
    // Simulate the animation loop
    metalStyle.Update(0.016f);
    std::cout << "> Animation: Metal_Laser_Eye is rotating and glowing." << std::endl;

    return 0;
}
