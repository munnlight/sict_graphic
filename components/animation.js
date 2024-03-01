import * as THREE from "three";
import { scene, camera, renderer } from "./outside";

camera.position.set(0, 105, 0);
camera.up = new THREE.Vector3(0, 0, 1);

const keyboard = {};
document.addEventListener("keydown", (event) => {
  keyboard[event.key] = true;
});
document.addEventListener("keyup", (event) => {
  keyboard[event.key] = false;
});

const radian = 180 / Math.PI;

camera.lookAt(scene.position);
function animate() {
  requestAnimationFrame(animate);
  console.log(camera.rotation.x);
  if (keyboard["ArrowUp"]) {
    camera.position.y += camera.rotation.x * Math.cos(camera.rotation.y);
    camera.position.x += camera.rotation.x * Math.sin(camera.rotation.y);
  }
  if (keyboard["ArrowDown"]) {
    camera.position.y -= camera.rotation.x * Math.cos(camera.rotation.y);
    camera.position.x -= camera.rotation.x * Math.sin(camera.rotation.y);
  }
  if (keyboard["ArrowLeft"]) {
    camera.rotateY(Math.PI / 180);
  }
  if (keyboard["ArrowRight"]) {
    camera.rotateY(-Math.PI / 180);
  }
  if (keyboard["w"]) {
    camera.position.z += 1;
  }
  if (keyboard["s"]) {
    camera.position.z -= 1;
  }
  renderer.render(scene, camera);
  // var direction = new THREE.Vector3(0, 0, -1);
  // direction.applyQuaternion(camera.quaternion);
  // // Scale the direction vector by the distance to move
  // direction.multiplyScalar(1);
  // // Move the camera along the direction vector
  // camera.position.add(direction);
}

animate();

export { animate };
