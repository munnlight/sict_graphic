import * as THREE from "three";
import { scene, camera, renderer } from "./outside";

camera.position.set(45, 200, 30);
camera.up = new THREE.Vector3(0, 0, 1);

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
    camera.position.z -= 2;
  }
  if (keyboard["ArrowDown"]) {
    camera.position.z += 2;
  }
  if (keyboard["ArrowLeft"]) {
    camera.position.x -= 2;
  }
  if (keyboard["ArrowRight"]) {
    camera.position.x += 2;
  }
  if (keyboard["w"]) {
    camera.position.y -= 2;
  }
  if (keyboard["s"]) {
    camera.position.y += 2;
  }

  camera.lookAt(scene.position);

  renderer.render(scene, camera);
}

animate();

export { animate };
