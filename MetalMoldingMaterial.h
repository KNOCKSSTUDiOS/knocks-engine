#ifndef KNOCKS_METAL_MOLDING_MATERIAL_H
#define KNOCKS_METAL_MOLDING_MATERIAL_H

#include <string>
#include "Math/Vector3.h"

namespace KnocksEngine {

    /**
     * @brief Specialized material class for the "9K" Metal Molding effect.
     * Focuses on high-specular highlights and molding-specific reflections.
     */
    class MetalMoldingMaterial {
    public:
        MetalMoldingMaterial();

        // Core "9K" Metal Properties
        float metallic = 1.0f;       // Solid metal molding (always 1.0)
        float roughness = 0.05f;     // Ultra-smooth for that "glass-like" shine
        float reflectance = 0.95f;   // High-end laser-polished finish
        
        // The "Molding" Animation Vector
        // Used by the Vertex Shader to animate the letters
        float moldingDeformationScale = 0.0f; 

        // Aesthetic Colors
        Vector3 baseColor = Vector3(0.8f, 0.8f, 0.82f); // Platinum/Chrome base
        Vector3 shineTint = Vector3(1.0f, 1.0f, 1.0f); // Bright white highlights

        /**
         * @brief Updates the molding animation based on engine delta time.
         * Controls the "moving animation letter" effect.
         */
        void UpdateAnimation(float deltaTime, float intensity);

    private:
        std::string materialID = "9K_METAL_MOLDING_PRIMARY";
    };

} // namespace KnocksEngine

#endif // KNOCKS_METAL_MOLDING_MATERIAL_H
