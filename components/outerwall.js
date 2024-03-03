import * as THREE from "three";
//import { innerRightX, oLeft1len, oLeft1Y, oRightLen, xLinear, xRoomW, innerLeftX, rightDist } from "./innerwall";
import { room1len, room2len } from "./rooms";

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
  const material = new THREE.MeshBasicMaterial({
    color: col,
    wireframe: false,
    transparent: true,
    opacity: trans,
  });
  const cube = new THREE.Mesh(geometry, material);
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