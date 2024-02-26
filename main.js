import * as THREE from "three";

import { outerWall } from "./components/outerwall";
import { CombinedRooms } from "./components/combined/coombineRooms";

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

var HologGeo = new THREE.BoxGeometry(110, 100, 0);
var HologMat = new THREE.MeshLambertMaterial({ color: 0xff8800 });
var Holog = new THREE.Mesh(HologGeo, HologMat);
scene.add(Holog);

const outwall = outerWall;
scene.add(outwall);

const combinedRooms = CombinedRooms();
scene.add(combinedRooms);

camera.position.set(0, 15, 15);
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
    camera.position.z -= 0.4;
  }
  if (keyboard["ArrowDown"]) {
    camera.position.z += 0.4;
  }
  if (keyboard["ArrowLeft"]) {
    camera.position.x -= 0.4;
  }
  if (keyboard["ArrowRight"]) {
    camera.position.x += 0.4;
  }
  if (keyboard["w"]) {
    camera.position.y -= 0.4;
  }
  if (keyboard["s"]) {
    camera.position.y += 0.4;
  }

  camera.lookAt(scene.position);

  renderer.render(scene, camera);
}
animate();
