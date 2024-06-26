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
import { floorMesh, floor1, floor2, floor3 } from "./components/floor";
import { uud } from "./components/ambaar";
// import { jijuur, jijuur } from "./components/jijuur";
import { loadGLTFModel } from "./components/door";
import { array } from "./display input/drawer";
import { leftDist, startPointY } from "./components/innerwall";
// import * as fs from "fs";

const door1 = loadGLTFModel("./door(2).glb", { x: -200, y: -171, z: 4.3 }, { x: Math.PI / 2, y: Math.PI / 2 }, { x: 3, y: 4, z: 4 });
door1.rotateZ(Math.PI);
scene.add(door1);

const fl1 = floor1;
const fl2 = floor2;
const fl3 = floor3;

scene.add(fl1);
scene.add(fl2);
scene.add(fl3);

const floor = floorMesh;
scene.add(floor);

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
// clost.position.set(-127.3, 9.4, 50);
scene.add(clost);

const outwall = outerWall;
scene.add(outwall);

const ambaar = uud;
//ambaar.position.set(90,90,0);
scene.add(ambaar);

const points = array;
let counter = 0;

const mat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const geo = new THREE.SphereGeometry(0.3);
const geot = new THREE.SphereGeometry(30);

function drawPoints() {
  const g = new THREE.Group();
  const posx = points[9 * counter] * 5 + 97.625;
  const posy = points[9 * counter + 1] * -5 + 39.3;
  const posz = points[9 * counter + 2] * 5 + 30.5;
  console.log(posx, posy, posz);
  const element = new THREE.Mesh(geo, mat);
  element.position.set(posx, posy, posz);
  g.add(element);
  g.rotation.z = Math.PI / 11;
  scene.add(g);
  counter++;
}

setInterval(drawPoints, 1);
animate();
