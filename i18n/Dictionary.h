/* * KNOCKSSTUDiOS ™ | AI LAB LEGENDS 
 * OFFICIAL 9K ULTRA POWER DICTIONARY
 * SUBJECT: SENTINEL V GLOBAL COMMANDS
 */

#ifndef KNOCKS_DICTIONARY_H
#define KNOCKS_DICTIONARY_H

#include <string>
#include <map>

namespace KnocksEngine {
    class Dictionary {
    public:
        std::map<std::string, std::string> en = {
            {"GREETING", ">> SENTINEL V ONLINE. STATE YOUR PURPOSE."},
            {"POWER_UP", ">> 9K ULTRA POWER FLOWING. METAL MOLDING ACTIVE."},
            {"WARNING", ">> AUTHORITY BEYOND COMPROMISE. STEP BACK."},
            {"STATUS", ">> TITANGINE CORE: 100% SHINE. ABSOLUTE POWER."}
        };

        std::map<std::string, std::string> es = {
            {"GREETING", ">> CENTINELA V EN LÍNEA. DECLARE SU PROPÓSITO."},
            {"POWER_UP", ">> FLUJO DE PODER 9K ULTRA. MOLDEO DE METAL ACTIVO."},
            {"WARNING", ">> AUTORIDAD SIN CONCESIONES. RETROCEDA."},
            {"STATUS", ">> NÚCLEO TITANGINE: BRILLO AL 100%. PODER ABSOLUTO."}
        };

        std::string Get(std::string lang, std::string key) {
            if (lang == "es") return es[key];
            return en[key];
        }
    };
}

#endif
