import * as THREE from 'three';


function Stairs(){
    var legs = new THREE.BoxGeometry(0.5,3,0.325);
    var rightStairs = new THREE.Group();
    for(var i = 0; i <10; i++ ){
        var legsMesh = new THREE.Mesh(legs, new THREE.MeshLambertMaterial({color:0xffffff}));
        legsMesh.position.set(-i*0.5,0,0.325*i);
        rightStairs.add(legsMesh);
    }
    var leftStairs = rightStairs.clone();
    leftStairs.position.set(-4.5,-3,2.925);
    leftStairs.rotateZ(Math.PI);

    var combinedStairs = new THREE.Group();
    combinedStairs.add(rightStairs);
    combinedStairs.add(leftStairs);
   
    return combinedStairs;
}

export{Stairs};