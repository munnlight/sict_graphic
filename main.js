import "./style.css";
import * as THREE from "three";
import { scene } from "./components/outside";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { innerWall } from "./components/innerwall";
// import { outerWall } from "./components/outerwall";
import { Rooms } from "./components/rooms";
import { combinedStairs } from "./components/stairs";
import { animate } from "./components/animation";
import { loadGLTFModel } from "./components/door";

const door1 = loadGLTFModel(
  "./door(2).glb",
  { x: -99, y: -171, z: 4.3 },
  { x: Math.PI / 2, y: Math.PI / 2 },
  { x: 3, y: 4, z: 4 }
);
door1.rotateZ(Math.PI);
scene.add(door1);

const inwall = innerWall;
scene.add(inwall);

//const combinedRooms = CombinedRooms();
//scene.add(combinedRooms);

const stairs = combinedStairs;
stairs.position.set(65.725, 51.85, 0.375);
scene.add(stairs);

const rooms = Rooms;
scene.add(rooms);

const door2 = loadGLTFModel(
  "./door(2).glb",
  { x: 63.3, y: 115.5, z: 4.3 },
  { x: Math.PI / 2, y: Math.PI / 2 },
  { x: 3, y: 4, z: 4 }
);
scene.add(door2);

animate();
