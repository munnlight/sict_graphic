import "./style.css";
import * as THREE from "three";
import { scene } from "./components/outside";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { innerWall } from "./components/innerwall";
//import { outerWall } from "./components/outerwall";
import { Rooms } from "./components/rooms";
import { combinedStairs } from "./components/stairs";
import { table } from "./components/table";
import { chair } from "./components/chair";
import { closet } from "./components/closet";
import { animate } from "./components/animation";
import { floor1, floor2 } from "./components/floor";

const fl1 = floor1;
const fl2 = floor2;

scene.add(fl1);
scene.add(fl2);

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
clost.rotation.z = Math.PI / 2;
clost.position.set(0, 60, 0);
scene.add(clost);

const door2 = loadGLTFModel(
  "./door(2).glb",
  { x: 45, y: 90, z: 4.3 },
  { x: Math.PI / 2, y: Math.PI / 2 },
  { x: 4, y: 4, z: 4 }
);
scene.add(door2);

animate();
