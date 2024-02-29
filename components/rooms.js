import * as THREE from "three";
import {
  height,
  innerColor,
  leftDist,
  rightDist,
  innerLeftX,
  innerRightX,
  box,
  door_len
} from "./innerwall";

// const heightImp = height;
const coloR = innerColor;

// Өрөө 1 хэмжээ
const room1len = 29.75;
const room1right = 4.45;
const room1left = 9.9;

// Өрөө 2 хэмжээ
// const room2len =

const rooms = (length, dist, posx, posy) => {
  const room = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({
    color: coloR,
    transparent: true,
    opacity: 0.2,
  });
  const geo = new THREE.BoxGeometry(length, 1, height);

  const comp1 = new THREE.Mesh(geo, mat);
  const comp2 = new THREE.Mesh(geo, mat);

  comp1.position.set(posx, posy - 0.5, height / 2);
  comp2.position.set(posx, posy + dist + 0.5, height / 2);

  room.add(comp1);
  room.add(comp2);

  return room;
};

// Өрөө 1-ийн хана
const room1 = rooms(
  room1len,
  room1right + room1left + door_len,
  innerRightX + 0.5 + room1len / 2,
  rightDist - room1right
);

// Өрөө 2-ын хана
// const room2 = rooms(

// )

// Хэмжээ шалгагч
const checker = box(
  room1len,
  room1left * 2,
  innerLeftX + 0.5 + room1len,
  rightDist,
  1,
  0xff0000
);

const Rooms = new THREE.Group();
Rooms.add(room1);

// Rooms.add(checker);
export { Rooms,rooms };
