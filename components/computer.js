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

const screenPos1 = new THREE.Vector3(-1, -1, 5.3);
const screenPos2 = new THREE.Vector3(0, 0, 5.3);

const screen1 = box(0.175, 2.5, 1.5, 0x0000ff, screenPos1);
const screen2 = box(0.175, 2.5, 1.5, 0xff00ff, screenPos2);

const computer = new THREE.Group();

computer.add(screen1);
computer.add(screen2);

export { computer };
