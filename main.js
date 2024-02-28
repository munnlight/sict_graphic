import * as THREE from "three";
import * as ThreeCSG from 'three-csg';
import { outerWall } from "./components/outerwall";
import { CombinedRooms } from "./components/combined/coombineRooms";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { color } from "three/examples/jsm/nodes/shadernode/ShaderNode";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000); // corrected line
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const axesHelper = new THREE.AxesHelper(130);
scene.add(axesHelper);

function Durs() {
  var shape = new THREE.Shape();
  shape.moveTo(10, 10);
  shape.lineTo(10, 40);
  // Add holes
  var hole1 = new THREE.Path();
  hole1.absellipse(16, 24, 2, 3, 0, Math.PI * 2, true);
  shape.holes.push(hole1);

  var hole2 = new THREE.Path();
  // Define the keyhole shape
  var keyholeShape = new THREE.Shape();
  keyholeShape.absarc(23, 24, 2, 0, Math.PI * 2, true);
  keyholeShape.moveTo(22, 20);
  keyholeShape.lineTo(24, 20);
  keyholeShape.lineTo(24, 28);
  keyholeShape.lineTo(22, 28);
  keyholeShape.closePath();
  // Add the keyhole shape as a hole
  shape.holes.push(hole2);

  var hole3 = new THREE.Path();
  hole3.absarc(20, 16, 2, 0, Math.PI, true);
  shape.holes.push(hole3);

  return shape;
}

// Extrude the shape
var extrudeSettings = {
  steps: 2, // Number of depth segments
  depth: 2, // Depth of the extrusion
  bevelEnabled: true, // Apply bevel to the extrusion
  bevelThickness: 1, // Bevel thickness
  bevelSize: 1, // Bevel size
  bevelSegments: 1, // Number of bevel segments
};

var AGeo = new THREE.ExtrudeGeometry(Durs(), extrudeSettings);
var AMat = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
var A = new THREE.Mesh(AGeo, AMat);
A.position.set(10, 5, 0);
A.rotateX(Math.PI/2);
scene.add(A);


camera.position.set(0, 15, 15);
camera.up = new THREE.Vector3(0, 0, 1);
camera.lookAt(new THREE.Vector3(1, 0, 1));

const keyboard = {};
document.addEventListener("keydown", (event) => {
  keyboard[event.key] = true;
});
document.addEventListener("keyup", (event) => {
  keyboard[event.key] = false;
});


function animate() {
  requestAnimationFrame(animate);

  // Adjust camera position based on keyboard input
  if (keyboard["ArrowUp"]) {
    camera.position.z -= 0.1;
  }
  if (keyboard["ArrowDown"]) {
    camera.position.z += 0.1;
  }
  if (keyboard["ArrowLeft"]) {
    camera.position.x -= 0.1;
  }
  if (keyboard["ArrowRight"]) {
    camera.position.x += 0.1;
  }
  if (keyboard["w"]) {
    camera.position.y -= 0.1;
  }
  if (keyboard["s"]) {
    camera.position.y += 0.1;
  }

  // Look at the scene's position
  camera.lookAt(scene.position);

  // Render the scene
  renderer.render(scene, camera);
}

animate();
