import * as THREE from "three";

import { outerWall } from "./components/outerwall";
import { CombinedRooms } from "./components/combined/coombineRooms";
import { table } from "./components/table";
import { chair } from "./components/chair";
// import { computer } from "./components/computer";
import { closet } from "./components/closet";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff); // corrected line
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const axesHelper = new THREE.AxesHelper(130);
scene.add(axesHelper);

var HologGeo = new THREE.BoxGeometry(200, 150, 0);
var HologMat = new THREE.MeshLambertMaterial({ color: 0x145a32 });
var Holog = new THREE.Mesh(HologGeo, HologMat);
scene.add(Holog);

// const outwall = outerWall;
// scene.add(outwall);

// const combinedRooms = CombinedRooms();
// scene.add(combinedRooms);

// table
// const tab = table;
// tab.position.set(5, 0, 10);
// scene.add(tab);

// // chair
// const chairs = chair;
// chairs.position.set(5, 5, 10);
// scene.add(chairs);

// closet
const clost = closet;
clost.position.set(0, 0, 0);
scene.add(clost);

camera.position.set(20, 0, 18);
camera.up = new THREE.Vector3(0, 0, 1);
camera.lookAt(new THREE.Vector3(1, 0, 1));

// Keyboard controls
const keyboard = {};
document.addEventListener("keydown", (event) => {
  keyboard[event.key] = true;
});
document.addEventListener("keyup", (event) => {
  keyboard[event.key] = false;
});

function animate() {
  requestAnimationFrame(animate);
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

  camera.lookAt(scene.position);

  renderer.render(scene, camera);
}
animate();
