import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { innerWall, height, innerRightX, innerLeftX, rightDist } from "./innerwall";
import { Rooms, room1len, room2len } from "./rooms";
import { Stairs } from "./stairs";
import { loadGLTFModel } from "./door";

// Шал хийхэд хэрэглэгдэх хэмжээнүүд
const corridor1wid = 2 + innerRightX - innerLeftX + room1len + room2len;
const corridor2wid = 88.5;

const corridor1len = 250;
const corridor2len = 137;

const floor2 = new THREE.Group();

const door1 = loadGLTFModel(
  "./door(2).glb",
  { x: 48, y: 152.9, z: 4.3 },
  { x: Math.PI / 2, y: Math.PI / 2 },
  { x: 4, y: 4, z: 4 }
);
floor2.add(door1);

const inwall = innerWall;
floor2.add(inwall);

const fl2Stairs = Stairs(true);
fl2Stairs.position.set(65.725, 51.85, -0.37);
floor2.add(fl2Stairs);

const rooms = Rooms;
floor2.add(rooms);

const door2 = loadGLTFModel(
  "./door(2).glb",
  { x: 63, y: 113.5, z: 4.3 },
  { x: Math.PI / 2, y: Math.PI / 2 },
  { x: 4, y: 4, z: 4 }
);

floor2.add(door2);
floor2.position.z = 15;

const floor1 = new THREE.Group();

const fl1innerWall = inwall.clone();
//65.725 x position 
const fl1Stairs = Stairs(false);
fl1Stairs.position.set(65.725, 51.85, -0.37);

floor1.add(fl1innerWall);
floor1.add(fl1Stairs);

const floor3 = new THREE.Group();

const fl3innerWall = fl1innerWall.clone();
floor3.position.z = 30;

floor3.add(fl3innerWall);

const flooring = (xpos, ypos, zpos, trns) => {
  const flooring = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({ color: 0xa1662f, transparent: true, opacity: trns });
  const geo1 = new THREE.PlaneGeometry(corridor1wid, corridor1len);
  const geo2 = new THREE.PlaneGeometry(corridor2len, corridor2wid);

  const comp1 = new THREE.Mesh(geo1, mat);
  const comp2 = new THREE.Mesh(geo2, mat);

  comp1.position.set(xpos, ypos, zpos);
  comp2.position.set(-20, -2, zpos);

  flooring.add(comp1);
  flooring.add(comp2);

  return flooring;
};

const flooring1 = flooring((innerRightX + innerLeftX) / 2, 78, 0, 0.5);
floor1.add(flooring1);
const flooring2 = flooring((innerRightX + innerLeftX) / 2, 78, height, 0.5);
floor1.add(flooring2);
const flooring3 = flooring((innerRightX + innerLeftX) / 2, 78, 2 * height, 1);
floor1.add(flooring3);

export { floor1, floor2, floor3 };
