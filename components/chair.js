import * as THREE from "three";

const box = (x, y, z, col, position) => {
  const geometry = new THREE.BoxGeometry(x, y, z);
  const material = new THREE.MeshBasicMaterial({
    color: col,
    wireframe: false,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.copy(position); // Set position using copy method
  return cube;
};

const tavtsan = new THREE.Vector3(5, 0, 2.3);

const hol1Pos = new THREE.Vector3(5, 0, 1.3);
const suuriPos1 = new THREE.Vector3(5, 0, 0.2);
const suuriPos2 = new THREE.Vector3(5, 0, 0.2);
const naluurPos = new THREE.Vector3(6.1, 0, 3.3);

const tavtsanPos = box(1.8, 2, 0.25, 0x1b2631, tavtsan);

const hol1 = box(0.3, 0.3, 2, 0x1b2631, hol1Pos);
const suuri1 = box(3, 0.3, 0.3, 0x1b2631, suuriPos1);
const suuri2 = box(0.3, 3, 0.3, 0x1b2631, suuriPos2);
const naluur = box(0.3, 2.2, 2.2, 0x1b2631, naluurPos);
naluur.rotation.y = 0.3;

const chair = new THREE.Group();

chair.add(tavtsanPos);
chair.add(hol1);
chair.add(suuri1);
chair.add(suuri2);
chair.add(naluur);
// chair.makeRotationX(3);

// Exporting the table
export { chair };
