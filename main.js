import * as THREE from "three";
import { CSG } from "three-js-csg";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

//import { outerWall } from "./components/outerwall";
import { innerWall} from "./components/innerwall";
import { doorGroup } from "./components/door";

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
/*

function loadGLTFModel(filePath, position, rotation, scale) {
  const loader = new GLTFLoader();
  loader.load(
      filePath,
      function (gltf) {
          const model = gltf.scene;

          // Set material color
          model.traverse(function (child) {
              if (child.isMesh) {
                  const newMaterial = new THREE.MeshStandardMaterial({ color: 0xa0492d }); // Red color
                  child.material = newMaterial;
              }
          });

          // Apply rotation
          if (rotation) {
              model.rotateX(rotation.x || 0);
              model.rotateY(rotation.y || 0);
              model.rotateZ(rotation.z || 0);
          }

          // Apply position
          if (position) {
              model.position.set(position.x || 0, position.y || 0, position.z || 0);
          }

          // Apply scale
          if (scale) {
              model.scale.set(scale.x || 1, scale.y || 1, scale.z || 1);
          }

          scene.add(model);
      },
      function (xhr) {
          console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      function (error) {
          console.log('An error happened', error);
      }
  );
}

const door = loadGLTFModel('door(2).glb', { x: 48, y: 152.9, z: 4.3 }, { x: Math.PI / 2, y: Math.PI / 2 }, { x: 4, y: 4, z: 4 });
loadGLTFModel('door(2).glb', { x: 45, y: 90, z: 4.3 }, { x: Math.PI / 2, y: Math.PI / 2 }, { x: 4, y: 4, z: 4 });
*/
const doors = doorGroup;


const light = new THREE.DirectionalLight(0xffffff,5);
light.position.set(5,5,5);
scene.add(light);

const light1 = new THREE.DirectionalLight(0xffffff,10);
light1.position.set(-5,-5,-5);
scene.add(light1);

const inwall = innerWall;
scene.add(inwall);

//const combinedRooms = CombinedRooms();
//scene.add(combinedRooms);

camera.position.set(0, 105, 115);
camera.up = new THREE.Vector3(0, 0, 1);
// camera.lookAt(new THREE.Vector3(1, 0, 1));

const keyboard = {};
document.addEventListener("keydown", (event) => {
  keyboard[event.key] = true;
});
document.addEventListener("keyup", (event) => {
  keyboard[event.key] = false;
});


function animate() {
  requestAnimationFrame(animate);

  // Adjust camera position based on keyboard input
  if (keyboard["ArrowUp"]) {
    camera.position.z -= 0.4;
  }
  if (keyboard["ArrowDown"]) {
    camera.position.z += 0.4;
  }
  if (keyboard["ArrowLeft"]) {
    camera.position.x -= 0.4;
  }
  if (keyboard["ArrowRight"]) {
    camera.position.x += 0.4;
  }
  if (keyboard["w"]) {
    camera.position.y -= 0.4;
  }
  if (keyboard["s"]) {
    camera.position.y += 0.4;
  }

  // Look at the scene's position
  camera.lookAt(scene.position);

  // Render the scene
  renderer.render(scene, camera);
}

animate();
