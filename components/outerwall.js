import * as THREE from "three";

const box = (x, y, z, col, posx, posy, posz) => {
  const geometry = new THREE.BoxGeometry(x, y, z);
  const material = new THREE.MeshBasicMaterial({
    color: col,
    wireframe: false,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(posx, posy, posz);
  return cube;
};

const tNuur = box(15, 1, 6.5, 0xeeeef, -2, 21, 3.25);
const tZuun = box(1, 9, 6.5, 0xeeeef, -9, 17, 3.25);
const tBaruun = box(1, 9, 6.5, 0xeeeef, 5, 17, 3.25);

// uudni shat
const sh1 = box(15, 2, 0.5, 0x6f2c30, -2, 22.5, 0.25);
const sh2 = box(15, 1.5, 0.5, 0x2c6f69, -2, 22.1, 0.75);

const nuur = box(129.75, 1, 6.5, 0xffffff, 0, 6, 3.25);
const ar = box(152.15, 1, 6.5, 0xffffff, 11.2, -6, 3.25);

const hajuu1 = box(1, 44.2, 6.5, 0xffffff, 31, 33.6, 3.25);
const hajuu2 = box(1, 67.5, 6.5, 0xffffff, 48.7, 22.2, 3.25);

const haah1 = box(1, 25, 6.5, 0xffffff, -38, 0, 3.25);
const haah2 = box(18.5, 1, 6.5, 0xffffff, 39.65, 55.5, 3.25);

const outerWall = new THREE.Group();

outerWall.add(nuur);
outerWall.add(ar);
outerWall.add(hajuu1);
outerWall.add(hajuu2);
outerWall.add(haah1);
outerWall.add(haah2);
outerWall.add(sh1);
outerWall.add(sh2);
outerWall.add(tNuur);
outerWall.add(tZuun);
outerWall.add(tBaruun);

export { outerWall };
