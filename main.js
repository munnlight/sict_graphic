import "./style.css";
import * as THREE from "three";
import { scene } from "./components/outside";
//import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { outerWall } from "./components/outerwall";
import { animate } from "./components/animation";
import {  floor1, floor2, floor3 } from "./components/floor";

import { uud } from "./components/ambaar";

const fl1 = floor1;
const fl2 = floor2;
const fl3 = floor3;

scene.add(fl1);
scene.add(fl2);
scene.add(fl3);

const outerwall = outerWall;
scene.add(outerWall);

const tamber = uud;
scene.add(tamber);



animate();
