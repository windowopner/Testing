document.addEventListener("DOMContentLoaded", () => {
    // Accessibility: Disable if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    const canvas = document.getElementById('glcanvas');
    if (!canvas) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Initialize Three.js Renderer
    const renderer = new THREE.WebGLRenderer({ 
        canvas, 
        alpha: true, 
        antialias: true,
        powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio for performance

    // Orthographic Camera (Origin at center, Y points UP)
    const camera = new THREE.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, -1, 10);
    const scene = new THREE.Scene();

    // ==========================================
    // 1. Grid Particles Setup
    // ==========================================
    const spacing = 40; // 40px between particles
    let cols, rows, count;
    let activations, positionsArray, activationAttribute;
    let instancedMesh;

    const particleMaterial = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        vertexShader: `
            attribute float aActivation;
            varying float vActivation;
            varying vec2 vUv;

            void main() {
                vUv = uv;
                vActivation = aActivation;
                // Particles scale up from 20% to 100% when activated
                float scale = 0.2 + aActivation * 0.8;
                vec4 mvPosition = instanceMatrix * vec4(position * scale, 1.0);
                gl_Position = projectionMatrix * modelViewMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            varying float vActivation;
            varying vec2 vUv;

            void main() {
                // Draw a soft circle
                float dist = length(vUv - 0.5);
                float alpha = smoothstep(0.5, 0.2, dist);
                
                // Color matches the Bruh neon theme
                vec3 color = vec3(0.5, 0.9, 1.0);
                
                // Fade opacity based on activation. Invisible when inactive.
                float finalAlpha = alpha * vActivation * 0.6;
                
                gl_FragColor = vec4(color, finalAlpha);
            }
        `
    });

    function initGrid() {
        if (instancedMesh) scene.remove(instancedMesh);
        
        cols = Math.ceil(width / spacing) + 1;
        rows = Math.ceil(height / spacing) + 1;
        count = cols * rows;

        activations = new Float32Array(count);
        positionsArray = new Float32Array(count * 2);

        // A single dot geometry shared across all particles
        const geometry = new THREE.PlaneGeometry(4, 4); 
        instancedMesh = new THREE.InstancedMesh(geometry, particleMaterial, count);
        const dummy = new THREE.Object3D();

        let idx = 0;
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                const px = (x * spacing) - width / 2;
                const py = -(y * spacing) + height / 2;
                
                dummy.position.set(px, py, 0);
                dummy.updateMatrix();
                instancedMesh.setMatrixAt(idx, dummy.matrix);
                
                positionsArray[idx * 2] = px;
                positionsArray[idx * 2 + 1] = py;
                activations[idx] = 0;
                idx++;
            }
        }

        instancedMesh.instanceMatrix.needsUpdate = true;
        activationAttribute = new THREE.InstancedBufferAttribute(activations, 1);
        geometry.setAttribute('aActivation', activationAttribute);
        scene.add(instancedMesh);
    }

    // ==========================================
    // 2. Glass Sphere Cursor Setup
    // ==========================================
    const cursorSize = 90;
    const cursorGeo = new THREE.PlaneGeometry(cursorSize, cursorSize);
    const cursorMat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        vertexShader: `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            varying vec2 vUv;
            void main() {
                vec2 p = vUv * 2.0 - 1.0;
                float r = length(p);
                
                // Crop to perfect circle
                if (r > 1.0) discard;
                
                // Darker/thicker rim light for glass edge
                float rim = smoothstep(0.7, 1.0, r);
                
                // Primary specular highlight (Top Left)
                float specDist = length(p - vec2(-0.35, 0.35)); 
                float specular = smoothstep(0.3, 0.0, specDist) * 0.9;
                
                // Secondary reflection (Bottom Right)
                float specDist2 = length(p - vec2(0.4, -0.4));
                float specular2 = smoothstep(0.4, 0.0, specDist2) * 0.3;
                
                // Inner soft shadow for depth
                float shadow = smoothstep(0.0, 1.0, r) * 0.15;
                
                vec3 color = vec3(1.0); // Pure white glass
                float alpha = rim * 0.25 + specular + specular2 + shadow;
                
                gl_FragColor = vec4(color, clamp(alpha, 0.0, 1.0) * 0.7);
            }
        `
    });
    const cursorMesh = new THREE.Mesh(cursorGeo, cursorMat);
    cursorMesh.position.set(-10000, -10000, 1); // Start hidden offscreen
    scene.add(cursorMesh);

    // ==========================================
    // 3. Interaction & Animation Loop
    // ==========================================
    const mousePos = new THREE.Vector2(-10000, -10000);
    const targetMousePos = new THREE.Vector2(-10000, -10000);
    let firstMove = true;

    window.addEventListener('pointermove', (e) => {
        targetMousePos.x = e.clientX - width / 2;
        targetMousePos.y = -(e.clientY - height / 2);
        
        if (firstMove) {
            mousePos.copy(targetMousePos);
            firstMove = false;
        }
    }, { passive: true });

    window.addEventListener('resize', () => {
        width = window.innerWidth;
        height = window.innerHeight;
        renderer.setSize(width, height);
        
        camera.left = -width / 2;
        camera.right = width / 2;
        camera.top = height / 2;
        camera.bottom = -height / 2;
        camera.updateProjectionMatrix();
        
        initGrid();
    }, { passive: true });

    // Initialize the grid on load
    initGrid();

    function animate() {
        requestAnimationFrame(animate);

        // Smooth cursor inertia (lerp)
        if (!firstMove) {
            mousePos.lerp(targetMousePos, 0.15);
        }
        cursorMesh.position.set(mousePos.x, mousePos.y, 1); // Z=1 ensures it renders above particles

        // Update Particle Grid Activations (CPU side calculation - very fast)
        let needsUpdate = false;
        const revealRadius = 120; // How far the reveal effect reaches
        
        for (let i = 0; i < count; i++) {
            const px = positionsArray[i * 2];
            const py = positionsArray[i * 2 + 1];
            
            // Distance from particle to cursor
            const dx = px - cursorMesh.position.x;
            const dy = py - cursorMesh.position.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            // If inside radius, wake up particle
            if (dist < revealRadius) {
                // Center is strongest (1.0), edge is 0.0
                const force = 1.0 - (dist / revealRadius);
                activations[i] = Math.max(activations[i], force);
                needsUpdate = true;
            }
            
            // Constantly decay activation back to 0
            if (activations[i] > 0) {
                activations[i] -= 0.015; // Decay speed
                if (activations[i] < 0) activations[i] = 0;
                needsUpdate = true;
            }
        }

        // Only upload to GPU if values actually changed
        if (needsUpdate && activationAttribute) {
            activationAttribute.needsUpdate = true;
        }

        renderer.render(scene, camera);
    }

    animate();
});
