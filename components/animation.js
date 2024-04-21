import * as THREE from "three";
import { scene, camera, renderer } from "./outside";

// camera.position.set(-170, 80, 90);
// camera.up = new THREE.Vector3(0, 0, 1);

const keyboard = {};
document.addEventListener("keydown", (event) => {
  keyboard[event.key] = true;
});
document.addEventListener("keyup", (event) => {
  keyboard[event.key] = false;
});

  var vx,
  vy,
  alp = 0,
  urt = 0,
  ondor = 0,
  d = 2;

  document.onkeydown = function (evt) {
  switch (evt.keyCode) {
      case 37: // left arrow key
          alp -= 0.05;
          break;
      case 39: // right arrow key
          alp += 0.05;
          break;
      case 38: // up arrow key
          camera.position.x += d * Math.sin(alp);
          camera.position.y += d * Math.cos(alp);
          break;
      case 40: // down arrow key
          camera.position.x -= d * Math.sin(alp);
          camera.position.y -= d * Math.cos(alp);
          break;
      case 87: // W key
          camera.position.x += d * Math.sin(alp);
          camera.position.y += d * Math.cos(alp);
          camera.position.z += 5;
          break;
      case 83: // S key
          camera.position.x -= d * Math.sin(alp);
          camera.position.y -= d * Math.cos(alp);
          camera.position.z -= 5;
          break;
  }

  vx = camera.position.x + d * Math.sin(alp);
  vy = camera.position.y + d * Math.cos(alp);
  camera.lookAt(new THREE.Vector3(vx, vy, camera.position.z - 1));
  };

camera.lookAt(scene.position);
function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

camera.position.set(10, 0, 5);
camera.lookAt(new THREE.Vector3(10, 5, 5));
camera.up = new THREE.Vector3(0, 0, 1);

animate();

export { animate };
