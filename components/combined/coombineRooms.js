import * as THREE from "three";
import { rooms } from "../rooms";

const CombinedRooms = () => {
  const combinedRooms = new THREE.Group();

  const uud = rooms(7, 32, -2, 5);
  combinedRooms.add(uud);

  return combinedRooms;
};

export { CombinedRooms };
