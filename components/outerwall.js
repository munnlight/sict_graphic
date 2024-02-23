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

const nuur = box(68.4, 1, 6.5, 0xffffff, -8.5, 7, 3.25);

const ar = box(78.4, 1, 6.5, 0xffffff, 0, -7, 3.25);

const hajuu1 = box(1, 44.2, 6.5, 0xffffff, 25.2, 29.5, 3.25);

const hajuu2 = box(1, 55, 6.5, 0xffffff, 38.7, 20, 3.25);

const outerWall = new THREE.Group();

outerWall.add(nuur);
outerWall.add(ar);
outerWall.add(hajuu1);
outerWall.add(hajuu2);

export { outerWall };
