import * as THREE from "three";

const scene = new THREE.Scene();

const axesHelper = new THREE.AxesHelper(5);
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

  camera.lookAt(scene.position);
  renderer.render(scene, camera);
}

animate();
