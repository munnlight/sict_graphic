import * as THREE from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

renderer.setClearColor(0x0000ca);

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const keyboard = {};

document.addEventListener('keydown', event => {
    keyboard[event.key] = true;
});
document.addEventListener('keyup', event => {
    keyboard[event.key] = false;
});

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

const size = 100;
const divisions = 100;
const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

const geometry = new THREE.BoxGeometry( 30, 0.1, 30); 
const material = new THREE.MeshBasicMaterial( {color: 0xff8000, wireframe:false} ); 
const cube = new THREE.Mesh( geometry, material ); 
scene.add( cube );

const geometryBlock = new THREE.BoxGeometry(1,10,30); 
const materialBlock = new THREE.LineDashedMaterial( {
	color: 0xffffff,
	linewidth: 1,
	scale: 1,
	dashSize: 3,
	gapSize: 1,
} );
const Block = new THREE.Mesh( geometryBlock, materialBlock ); 
Block.position.set(-15,5,0);
scene.add( Block );

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
