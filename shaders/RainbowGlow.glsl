#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

void main() {
    // Speed of the color shift
    float t = u_time * 2.5;

    // Extravagant Blues, Greens, and Candy Reds
    // This creates a "Jungle of Colors" effect
    float r = abs(sin(t * 0.7)) * 1.0; 
    float g = abs(sin(t * 0.9 + 2.0)) * 1.0; 
    float b = abs(sin(t * 1.2 + 4.0)) * 1.0; 
    
    // Mixing in some Yellow/Cyan highlights
    vec3 color = vec3(r, g, b);
    
    // Boost the brightness for that "Cat in the Hat" vibrant pop
    gl_FragColor = vec4(color * 2.0, 1.0); 
}
