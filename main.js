<<<<<<< HEAD
import * as THREE from "three";
// import { CSG } from "three-js-csg";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

//import { outerWall } from "./components/outerwall";
import { innerWall} from "./components/innerwall";
import { doorGroup } from "./components/door";
=======
>>>>>>> 6b173f15f76bab2bc2247201b20cf3d3ebf2272a
import "./style.css";
import * as THREE from "three";
import { scene } from "./components/outside";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
//import { outerWall } from "./components/outerwall";
import { innerWall } from "./components/innerwall";
// import { doorGroup } from "./components/door";
// import { outerWall } from "./components/outerwall";
<<<<<<< HEAD
//import { innerWall, height } from "./components/innerwall";
import { Rooms } from "./components/rooms";
// import { CombinedRooms } from "./components/combined/coombineRooms";
import { combinedStairs  } from "./components/stairs";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000); // corrected line
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const axesHelper = new THREE.AxesHelper(130);
scene.add(axesHelper);

var HologGeo = new THREE.BoxGeometry(110, 100, 0);
var HologMat = new THREE.MeshLambertMaterial({ color: 0xff8800 });
var Holog = new THREE.Mesh(HologGeo, HologMat);
scene.add(Holog);

=======
import { Rooms } from "./components/rooms";
import { combinedStairs } from "./components/stairs";
import { animate } from "./components/animation";
>>>>>>> 6b173f15f76bab2bc2247201b20cf3d3ebf2272a

function loadGLTFModel(filePath, position, rotation, scale) {
  const haalga = new THREE.Group();

  const loader = new GLTFLoader();
  loader.load(
    filePath,
    function (gltf) {
      const model = gltf.scene;

      model.traverse(function (child) {
        if (child.isMesh) {
          const newMaterial = new THREE.MeshStandardMaterial({ color: 0xa0492d }); // Red color
          child.material = newMaterial;
        }
      });

      console.log(model);

<<<<<<< HEAD
          // Apply position
          if (position) {
              model.position.set(position.x || 0, position.y || 0, position.z || 0);
          }

          // Apply scale
          if (scale) {
              model.scale.set(scale.x || 1, scale.y || 1, scale.z || 1);
          }

          haalga.add(model);
      },
      function (xhr) {
          console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      function (error) {
          console.log('An error happened', error);
      }

=======
      if (rotation) {
        model.rotateX(rotation.x || 0);
        model.rotateY(rotation.y || 0);
        model.rotateZ(rotation.z || 0);
      }

      if (position) {
        model.position.set(position.x || 0, position.y || 0, position.z || 0);
      }

      if (scale) {
        model.scale.set(scale.x || 1, scale.y || 1, scale.z || 1);
      }

      scene.add(model);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("An error happened", error);
    }
>>>>>>> 6b173f15f76bab2bc2247201b20cf3d3ebf2272a
  );
  return haalga;
}

<<<<<<< HEAD
const leftdoor = loadGLTFModel('door(2).glb', { x: -99.5, y: -174.5, z: 4.3 }, { x: Math.PI/2, y: Math.PI/2, }, { x: 4, y: 4, z: 4 });
const rightdoor = loadGLTFModel('door(2).glb', { x: 64.5, y: 113.8, z: 4.3 }, { x: Math.PI / 2, y: Math.PI / 2 }, { x: 4, y: 4, z: 4 });
leftdoor.rotateZ(Math.PI);
scene.add(leftdoor);
scene.add(rightdoor);
//const doors = doorGroup;
//scene.add(doors);

const light = new THREE.DirectionalLight(0xffffff,5);
light.position.set(5,5,5);
scene.add(light);

const light1 = new THREE.DirectionalLight(0xffffff,10);
light1.position.set(-5,-5,-5);
scene.add(light1);
=======
const door = loadGLTFModel(
  "./door(2).glb",
  { x: 48, y: 152.9, z: 4.3 },
  { x: Math.PI / 2, y: Math.PI / 2 },
  { x: 4, y: 4, z: 4 }
);
loadGLTFModel("./door(2).glb", { x: 45, y: 90, z: 4.3 }, { x: Math.PI / 2, y: Math.PI / 2 }, { x: 4, y: 4, z: 4 });

// const doors = doorGroup;
>>>>>>> 6b173f15f76bab2bc2247201b20cf3d3ebf2272a

const inwall = innerWall;
scene.add(inwall);

const stairs = combinedStairs;
stairs.position.set(65.725, 51.85, 0.375);
scene.add(stairs);

const rooms = Rooms;
scene.add(rooms);

animate();
