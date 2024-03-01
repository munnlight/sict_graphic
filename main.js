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
import { table } from "./components/table";
import { closet } from "./components/closet";

function loadGLTFModel(filePath, position, rotation, scale) {
  const loader = new GLTFLoader();
  loader.load(
    filePath,
    function (gltf) {
      const model = gltf.scene;

      model.traverse(function (child) {
        if (child.isMesh) {
          const newMaterial = new THREE.MeshStandardMaterial({
            color: 0xa0492d,
          }); // Red color
          child.material = newMaterial;
        }
      });

      console.log(model);

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
  );
}

const door = loadGLTFModel(
  "./door(2).glb",
  { x: 48, y: 152.9, z: 4.3 },
  { x: Math.PI / 2, y: Math.PI / 2 },
  { x: 4, y: 4, z: 4 }
);
loadGLTFModel(
  "./door(2).glb",
  { x: 45, y: 90, z: 4.3 },
  { x: Math.PI / 2, y: Math.PI / 2 },
  { x: 4, y: 4, z: 4 }
);

// const doors = doorGroup;

const inwall = innerWall;
scene.add(inwall);

const stairs = combinedStairs;
stairs.position.set(65.725, 51.85, 0.375);
scene.add(stairs);

const rooms = Rooms;
scene.add(rooms);

const tble = table;
tble.position.set(30, 140, 0);
scene.add(tble);

const clost = closet;
clost.position.set(30, 140, 50);
scene.add(clost);

animate();
