import * as THREE from "three";
import "./room.css";
const height = 6.8;

const rooms = (length, width, posx, posy) => {
  console.log("object");
  const matTrans = new THREE.MeshBasicMaterial({
    color: 0x0f3042,
    transparent: true,
    opacity: 0.5,
  });
  const room = new THREE.Group();

  let constructor = length;
  for (let i = 0; i < 3; i++) {
    const wallWidth = 0.2;
    const geo = new THREE.BoxGeometry(constructor, wallWidth, height);
    const comp = new THREE.Mesh(geo, matTrans);
    // comp.position.set(posx, posy, height);
    switch (i) {
      case 0:
        comp.position.set(posx + width / 2, posy + length / 2, height / 2);
        comp.rotateZ(Math.PI / 2);
        break;
      case 1:
        comp.position.set(posx - width / 2, posy + length / 2, height / 2);
        comp.rotateZ(Math.PI / 2);
        break;
      case 2:
        comp.position.set(posx, posy, height / 2);
        break;
      case 3:
        comp.position.set(posx, posy + length, height / 2);
        break;
    }
    room.add(comp);

    if (i >= 1) {
      constructor = width;
    }
  }

  return room;
};

export { rooms };
