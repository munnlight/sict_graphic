import * as THREE from "three";
// import { CSG } from "three-js-csg";

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

const tables = () => {
  const tavtsanPos = new THREE.Vector3(0, 0, 3.5);
  const hol1Pos = new THREE.Vector3(-1.5, -3.8, 1.73);
  const hol2Pos = new THREE.Vector3(1.5, -3.8, 1.73);
  const hol3Pos = new THREE.Vector3(1.5, 3.8, 1.73);
  const hol4Pos = new THREE.Vector3(-1.5, 3.8, 1.73);

  const tavtsan = box(3.5, 8, 0.3, 0xccd1d1, tavtsanPos);
  const hol1 = box(0.3, 0.3, 3.5, 0xffffff, hol1Pos);
  const hol2 = box(0.3, 0.3, 3.5, 0xffffff, hol2Pos);
  const hol3 = box(0.3, 0.3, 3.5, 0xffffff, hol3Pos);
  const hol4 = box(0.3, 0.3, 3.5, 0xffffff, hol4Pos);

  // computer
  const screenPos1 = new THREE.Vector3(0, -1.5, 5.1);
  const screenPos2 = new THREE.Vector3(0, 2.3, 5.1);

  const togPos1 = new THREE.Vector3(-0.3, -1.5, 5.3);
  const togPos2 = new THREE.Vector3(-0.5, -1.5, 4.5);
  const togPos3 = new THREE.Vector3(-0.3, 2.4, 5.3);
  const togPos4 = new THREE.Vector3(-0.5, 2.4, 4.5);

  const proPos1 = new THREE.Vector3(0, -3.4, 4.5);
  const proPos2 = new THREE.Vector3(0, 0.4, 4.5);

  const keyPos1 = new THREE.Vector3(0.6, -1.6, 3.7);
  const keyPos2 = new THREE.Vector3(0.6, 2.5, 3.7);

  const screen1 = box(0.175, 2.5, 1.5, 0x17202a, screenPos1);
  const screen2 = box(0.175, 2.5, 1.5, 0x17202a, screenPos2);

  const keyboard1 = box(1, 2, 0.1, 0x17202a, keyPos1);
  const keyboard2 = box(1, 2, 0.1, 0x17202a, keyPos2);

  const togtoogch1 = box(0.4, 0.3, 0.2, 0x17202a, togPos1);
  const togtoogch2 = box(0.2, 0.3, 1.8, 0x17202a, togPos2);
  const togtoogch3 = box(0.4, 0.3, 0.2, 0x17202a, togPos3);
  const togtoogch4 = box(0.2, 0.3, 1.8, 0x17202a, togPos4);

  const process1 = box(1.25, 0.6, 2, 0x17202a, proPos1);
  const process2 = box(1.25, 0.6, 2, 0x17202a, proPos2);

  const table = new THREE.Group();

  table.add(tavtsan);
  table.add(hol1);
  table.add(hol2);
  table.add(hol3);
  table.add(hol4);
  table.add(screen1);
  table.add(screen2);
  table.add(togtoogch1);
  table.add(togtoogch2);
  table.add(togtoogch3);
  table.add(togtoogch4);
  table.add(process1);
  table.add(process2);
  table.add(keyboard1);
  table.add(keyboard2);

  return table;
};

const positionX = 71.5;
const positionY = 150;
const positionZ = 0;
const table = new THREE.Group();

for (let i = 0; i < 4; i++) {
  const t = tables();
  t.rotation.z = Math.PI / -1;
  t.position.set(positionX, positionY - 9 * i, positionZ);
  table.add(t);
}

for (let i = 0; i < 2; i++) {
  const t = tables();
  t.rotation.z = Math.PI / 2;
  t.position.set(58.5 - 8.2 * i, 159.3, positionZ);
  table.add(t);

  const t1 = tables();
  t1.rotation.z = Math.PI / -2;
  t1.position.set(58.5 - 8.2 * i, positionY + 5, positionZ);
  table.add(t1);

  const t2 = tables();
  t2.rotation.z = Math.PI / -2;
  t2.position.set(58.5 - 8.2 * i, 170, positionZ);
  table.add(t2);
}

// jijig oroo
for (let i = 0; i < 2; i++) {
  const t = tables();
  t.rotation.z = Math.PI / -2;
  t.position.set(105.5 + 8.5 * i, 127, 0);
  table.add(t);
}

export { table };
