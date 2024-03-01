import * as THREE from "three";
// import { outerWall } from "./components/outerwall";
import { innerWall, height } from "./components/innerwall";
import { Rooms } from "./components/rooms";
import { table } from "./components/table";
import { chair } from "./components/chair";
import { closet } from "./components/closet";
// import { CombinedRooms } from "./components/combined/coombineRooms";

console.log(height);
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

var HologGeo = new THREE.BoxGeometry(500, 500, 0);
var HologMat = new THREE.MeshLambertMaterial({ color: 0xff8800 });
var Holog = new THREE.Mesh(HologGeo, HologMat);
scene.add(Holog);

const inwall = innerWall;
scene.add(inwall);

const rooms = Rooms;
scene.add(rooms);

const tble = table;
tble.position.set(105, 130, 0);
tble.rotation.z = Math.PI / -2;
scene.add(tble);

const chairs = chair;
chairs.position.set(105, 132, 0);
chairs.rotation.z = Math.PI / -2;
scene.add(chairs);

const clost = closet;
clost.position.set(0, 0, 15);
scene.add(clost);

// const combinedRooms = CombinedRooms();
// scene.add(combinedRooms);

camera.position.set(28, 0, 45);
camera.up = new THREE.Vector3(0, 0, 1);
// camera.lookAt(new THREE.Vector3(1, 0, 1));

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
    camera.position.z -= 1;
  }
  if (keyboard["ArrowDown"]) {
    camera.position.z += 1;
  }
  if (keyboard["ArrowLeft"]) {
    camera.position.x -= 1;
  }
  if (keyboard["ArrowRight"]) {
    camera.position.x += 1;
  }
  if (keyboard["w"]) {
    camera.position.y -= 1;
  }
  if (keyboard["s"]) {
    camera.position.y += 1;
  }

  camera.lookAt(scene.position);

  renderer.render(scene, camera);
}
animate();
