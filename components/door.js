import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

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
  
        //console.log(model);
  
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
export{loadGLTFModel};