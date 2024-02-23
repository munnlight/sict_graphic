import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff); // corrected line
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const axesHelper = new THREE.AxesHelper(130);
scene.add(axesHelper);

var HologGeo = new THREE.BoxGeometry(170,150,0);
var HologMat = new THREE.MeshLambertMaterial({color:0xff8800});
var Holog = new THREE.Mesh(HologGeo,HologMat);
scene.add(Holog);

// Material class
class Material {
    box(x, y, z, col, posX, posY, posZ) {
        const geometry = new THREE.BoxGeometry(x, y, z);
        const material = new THREE.MeshBasicMaterial({ color: col, wireframe: false });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(posX, posY, posZ); 
        scene.add(cube);
    }
}

const nuur = new Material().box(68.4, 1, 6.5, 0xffffff, -3.4, 12, 3.25);
const ar = new Material().box(87.5, 1, 6.5, 0xffffff, 5.5, -12, 3.25);
const hajuu1 = new Material().box(1, 44.2, 6.5, 0xffffff, 31, 33.6, 3.25);
const hajuu2 = new Material().box(1, 67.5, 6.5, 0xffffff, 48.7, 22.2, 3.25);    
const haah1 = new Material().box(1, 25, 6.5, 0xffffff, -38, 0, 3.25);
const haah2 = new Material().box(18.5, 1, 6.5, 0xffffff, 39.65, 55.5, 3.25);    

// taambar keeshohk
const tNuur = new Material().box(15, 1, 6.5, 0xeeeef, -2, 21, 3.25);
const tZuun = new Material().box(1, 9, 6.5, 0xeeeef, -9, 17, 3.25);
const tBaruun = new Material().box(1, 9, 6.5, 0xeeeef, 5, 17, 3.25);  

// uudni shat
const sh1 = new Material().box(15, 2, 0.5, 0x6F2C30, -2, 22.5, 0.25);
const sh2 = new Material().box(15, 1.5, 0.5, 0x2C6F69, -2, 22.1, 0.75);
// const sh3 = new Material().box(1, 9, 6.5, 0x6F2C30, 5, 17, 3.25);  
// const sh4 = new Material().box(1, 9, 6.5, 0x6F2C30, 5, 17, 3.25);  

// Camera setup
camera.position.set(35, 40, 40);
camera.up = new THREE.Vector3(0, 0, 1);
camera.lookAt(new THREE.Vector3(1, 0, 1));

// Keyboard controls
const keyboard = {};
document.addEventListener('keydown', event => {
    keyboard[event.key] = true;
});
document.addEventListener('keyup', event => {
    keyboard[event.key] = false;
});

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
