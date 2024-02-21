import * as THREE from 'three';

const scene = new THREE.Scene();



// Create axes helper
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// Create grid helper
const size = 100;
const divisions = 100;
const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

// Set initial camera position
camera.position.z = 5;
camera.position.y = 3;
camera.position.x = 0;

// Define function to animate the scene
function animate() {
    // Request animation frame for smoother animation
    requestAnimationFrame(animate);

    // Update camera position based on keyboard input
    if (keyboard['ArrowUp']) {
        camera.position.z -= 0.1;
    }
    if (keyboard['ArrowDown']) {
        camera.position.z += 0.1;
    }
    if (keyboard['ArrowLeft']) {
        camera.position.x -= 0.1;
    }
    if (keyboard['ArrowRight']) {
        camera.position.x += 0.1;
    }

    // Make the camera always look at the center of the scene
    camera.lookAt(scene.position);

    // Render the scene
    renderer.render(scene, camera);
}

// Start the animation
animate();
>>>>>>> 3209d097b5dfe4f4407559ba116da53054ba1726
