import * as THREE from "three";

// const height = 15;
// const wallTrans = 0.5;
// const noTrans = 1;
// const coridorB_Y = 26;
// const outerColor = "#ffffff";
// const innerColor = "#0f3234";
// const toFix = 113.95;

// const box = (x, y, posx, posy, trans, col) => {
//   const geometry = new THREE.BoxGeometry(x, y, height);
//   const material = new THREE.MeshBasicMaterial({
//     color: col,
//     wireframe: false,
//     transparent: true,
//     opacity: trans,
//   });
//   const cube = new THREE.Mesh(geometry, material);
//   cube.position.set(posx, posy, height / 2);
//   return cube;
// };

// const innerBack = box(207, 1, 0, -6.5, wallTrans, outerColor);
// // const innerFront = box(207, 1, 0, 6.5, wallTrans, outerColor);

// const innerRight = box(1, toFix, 207 / 2, 0, wallTrans, innerColor);

// // const tNuur = box(15, 1, 0xeeeef, -2, 21, height / 2, wallTrans);
// // const tZuun = box(1, 9, 0xeeeef, -9, 17, height / 2, wallTrans);
// // const tBaruun = box(1, 9, 0xeeeef, 5, 17, height / 2, wallTrans);

// // // uudni shat
// // const sh1 = box(15, 2, 0.5, 0x6f2c30, -2, 22.5, 0.25, noTrans);
// // const sh2 = box(15, 1.5, 0.5, 0x2c6f69, -2, 22.1, 0.75, noTrans);

// // const nuur = box(129.75, 1, 0xffffff, 0, 6, height / 2, wallTrans);
// // const ar = box(182.9, 1, 0xffffff, 26.075, -6, height / 2, wallTrans);
// // const outerLeft = box(1, 44.2, 0xffffff, 31, 33.6, height / 2, wallTrans);
// // const outerRight = box(
// //   1,
// //   67.5,
// //   0xffffff,
// //   118.15,
// //   coridorB_Y,
// //   height / 2,
// //   wallTrans
// // );
// // const haah1 = box(1, 11.2, 0xffffff, -64.4, 0, height / 2, wallTrans);
// // const haah2 = box(18.5, 1, 0xffffff, 39.65, 55.5, height / 2, wallTrans);

// // // 29.75
// // const insideRight = box(
// //   1,
// //   68.35,
// //   0xffffff,
// //   88.4,
// //   coridorB_Y,
// //   height / 2,
// //   wallTrans
// // );

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
