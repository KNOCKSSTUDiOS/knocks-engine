#include <iostream>
#include "../i18n/Dictionary.h"
#include "../include/MetalMoldingMaterial.h"
#include "../include/Security.h"
#include "../include/AudioReactive.h" // New voice tech!

int main() {
    KnocksEngine::GlobalSpeaker voice;
    KnocksEngine::SecureStyle security;
    KnocksEngine::MetalMoldingMaterial jungleMetal;
    KnocksEngine::AudioShine voiceSensor;

    security.ValidateSystem();

    // The Global Brand Greeting
    std::cout << voice.GetGreeting("en") << " | " << voice.GetGreeting("es") << std::endl;

    // Simulate Voice Interaction
    voiceSensor.ReactToVoice(85.0f); // High-energy voice detection
    std::cout << "\n[9K VOICE-TO-SHINE SENSOR]" << std::endl;
    std::cout << "> Voice Intensity detected. Metal Glow boosted by: " << voiceSensor.intensity << "x" << std::endl;

    std::cout << "\n>>> KNOCKS 9K JUNGLE STATUS: SECURE & SHINING ™" << std::endl;

    return 0;
}
