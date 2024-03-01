import * as THREE from "three";
import {box, heigh, innerColor, leftDist, rightDist, innerRightX, innerLeftX, door_len} from "./innerwall";

  const outerWall = new THREE.Group();
  const outerRight = box(1, ); 

  outerWall.add(outerRight);
  
export { outerWall };