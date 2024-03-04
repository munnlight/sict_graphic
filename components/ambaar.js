import { height , innerColor} from "./innerwall";
import * as THREE from "three";
import {box ,GlassCol} from "./innerwall";
const heightImp = height;
const color = "#ea591c";
const glass = GlassCol;

const RhajuuLong = 32.9;
const RhajuuXpos = -89;
const RhajuuYpos = 53;
const trns = 0.5;
/*
const RurdLong = 11;
const RurdXpos = RhajuuXpos + 11;
const RurdYpos = RhajuuYpos + RhajuuLong;*/

const Rhajuu = box(1,RhajuuLong,RhajuuXpos,RhajuuYpos,trns,color);
const Rurd = box(1,11,-94,69,0.5,color);
Rurd.rotateZ(Math.PI / 2);

const Rhaalga = box(1, 8.5, -103.7, 69, 0.5, glass);
Rhaalga.rotateZ(Math.PI /2);
const urd = box(1, 39.2, -127.1, 69 , 0.5 ,color);
urd.rotateZ(Math.PI /2);
const Lhaalga = box(1, 7.5, -150.6, 69, 0.5 ,glass);
Lhaalga.rotateZ( Math.PI/2);
const Lurd = box(1,10,-160.2,69,0.5,color);
Lurd.rotateZ(Math.PI / 2);
const Lhajuu = box(1,RhajuuLong, -165.2, 53, trns, color);

const uud = new THREE.Group();
uud.add(Rhajuu);
uud.add(Rurd);
//uud.add(Rhaalga);
uud.add(urd);
//uud.add(Lhaalga);
uud.add(Lurd);
uud.add(Lhajuu);

export { uud }