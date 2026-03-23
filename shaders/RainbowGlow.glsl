#ifdef GL_ES
precision mediump float;
#endif

// This variable comes from the engine to keep the rainbow moving
uniform float u_time; 

void main() {
    // 1. Create a shifting rainbow color based on time
    float r = sin(u_time * 2.0) * 0.5 + 0.5;
    float g = sin(u_time * 2.0 + 2.0) * 0.5 + 0.5;
    float b = sin(u_time * 2.0 + 4.0) * 0.5 + 0.5;
    
    vec3 rainbowColor = vec3(r, g, b);

    // 2. Make it glow! We multiply by 1.5 to make it bright
    gl_FragColor = vec4(rainbowColor * 1.5, 1.0);
}
