#ifndef KNOCKS_AUDIO_H
#define KNOCKS_AUDIO_H

namespace KnocksEngine {
    class AudioShine {
    public:
        float intensity = 1.0f;
        // This detects voice levels to make the 9K metal pop
        void ReactToVoice(float decibels) {
            intensity = 1.0f + (decibels / 100.0f);
        }
    };
}
#endif
