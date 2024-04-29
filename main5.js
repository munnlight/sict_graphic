import *as THREE from 'three';
import { animate } from "./components/animation";
import {toono} from './lab_5/toono'
import { scene } from "./components/outside";
import { DragControls } from 'three/examples/jsm/Addons.js';

const t = toono();
scene.add(t);
animate();