import * as THREE from "three";
import { rooms } from "./rooms";

const widthOfEach = 1.6;
const heigth = 0.75;
const length = 6.8;

// шатны бариул хийх функц
const handle = (situation, ask, h, radius) => {                           // ask хувьсагч нь шатны бариулын зүүн барууныг асууна
 
  const len = Math.sqrt(Math.pow(widthOfEach * 10, 2) + Math.pow(heigth * 10, 2));   // бариулын урт

  if (situation === true) {

    const column = new THREE.CylinderGeometry(radius, radius, h, 20, 20);

    const slider = new THREE.BoxGeometry(len, 0.5, 0.5);
    const meshSlider = new THREE.Mesh(slider, new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
    meshSlider.rotateY((5 * Math.PI) / 36);
    meshSlider.position.set(-widthOfEach * 4.5, -3, heigth * 4.5 + h);

    const combinedHandle = new THREE.Group();

    for (var i = 0; i < 10; i++) {
      const meshColumn = new THREE.Mesh(column, new THREE.MeshBasicMaterial({ color: 0xff0000 }));
      meshColumn.rotateX(Math.PI / 2);
      meshColumn.position.set(-i * widthOfEach, -3, heigth * i + h / 2);

      combinedHandle.add(meshColumn);
    }
    combinedHandle.add(meshSlider);

    // хашлага 

    const fenceColumn = new THREE.CylinderGeometry(radius, radius, h, 20, 20);

    const fenceSlider = new THREE.BoxGeometry(0.5, length, 0.5);
    const meshfenceSlider = new THREE.Mesh(fenceSlider, new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
    meshfenceSlider.position.set(1.2, 0.16, heigth * 18.5 + h);

    const fence = new THREE.Group();

    var dist = length / 2 - 0.125;
    for (var i = 0; i < 5; i++) {
      const meshfenceColumn = new THREE.Mesh(fenceColumn, new THREE.MeshBasicMaterial({ color: 0xff0000 }));
      meshfenceColumn.rotateX(Math.PI / 2);

      meshfenceColumn.position.set(1.2, dist, heigth * 18.5 + h / 2);
      dist = dist - 1.6;

      fence.add(meshfenceColumn);
    }
    fence.add(meshfenceSlider);
    // хашлага нэмж байна
    if(ask === "right"){
      combinedHandle.add(fence);

      return combinedHandle;
    }
    else{

      return combinedHandle;
    }
    
  }
  else{

    const column = new THREE.CylinderGeometry(radius, radius, h, 20, 20);

    const slider = new THREE.BoxGeometry(len, 0.5, 0.5);
    const meshSlider = new THREE.Mesh(slider, new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
    meshSlider.rotateY((5 * Math.PI) / 36);
    meshSlider.position.set(-widthOfEach * 4.5, -3, heigth * 4.5 + h);

    const combinedHandle = new THREE.Group();

    for (var i = 0; i < 10; i++) {
      const meshColumn = new THREE.Mesh(column, new THREE.MeshBasicMaterial({ color: 0xff0000 }));
      meshColumn.rotateX(Math.PI / 2);
      meshColumn.position.set(-i * widthOfEach, -3, heigth * i + h / 2);

      combinedHandle.add(meshColumn);
    }
    combinedHandle.add(meshSlider);

    return combinedHandle;
  }

};


const steps = (situation, width, posX, posY, posZ) => {
  if(situation === true){

    const lowerStep = new THREE.BoxGeometry(width, length, heigth);
    const meshStep = new THREE.Mesh(lowerStep, new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: false }));
    meshStep.position.set(posX, posY, posZ);
  
    return meshStep;
  }
  else {
    return null;
  }
  
};

// шат угсрах функц

function Stairs(ask) {
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

  
  const rightHandle = handle(ask, "right", 5, 0.16);

  const leftHandle = handle(ask, "left", 5, 0.16);
  leftHandle.rotateZ(Math.PI);
  leftHandle.position.set(-14.4, -6.8, 6.75);

  
  const middleStep1 = steps(true, 6.5, -widthOfEach * 9.5 - 3.25, 0, heigth * 9);
  const middleStep2 = steps(true, 6.5, -widthOfEach * 9.5 - 3.25, -length, heigth * 9);

  var lowerStep1;
  var lowerStep2;
  var upperStep1;
  var upperStep2;
  
  if(ask === false){
    lowerStep1 = steps(true, 6.25, 3.125 + 0.8, 0, 0);
    lowerStep2 = steps(true, 6.25, 3.125 + 0.8, -length, 0);
  
    upperStep1 = steps(ask, 6.25, 3.125 + 0.8, 0, heigth * 18);
    upperStep2 = steps(ask, 6.25, 3.125 + 0.8, -length, heigth * 18);

  }
  else{
    lowerStep1 = steps(true, 6.25, 3.125 + 0.8, 0, 0);
    lowerStep2 = steps(true, 6.25, 3.125 + 0.8, -length, 0);
  
    upperStep1 = steps(ask, 6.25, 3.125 + 0.8, 0, heigth * 18);
    upperStep2 = steps(ask, 6.25, 3.125 + 0.8, -length, heigth * 18);

  }

  const combinedStairs = new THREE.Group();       // шатыг бүрэн угсран буцаах объект

  combinedStairs.add(rightStairs);
  combinedStairs.add(leftStairs);
  combinedStairs.add(rightHandle);
  combinedStairs.add(leftHandle);
  combinedStairs.add(lowerStep1);
  combinedStairs.add(lowerStep2);
  combinedStairs.add(middleStep1);
  combinedStairs.add(middleStep2);
  combinedStairs.add(upperStep1);
  combinedStairs.add(upperStep2);
  // combinedStairs.position.set(0,0,0.375);

  const wall = rooms(28.75, length * 2, -14.35 / 2, -length * 1.5);
  wall.position.set(0,0,1.125);

  const wallAndStairs = new THREE.Group();

  wallAndStairs.add(combinedStairs);
  wallAndStairs.add(wall);

  return wallAndStairs;
}

export { Stairs };
