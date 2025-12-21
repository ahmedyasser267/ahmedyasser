/* ============================================
   Three.js 3D Scene Setup
   ============================================ */

let scene, camera, renderer, particleSystem, mouseX = 0, mouseY = 0;

function initThreeScene() {
  const canvas = document.getElementById('three-canvas');
  if (!canvas) {
    console.warn('Canvas element not found');
    return;
  }

  if (typeof THREE === 'undefined') {
    console.error('Three.js library not loaded');
    return;
  }

  try {
    // Scene
    scene = new THREE.Scene();

  // Camera
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Renderer
  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Create Particles
  createParticles();

  // Create Geometric Shapes
  createGeometricShapes();

  // Mouse Movement
  document.addEventListener('mousemove', onMouseMove, false);

  // Window Resize
  window.addEventListener('resize', onWindowResize, false);

    // Start Animation
    animate();
  } catch (error) {
    console.error('Error initializing Three.js scene:', error);
    // Hide canvas on error
    canvas.style.display = 'none';
  }
}

function createParticles() {
  const particleCount = 1000;
  const particlesGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  const color1 = new THREE.Color(0x6366F1); // Primary
  const color2 = new THREE.Color(0xEC4899); // Secondary
  const color3 = new THREE.Color(0x14B8A6); // Accent

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;

    // Positions
    positions[i3] = (Math.random() - 0.5) * 20;
    positions[i3 + 1] = (Math.random() - 0.5) * 20;
    positions[i3 + 2] = (Math.random() - 0.5) * 20;

    // Colors
    const colorChoice = Math.random();
    let color;
    if (colorChoice < 0.33) color = color1;
    else if (colorChoice < 0.66) color = color2;
    else color = color3;

    colors[i3] = color.r;
    colors[i3 + 1] = color.g;
    colors[i3 + 2] = color.b;
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const particleMaterial = new THREE.PointsMaterial({
    size: 0.05,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  });

  particleSystem = new THREE.Points(particlesGeometry, particleMaterial);
  scene.add(particleSystem);
}

function createGeometricShapes() {
  // Main rotating shape
  const geometry = new THREE.IcosahedronGeometry(1, 0);
  const material = new THREE.MeshStandardMaterial({
    color: 0x6366F1,
    metalness: 0.7,
    roughness: 0.3,
    transparent: true,
    opacity: 0.8
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Add lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const pointLight1 = new THREE.PointLight(0x6366F1, 1, 100);
  pointLight1.position.set(5, 5, 5);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0xEC4899, 1, 100);
  pointLight2.position.set(-5, -5, -5);
  scene.add(pointLight2);

  // Store mesh for animation
  scene.userData.mainMesh = mesh;
  scene.userData.pointLight1 = pointLight1;
  scene.userData.pointLight2 = pointLight2;
}

function onMouseMove(event) {
  mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  // Rotate main mesh
  if (scene.userData.mainMesh) {
    scene.userData.mainMesh.rotation.x += 0.005;
    scene.userData.mainMesh.rotation.y += 0.01;
  }

  // Move camera based on mouse
  camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
  camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
  camera.lookAt(scene.position);

  // Animate particles
  if (particleSystem) {
    particleSystem.rotation.y += 0.001;
  }

  // Animate lights
  if (scene.userData.pointLight1) {
    const time = Date.now() * 0.001;
    scene.userData.pointLight1.position.x = Math.sin(time) * 5;
    scene.userData.pointLight1.position.y = Math.cos(time) * 5;
  }

  if (scene.userData.pointLight2) {
    const time = Date.now() * 0.001;
    scene.userData.pointLight2.position.x = Math.cos(time) * -5;
    scene.userData.pointLight2.position.y = Math.sin(time) * -5;
  }

  renderer.render(scene, camera);
}

// Initialize when DOM and Three.js are ready
function initWhenReady() {
  if (typeof THREE === 'undefined') {
    console.warn('Three.js not loaded yet, retrying...');
    setTimeout(initWhenReady, 100);
    return;
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThreeScene);
  } else {
    initThreeScene();
  }
}

initWhenReady();

