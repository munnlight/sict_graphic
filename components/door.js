// import * as THREE from "three";
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { innerRightX, innerLeftX } from "./innerwall";

// const doorGroup = [];

// function loadGLTFModel(filePath, position, rotation, scale) {
//     const loader = new GLTFLoader();
//     loader.load(
//         filePath,
//         function (gltf) {
//             const model = gltf.scene;

//             // Set material color
//             model.traverse(function (child) {
//                 if (child.isMesh) {
//                     const newMaterial = new THREE.MeshStandardMaterial({ color: 0xa0492d }); // Red color
//                     child.material = newMaterial;
//                 }
//             });

//             // Apply rotation
//             if (rotation) {
//                 model.rotateX(rotation.x || 0);
//                 model.rotateY(rotation.y || 0);
//                 model.rotateZ(rotation.z || 0);
//             }

//             // Apply position
//             if (position) {
//                 model.position.set(position.x || 0, position.y || 0, position.z || 0);
//             }

//             // Apply scale
//             if (scale) {
//                 model.scale.set(scale.x || 1, scale.y || 1, scale.z || 1);
//             }

//             scene.add(model);
//         },
//         function (xhr) {
//             console.log((xhr.loaded / xhr.total * 100) + '% loaded');
//         },
//         function (error) {
//             console.log('An error happened', error);
//         }
//     );
//   }

// const door1 = loadGLTFModel('door(2).glb', { x:   innerRightX, y: innerLeftX, z: 4.3 }, { x: Math.PI / 2, y: Math.PI / 2 }, { x: 4, y: 4, z: 4 });

// doorGroup.push(door1);

// export{doorGroup};
