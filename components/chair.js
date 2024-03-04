import * as THREE from "three";

const box = (x, y, z, col, position) => {
  const geometry = new THREE.BoxGeometry(x, y, z);
  const material = new THREE.MeshBasicMaterial({
    color: col,
    wireframe: false,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.copy(position);
  return cube;
};

const chairs = () => {
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

  return chair;
};

const positionX = 74;
const positionY = 152.1;
const positionZ = 15;
const chair = new THREE.Group();

for (let i = 0; i < 8; i++) {
  const ch = chairs();
  ch.rotation.z = Math.PI / -1;
  ch.position.set(positionX, positionY - 4.2 * i, positionZ);
  chair.add(ch);
}

for (let i = 0; i < 4; i++) {
  const ch1 = chairs();
  ch1.rotation.z = Math.PI / -2;
  ch1.position.set(61 - 4.2 * i, positionY + 21, positionZ);
  chair.add(ch1);
}

for (let i = 0; i < 2; i++) {
  const ch2 = chairs();
  ch2.rotation.z = Math.PI / -2;
  ch2.position.set(105.5 + 8.5 * i, 129, 15);
  chair.add(ch2);
}

export { chair };
