import "./style.css";
import * as THREE from "three";
import { scene } from "./components/outside";
import { outerWall } from "./components/outerwall";
import { animate } from "./components/animation";
import { floor1, floor2 } from "./components/floor";

const fl1 = floor1;
const fl2 = floor2;

scene.add(fl1);
scene.add(fl2);

const outwall = outerWall;
scene.add(outwall);

animate();
