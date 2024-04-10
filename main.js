import "./style.css";
import * as THREE from "three";
import { scene } from "./components/outside";
import { outerWall } from "./components/outerwall";
import { Rooms } from "./components/rooms";
import { table } from "./components/table";
import { chair } from "./components/chair";
import { tambar } from "./components/tambar";
import { closet } from "./components/closet";
import { animate } from "./components/animation";
import { floor1, floor2, floor3 } from "./components/floor";
import { uud } from "./components/ambaar";
import { loadGLTFModel } from "./components/door";
import { array } from "./display input/drawer";
import { leftDist, startPointY } from "./components/innerwall";
// import * as fs from "fs";

// const points = array;

const door1 = loadGLTFModel("./logo.glb", { x: -200, y: -171, z: 4.3 }, { x: Math.PI / 2, y: Math.PI / 2 }, { x: 3, y: 4, z: 4 });
door1.rotateZ(Math.PI);
scene.add(door1);

const fl1 = floor1;
const fl2 = floor2;
const fl3 = floor3;

scene.add(fl1);
scene.add(fl2);
scene.add(fl3);

const rooms = Rooms;
scene.add(rooms);

const tambars = tambar;
scene.add(tambars);

const tble = table;
scene.add(tble);

const chr = chair;
scene.add(chr);

const clost = closet;
clost.rotation.z = Math.PI / 2;
clost.position.set(-127.3, 9.4, 0);
scene.add(clost);

const outwall = outerWall;
scene.add(outwall);

const ambaar = uud;
//ambaar.position.set(90,90,0);
scene.add(ambaar);

const points = array;
let counter = 0;

const mat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const geo = new THREE.SphereGeometry(0.3);

function drawPoints() {
  const posx = points[3 * counter] * 5 + 80.625;
  const posy = points[3 * counter + 1] * 5 + startPointY;
  const posz = points[3 * counter + 2] * 5 + 31;
  console.log(posx, posy, posz);
  const element = new THREE.Mesh(geo, mat);
  element.position.set(posx, posy, posz);
  scene.add(element);
  counter++;
}

setInterval(drawPoints, 4);
animate();
