import "./style.css";
import * as THREE from "three";
import { scene } from "./components/outside";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
//import { outerWall } from "./components/outerwall";
import { innerWall } from "./components/innerwall";
// import { doorGroup } from "./components/door";
// import { outerWall } from "./components/outerwall";
import { Rooms } from "./components/rooms";
import { combinedStairs } from "./components/stairs";
import { animate } from "./components/animation";

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
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("An error happened", error);
    }
  );
  return haalga;
}

const leftdoor = loadGLTFModel(
  "door(2).glb",
  { x: -99.5, y: -174.5, z: 4.3 },
  { x: Math.PI / 2, y: Math.PI / 2 },
  { x: 4, y: 4, z: 4 }
);
const rightdoor = loadGLTFModel(
  "door(2).glb",
  { x: 64.5, y: 113.8, z: 4.3 },
  { x: Math.PI / 2, y: Math.PI / 2 },
  { x: 4, y: 4, z: 4 }
);
leftdoor.rotateZ(Math.PI);
scene.add(leftdoor);
scene.add(rightdoor);
//const doors = doorGroup;
//scene.add(doors);

const light = new THREE.DirectionalLight(0xffffff, 5);
light.position.set(5, 5, 5);
scene.add(light);

const light1 = new THREE.DirectionalLight(0xffffff, 10);
light1.position.set(-5, -5, -5);
scene.add(light1);

const inwall = innerWall;
scene.add(inwall);

const stairs = combinedStairs;
stairs.position.set(65.725, 51.85, 0.375);
scene.add(stairs);

const rooms = Rooms;
scene.add(rooms);

animate();
