#ifndef KNOCKS_INTRO_H
#define KNOCKS_INTRO_H

#include <iostream>
#include <string>

namespace KnocksEngine {
    class IntroSpeech {
    public:
        void PlayIntro(std::string lang) {
            if (lang == "en") {
                std::cout << "\n[SPEECH GENERATOR - ENGLISH]" << std::endl;
                std::cout << "Metal molds and colors bloom," << std::endl;
                std::cout << "Lighting up the digital room." << std::endl;
                std::cout << "9K shine and jungle soul," << std::endl;
                std::cout << "Knocks Engine takes control! ™" << std::endl;
            } else if (lang == "es") {
                std::cout << "\n[GENERADOR DE DISCURSO - ESPAÑOL]" << std::endl;
                std::cout << "El metal brilla, el color florece," << std::endl;
                std::cout << "En la jungla 9K, el arte crece." << std::endl;
            }
        }
    };
}
#endif
