import * as THREE from "three";
import { rooms } from "./rooms";
const widthOfEach = 1.6;
const heigth = 0.75;
const length = 6.8;

// шатны бариул хийх функц

const handle = (situation, h, radius, colmnNum, handleLen) => {
  if (situation === "basic") {
    const column = new THREE.CylinderGeometry(radius, radius, h, 20, 20);

    const slider = new THREE.BoxGeometry(handleLen, 0.5, 0.5);
    const meshSlider = new THREE.Mesh(slider, new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
    meshSlider.rotateY((5 * Math.PI) / 36);
    meshSlider.position.set(-widthOfEach * 4.5, -3, heigth * 4.5 + h);

    const combinedHandle = new THREE.Group();

    for (var i = 0; i < colmnNum; i++) {
      const meshColumn = new THREE.Mesh(column, new THREE.MeshBasicMaterial({ color: 0xff0000 }));
      meshColumn.rotateX(Math.PI / 2);
      meshColumn.position.set(-i * widthOfEach, -3, heigth * i + h / 2);

      combinedHandle.add(meshColumn);
    }
    combinedHandle.add(meshSlider);

    return combinedHandle;
  } else if (situation === "upper") {
    const column = new THREE.CylinderGeometry(radius, radius, h, 20, 20);

    const slider = new THREE.BoxGeometry(0.5, handleLen, 0.5);
    const meshSlider = new THREE.Mesh(slider, new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
    meshSlider.position.set(1.2, 0.16, heigth * 18.5 + h);

    const combinedHandle = new THREE.Group();

    var dist = length / 2 - 0.125;
    for (var i = 0; i < colmnNum; i++) {
      const meshColumn = new THREE.Mesh(column, new THREE.MeshBasicMaterial({ color: 0xff0000 }));
      meshColumn.rotateX(Math.PI / 2);

      meshColumn.position.set(1.2, dist, heigth * 18.5 + h / 2);
      dist = dist - 1.6;

      combinedHandle.add(meshColumn);
    }
    combinedHandle.add(meshSlider);

    return combinedHandle;
  }
  return null;
};
const steps = (width, posX, posY, posZ) => {
  const lowerStep = new THREE.BoxGeometry(width, length, heigth);
  const meshStep = new THREE.Mesh(lowerStep, new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: false }));
  meshStep.position.set(posX, posY, posZ);

  return meshStep;
};

// шат угсрах функц

function Stairs() {
  var legs = new THREE.BoxGeometry(widthOfEach, length, heigth);
  var rightStairs = new THREE.Group();
  for (var i = 0; i < 10; i++) {
    var legsMesh = new THREE.Mesh(legs, new THREE.MeshBasicMaterial({ color: 0xffffff }));
    legsMesh.position.set(-i * widthOfEach, 0, heigth * i);
    rightStairs.add(legsMesh);
  }
  var leftStairs = rightStairs.clone();
  leftStairs.position.set(-14.4, -6.8, 6.75);
  leftStairs.rotateZ(Math.PI);

  // бариулын урт
  const len = Math.sqrt(Math.pow(widthOfEach * 10, 2) + Math.pow(heigth * 10, 2));
  const rightHandle = handle("basic", 5, 0.16, 10, len);

  const leftHandle = rightHandle.clone();
  leftHandle.rotateZ(Math.PI);
  leftHandle.position.set(-14.4, -6.8, 6.75);

  const upperHandle = handle("upper", 5, 0.16, 5, length);

  const lowerStep1 = steps(6.25, 3.125 + 0.8, 0, 0);
  const lowerStep2 = steps(6.25, 3.125 + 0.8, -length, 0);

  const middleStep1 = steps(6.5, -widthOfEach * 9.5 - 3.25, 0, heigth * 9);
  const middleStep2 = steps(6.5, -widthOfEach * 9.5 - 3.25, -length, heigth * 9);

  const upperStep1 = steps(6.25, 3.125 + 0.8, 0, heigth * 18);
  const upperStep2 = steps(6.25, 3.125 + 0.8, -length, heigth * 18);

  const wall = rooms(28.75, length * 2, -14.35 / 2, -length * 1.5);

  const combinedStairs = new THREE.Group();
  combinedStairs.add(rightStairs);
  combinedStairs.add(leftStairs);
  combinedStairs.add(rightHandle);
  combinedStairs.add(leftHandle);
  combinedStairs.add(upperHandle);
  combinedStairs.add(lowerStep1);
  combinedStairs.add(lowerStep2);
  combinedStairs.add(middleStep1);
  combinedStairs.add(middleStep2);
  combinedStairs.add(upperStep1);
  combinedStairs.add(upperStep2);
  combinedStairs.add(wall);

  return combinedStairs;
}

const combinedStairs = Stairs();

export { combinedStairs };
