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

animate();
