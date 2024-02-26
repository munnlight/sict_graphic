import * as THREE from "three";

const height = 15;
const wallTrans = 0.5;
const noTrans = 1;
const coridorB_Y = 26;
const innerColor = "#ffffff";
const toFix = 113.95;

const box = (x, y, posx, posy, trans, col) => {
  const geometry = new THREE.BoxGeometry(x, y, height);
  const material = new THREE.MeshBasicMaterial({
    color: col,
    wireframe: false,
    transparent: true,
    opacity: trans,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(posx, posy, height / 2);
  return cube;
};
//
const innerBack = box(150.4, 1, 0, -6.5, wallTrans, innerColor);
const innerRight = box(
  1,
  toFix,
  149.4 / 2,
  (toFix - 12) / 2,
  wallTrans,
  innerColor
);
const innerFront = box(129.75, 1, -10.325, 6.5, wallTrans, innerColor);

const innerWall = new THREE.Group();
innerWall.add(innerBack);
innerWall.add(innerRight);
innerWall.add(innerFront);

export { innerWall };
