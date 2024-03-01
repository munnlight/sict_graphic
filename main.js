import "./style.css";
import * as THREE from "three";
import { scene } from "./components/outside";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { innerWall } from "./components/innerwall";
// import { outerWall } from "./components/outerwall";
import { Rooms } from "./components/rooms";
import { combinedStairs } from "./components/stairs";
import { animate } from "./components/animation";
import { table } from "./components/table";
import { chair } from "./components/chair";
import { closet } from "./components/closet";
import { loadGLTFModel } from "./components/door";

const door1 = loadGLTFModel(
  "./door(2).glb",
  { x: 48, y: 152.9, z: 4.3 },
  { x: Math.PI / 2, y: Math.PI / 2 },
  { x: 4, y: 4, z: 4 }
);
loadGLTFModel(
  "./door(2).glb",
  { x: 45, y: 90, z: 4.3 },
  { x: Math.PI / 2, y: Math.PI / 2 },
  { x: 4, y: 4, z: 4 }
);

// const doors = doorGroup;
scene.add(door1);

const inwall = innerWall;
scene.add(inwall);

const stairs = combinedStairs;
stairs.position.set(65.725, 51.85, 0.375);
scene.add(stairs);

const rooms = Rooms;
scene.add(rooms);

const tble = table;
scene.add(tble);

const chr = chair;
scene.add(chr);

const clost = closet;
clost.position.set(30, 140, 50);
scene.add(clost);

const door2 = loadGLTFModel(
  "./door(2).glb",
  { x: 45, y: 90, z: 4.3 },
  { x: Math.PI / 2, y: Math.PI / 2 },
  { x: 4, y: 4, z: 4 }
);
scene.add(door2);

animate();
