// KNOCKS Engine - Rainbow Gradient Shader
void main() {
    // This math creates a shifting rainbow based on time
    float time = u_time;
    vec3 rainbow = vec3(sin(time), sin(time + 2.0), sin(time + 4.0));
    
    // This applies the glow to the edges of the metal molding
    gl_FragColor = vec4(rainbow * 1.5, 1.0); 
}
