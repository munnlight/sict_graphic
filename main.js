import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x000000);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new GLTFLoader();

// Load a glTF resource using a relative path accessible from the web server
loader.load(
    'door.glb', // or 'blender/untitled.glb' depending on your directory structure
    function (gltf) {
        const model = gltf.scene;

        scene.add(model);
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.log('An error happened', error);
    }
);

const light = new THREE.DirectionalLight(0xffffff,10);
light.position.set(5,5,5);
scene.add(light);

const light1 = new THREE.DirectionalLight(0xffffff,10);
light1.position.set(-5,-5,-5);
scene.add(light1);

const keyboard = {};
document.addEventListener('keydown', event => {
    keyboard[event.key] = true;
});
document.addEventListener('keyup', event => {
    keyboard[event.key] = false;
});

const axesHelper = new THREE.AxesHelper(10);
scene.add(axesHelper);

const size = 100;
const divisions = 100;
const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

camera.position.z = 5;
camera.position.y = 3;
camera.position.x = 0;

function animate() {
    requestAnimationFrame(animate);

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

    camera.lookAt(scene.position);

    renderer.render(scene, camera);
}

animate();