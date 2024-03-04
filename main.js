import "./style.css";
import * as THREE from "three";
import { scene } from "./components/outside";
//import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { outerWall } from "./components/outerwall";
import { animate } from "./components/animation";
import {  floor1, floor2, floor3 } from "./components/floor";

import { Rhajuu } from "./components/tamber";

const fl1 = floor1;
const fl2 = floor2;
const fl3 = floor3;

scene.add(fl1);
scene.add(fl2);
scene.add(fl3);

const tamber = Rhajuu;
//scene.add(tamber);
//const combinedRooms = CombinedRooms();
//scene.add(combinedRooms);

const stairs = combinedStairs;
stairs.position.set(65.725, 51.85, 0.375);
scene.add(stairs);

const rooms = Rooms;
// scene.add(rooms);
/*
const door1 = loadGLTFModel(
  "./door(2).glb",
  { x: -99, y: -171, z: 4.3 },
  { x: Math.PI / 2, y: Math.PI / 2 },
  { x: 3, y: 4, z: 4 }
);
door1.rotateZ(Math.PI);
scene.add(door1);

const door2 = loadGLTFModel(
  "./door(2).glb",
  { x: 63.3, y: 115.5, z: 4.3 },
  { x: Math.PI / 2, y: Math.PI / 2 },
  { x: 3, y: 4, z: 4 }
);
scene.add(door2);*/

animate();
