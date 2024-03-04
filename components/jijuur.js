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

const jijuurs = () => {
  const hPos0 = new THREE.Vector3(0, 0, 0);
  const h0 = box(0.1, 10.6, 15, 0x355e3b, hPos0);

  //   const hPos1 = new THREE.Vector3(0, 0, 0);
  //   const h1 = box(17.75, 1, 15, 0x1b2631, hPos1);

  //   const hPos2 = new THREE.Vector3(-57.45, 0, 0);
  //   const h2 = box(17.75, 1, 15, 0x1b2631, hPos2);

  //   const hPos3 = new THREE.Vector3(8.875, 13.5, 0);
  //   const h3 = box(1, 27, 15, 0x1b2631, hPos3);

  //   const hPos4 = new THREE.Vector3(-66.325, 13.5, 0);
  //   const h4 = box(1, 27, 15, 0x1b2631, hPos4);

  //   const hPos5 = new THREE.Vector3(3.175, 27, 0);
  //   const h5 = box(12.05, 1, 15, 0x1b2631, hPos5);

  //   const hPos6 = new THREE.Vector3(-59.975, 27, 0);
  //   const h6 = box(12.05, 1, 15, 0x1b2631, hPos6);

  //   const hPos7 = new THREE.Vector3(-28.725, 27, 0);
  //   const h7 = box(24.1, 1, 15, 0x1b2631, hPos7);

  const jijuur = new THREE.Group();

  //jijuur.add(h1);
  //tambar.add(h2);
  //   tambar.add(h3);
  //   tambar.add(h4);
  tambar.add(h0);
  //   tambar.add(h5);
  //   tambar.add(h6);
  //tambar.add(h7);

  return jijuur;
};

const positionX = 0;
const positionY = 0;
const positionZ = 50;

const jijuur = new THREE.Group();

for (let i = 0; i < 1; i++) {
  const t = jijuurs();
  //t.rotation.z = Math.PI / -1;
  t.position.set(positionX, positionY, positionZ);
  jijuur.add(t);
}

export { jijuur };
