import * as THREE from "three";
import {
  height,
  innerColor,
  leftDist,
  rightDist,
  innerLeftX,
  innerRightX,
  box,
  door_len,
} from "./innerwall";

// const heightImp = height;
const coloR = innerColor;

// Өрөө 1 хэмжээ
const room1len = 29.75;
const room1right = 5.7;
const room1left = 3.75;
const room1wid = room1right + door_len + room1left;

// Өрөө 2 хэмжээ
const room2len = 27.75;
const room2right = 5.1;
const room2wid = 58.5;
const room2left = room2wid - door_len - room2right;

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
  room1wid,
  innerRightX + 0.5 + room1len / 2,
  rightDist - room1right
);

// Өрөө 2-ын хана
const room2 = rooms(
  room2len,
  room2wid,
  innerLeftX - 0.5 - room2len / 2,
  leftDist - room2left
);

const Rooms = new THREE.Group();
Rooms.add(room1);
Rooms.add(room2);

// Хэмжээ шалгагч
// const checkerR = box(room1len, room1left * 2, innerRightX + room1len / 2 + 0.5, rightDist + door_len, 1, 0xff0000);
// const checkerL = box(room2len, room2left * 2, innerLeftX - room2len / 2 - 0.5, leftDist, 1, 0xff0000);
// Rooms.add(checkerR);
// Rooms.add(checkerL);

export { Rooms, rooms, room1len, room2len };
