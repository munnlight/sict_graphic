import * as THREE from "three";

const height = 15;
const wallTrans = 0.5;
const noTrans = 1;
const coridorB_Y = 26;
const innerColor = "#ffffff";
const GlassCol = '#002299';
const toFix = 129.75;

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
const innerBack = box(178.25, 1, 0, -6.5, wallTrans, innerColor);
const innerFront1 = box(129.75, 1, -24.25, 6.5, wallTrans, innerColor);
const innerFront2 = box(25.1, 1, 53.325, 6.5, wallTrans, GlassCol);

const innerRight1 = box(1, toFix, 177.25 / 2, (toFix - 12) / 2, wallTrans, innerColor);
const innerRight2 = box(1, 77.2, 177.25 / 2, toFix + 39.045 , wallTrans, innerColor);


const innerLeft1 = box(1, 27, 147.3 / 2, 28.8, wallTrans, GlassCol);
// const innerLeft2 = box(1, 7.2, 147.3 / 2, 52.825, wallTrans, innerColor);
const innerLeft3 = box(1, 112.1, 147.3 / 2, 108.4, wallTrans, innerColor);
const innerLeft4 = box(1, 37.1, 147.3 / 2, 187.45, wallTrans, innerColor);


const innerWall = new THREE.Group();
innerWall.add(innerBack);
innerWall.add(innerRight1);
innerWall.add(innerRight2);
innerWall.add(innerFront1);
innerWall.add(innerFront2);
innerWall.add(innerLeft1);
// innerWall.add(innerLeft2);
innerWall.add(innerLeft3);
innerWall.add(innerLeft4);


export { innerWall };
