import * as THREE from "three";
import { innerRightX, oLeft1len, oLeft1Y, oRightLen, xLinear, xRoomW, innerLeftX, rightDist } from "./innerwall";
import { room1len, room2len } from "./rooms";

<<<<<<< HEAD
<<<<<<< HEAD
  const height = 15;
  const wallTrans = 0.5;
  const noTrans = 1;
  const coridorB_Y = 26;
  const outerColor = "#ffffff";

<<<<<<< HEAD
const box = (x, y, posx, posy, trans, col) => {
  const geometry = new THREE.BoxGeometry(x, y, height);
=======
// Хануудын урт
const oFront1len = room1len + innerRightX - innerLeftX + room2len + 2;
const oFront2len = 129.75;
const oBackLen = 178.25 + room1len;
// const oLeft1len =

// Туслах тогтмолууд
const moveBack = 2 * xLinear + xRoomW + 5.5;
const transBack = 0.9;
const transFront = 0.2;
const col1 = "#868050";
const col2 = "#203133";
const col3 = "#868050";

// Хана байгуулах функц
const wall = (x, y, posx, posy, trans, col) => {
  const geometry = new THREE.BoxGeometry(x, y, 45);
>>>>>>> b3d145d1d3cc0a16272902196ccf8302a9e8d94c
  const material = new THREE.MeshBasicMaterial({
    color: col,
    wireframe: false,
    transparent: true,
    opacity: trans,
  });
  const cube = new THREE.Mesh(geometry, material);
<<<<<<< HEAD
  cube.position.set(posx, posy, height / 2);
  return cube;
};

const outerRight = box(1, 243.55);
// const outerWall = new THREE.Group();
// outerWall.add(innerBack);
// // outerWall.add(innerFront);
// outerWall.add(innerRight);
=======
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

    const outerRight = box(1, 243.55, )
  const outerWall = new THREE.Group();
  //outerWall.add(innerBack);
  //outerWall.add(innerFront);
  //outerWall.add(innerRight);
>>>>>>> 6b173f15f76bab2bc2247201b20cf3d3ebf2272a

    outerWall.add(nuur);
    outerWall.add(ar);
    outerWall.add(outerLeft);
    outerWall.add(outerRight);
    outerWall.add(haah1);
    outerWall.add(haah2);
    outerWall.add(sh1);
    outerWall.add(sh2);
    outerWall.add(tNuur);
    outerWall.add(tZuun);
    outerWall.add(tBaruun);
    outerWall.add(insideRight);

    export { outerWall };*/
=======
export { outerWall };
>>>>>>> 714f603e00bc48eca6830aba7a1b3a3168a38abf
=======
  cube.position.set(posx, posy, 22.5);
  return cube;
};

// Хананууд
const oRight = wall(1, oRightLen, innerRightX + room1len, oRightLen / 2 - moveBack, transBack, col1);
const oFront1 = wall(oFront1len, 1, innerRightX + room1len - oFront1len / 2, oRightLen - moveBack, transBack, col1);
const oLeft1 = wall(1, oLeft1len, innerLeftX - room2len - 1.5, oLeft1Y + oLeft1len / 2, transBack, col2);
const oFront2 = wall(oFront2len + 3, 1, innerLeftX - room2len - oFront2len / 2 - 3, 47.8 - 6, transBack, col2);
const oBack = wall(oBackLen, 1, 27.5 / 2, -47, transBack, col2);

const outerWall = new THREE.Group();

outerWall.add(oRight);
outerWall.add(oFront1);
outerWall.add(oLeft1);
outerWall.add(oFront2);
outerWall.add(oBack);

// Checker
const oLeft2 = wall(1, 89, -89.125, -2, transBack, col2);
outerWall.add(oLeft2);

export { outerWall };
>>>>>>> b3d145d1d3cc0a16272902196ccf8302a9e8d94c
