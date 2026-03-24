#ifndef KNOCKS_METAL_PRESETS_H
#define KNOCKS_METAL_PRESETS_H

namespace KnocksEngine {
    struct MetalStyle {
        float r, g, b;      // The Color
        float shine;        // How metallic it is
        float smoothness;   // How reflective it is
    };

    // 1. CHROME STYLE (Pure Silver Shine)
    MetalStyle CHROME = { 0.9f, 0.9f, 0.9f, 1.0f, 0.01f };

    // 2. GOLD STYLE (Warm 9K Glow)
    MetalStyle GOLD = { 1.0f, 0.84f, 0.0f, 1.0f, 0.05f };

    // 3. RUBY STYLE (Deep Red Metal)
    MetalStyle RUBY = { 0.8f, 0.0f, 0.1f, 0.8f, 0.1f };
}

#endif
