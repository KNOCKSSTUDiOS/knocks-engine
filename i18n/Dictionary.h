#ifndef KNOCKS_I18N_H
#define KNOCKS_I18N_H

#include <string>
#include <map>

namespace KnocksEngine {
    class GlobalSpeaker {
    public:
        // Your Brand Kit translated for the world
        std::map<std::string, std::string> english = {
            {"welcome", "Welcome to the 9K Jungle of Colors"},
            {"status", "Metal Molding: ACTIVE"}
        };

        std::map<std::string, std::string> spanish = {
            {"welcome", "Bienvenido a la Selva de Colores 9K"},
            {"status", "Moldeado de Metal: ACTIVO"}
        };

        std::map<std::string, std::string> japanese = {
            {"welcome", "9Kジャングル・オブ・カラーズへようこそ"},
            {"status", "メタル成形：アクティブ"}
        };

        // This makes your brand accessible to everyone
        std::string GetGreeting(std::string lang) {
            if (lang == "es") return spanish["welcome"];
            if (lang == "jp") return japanese["welcome"];
            return english["welcome"];
        }
    };
}
#endif
