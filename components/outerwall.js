import * as THREE from "three";

const height = 15;
const wallTrans = 0.5;
const noTrans = 1;
const coridorB_Y = 26;
const outerColor = "#ffffff";

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

const outerRight = box(1, 243.55);
// const outerWall = new THREE.Group();
// outerWall.add(innerBack);
// // outerWall.add(innerFront);
// outerWall.add(innerRight);

// // outerWall.add(nuur);
// // outerWall.add(ar);
// // outerWall.add(outerLeft);
// // outerWall.add(outerRight);
// // outerWall.add(haah1);
// // outerWall.add(haah2);
// // outerWall.add(sh1);
// // outerWall.add(sh2);
// // outerWall.add(tNuur);
// // outerWall.add(tZuun);
// // outerWall.add(tBaruun);
// // outerWall.add(insideRight);

// export { outerWall };
