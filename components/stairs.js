import * as THREE from 'three';

const widthOfEach = 1.6;
const heigth = 0.75;
const length = 6.8;

// шат угсрах функц

function Stairs(){
    
    var legs = new THREE.BoxGeometry(widthOfEach, length, heigth);
    var rightStairs = new THREE.Group();
    for(var i = 0; i <10; i++ ){
        var legsMesh = new THREE.Mesh(legs, new THREE.MeshBasicMaterial({color:0xffffff}));
        legsMesh.position.set(-i*widthOfEach,0,heigth*i);
        rightStairs.add(legsMesh);
    }
    var leftStairs = rightStairs.clone();
    leftStairs.position.set(-14.4,-6.8,6.75);
    leftStairs.rotateZ(Math.PI);

    const rightHandle = handle(5, 0.16);
    const leftHandle = rightHandle.clone();
    leftHandle.rotateZ(Math.PI);
    leftHandle.position.set(-14.4,-6.8,6.75);

    const combinedStairs = new THREE.Group();
    combinedStairs.add(rightStairs);
    combinedStairs.add(leftStairs);
    combinedStairs.add(rightHandle);
    combinedStairs.add(leftHandle);
    
   
    return combinedStairs;
}

const combinedStairs = Stairs();

// шатны бариул хийх функц

function handle(h, radius){
    const column = new THREE.CylinderGeometry(radius, radius , h, 20, 20);
    const slider = new THREE.BoxGeometry(length*10, 0.5, 0.5);
    const meshSlider = new THREE.Mesh(slider, new THREE.MeshBasicMaterial({color: 0x00ff00}));
    meshSlider.rotateY(5*Math.PI/36);
    meshSlider.position.set(-length*5,-3,0);

    const combinedHandle = new THREE.Group();

    for(var i = 0; i < 10; i++){
        const meshColumn = new THREE.Mesh(column, new THREE.MeshBasicMaterial({color: 0xff0000}));
        meshColumn.rotateX(Math.PI/2);
        meshColumn.position.set( -i*widthOfEach, -3, heigth*i + h/2);

        combinedHandle.add(meshColumn);
    }
    combinedHandle.add(meshSlider);

    return combinedHandle;

}



export{combinedStairs};