// Replace the materials in your init() function:

// 1. KNOCKS Text (Acid Jungle Green)
const kMat = new THREE.MeshPhongMaterial({ 
    color: 0x32CD32, 
    shininess: 100, 
    emissive: 0x113311 
});

// 2. CREATIVESTUDiOS Text (Volcanic Crimson / Candy Red)
const cMat = new THREE.MeshPhongMaterial({ 
    color: 0xFF0800, 
    shininess: 80, 
    emissive: 0x220000 
});

// 3. Particles (Electric Cyan)
const pMat = new THREE.PointsMaterial({ 
    color: 0x00FFFF, 
    size: 0.04, 
    transparent: true, 
    opacity: 0.6, 
    blending: THREE.AdditiveBlending 
});
