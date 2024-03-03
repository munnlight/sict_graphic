import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { innerWall } from "./innerwall";
import { Rooms } from "./rooms";
import { Stairs } from "./stairs";
import { loadGLTFModel } from "./door";


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
fl2Stairs.position.set(65.725, 51.85, 0.375);
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
const fl1Stairs = Stairs(false);
fl1Stairs.position.set(65.725, 51.85, 0.375);

floor1.add(fl1innerWall);
floor1.add(fl1Stairs);

export{ floor1, floor2};

