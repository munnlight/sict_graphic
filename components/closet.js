import * as THREE from "three";

const box = (x, y, z, col, position) => {
  const geometry = new THREE.BoxGeometry(x, y, z);
  const material = new THREE.MeshBasicMaterial({
    color: col,
    wireframe: false,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.copy(position);
  return cube;
};

const hanaPos = new THREE.Vector3(0, 0, 7.5);
const hana = box(0, 24.1, 15, 0xf7dc6f, hanaPos);

const boxDoodPos1 = new THREE.Vector3(1.5, 9.775, 1.75);
const boxDood1 = box(3, 4.55, 3.5, 0x6e2c00, boxDoodPos1);
const boxDoodPos2 = new THREE.Vector3(1.5, -9.775, 1.75);
const boxDood2 = box(3, 4.55, 3.5, 0x6e2c00, boxDoodPos2);

const havtgiaSuuriPos = new THREE.Vector3(1, 0, 0.925);
const havtgaiSuuri = box(2, 15, 1.85, 0x839192, havtgiaSuuriPos);

const ondorPos1 = new THREE.Vector3(1.5, 12.05, 9.25);
const ondor1 = box(3, 0.1, 11.5, 0x839192, ondorPos1);

const ondorPos2 = new THREE.Vector3(1.5, -12.05, 9.25);
const ondor2 = box(3, 0.1, 11.5, 0x839192, ondorPos2);

const ondorPos3 = new THREE.Vector3(1.5, 7.5, 9.25);
const ondor3 = box(3, 0.1, 11.5, 0x839192, ondorPos3);

const ondorPos4 = new THREE.Vector3(1.5, -7.5, 9.25);
const ondor4 = box(3, 0.1, 11.5, 0x839192, ondorPos4);

const headerPos1 = new THREE.Vector3(3, -9.775, 14.75);
const header1 = box(0.1, 4.55, 0.5, 0x839192, headerPos1);

const headerPos2 = new THREE.Vector3(3, 9.775, 14.75);
const header2 = box(0.1, -4.55, 0.5, 0x839192, headerPos2);

const headerPos3 = new THREE.Vector3(0, 0, 14.75);
const header3 = box(0.1, 15, 0.5, 0x839192, headerPos3);

const headPs1 = new THREE.Vector3(1.5, 9.775, 14.95);
const hd1 = box(3, 4.55, 0.1, 0x839192, headPs1);

const headPs2 = new THREE.Vector3(1.5, -9.775, 14.95);
const hd2 = box(3, 4.55, 0.1, 0x839192, headPs2);

class Operants {
  trophy1(col) {
    const points = [];
    points.push(new THREE.Vector2(0, 0));
    points.push(new THREE.Vector2(0.076, -0.051));
    points.push(new THREE.Vector2(0.076, -0.114));
    points.push(new THREE.Vector2(0.044, -0.159));
    points.push(new THREE.Vector2(0.032, -0.178));
    points.push(new THREE.Vector2(0.032, -0.203));
    points.push(new THREE.Vector2(0.057, -0.241));
    points.push(new THREE.Vector2(0.057, -0.267));
    points.push(new THREE.Vector2(0.089, -0.267));
    points.push(new THREE.Vector2(0.102, -0.305));
    points.push(new THREE.Vector2(0.127, -0.343));
    points.push(new THREE.Vector2(0.184, -0.362));
    points.push(new THREE.Vector2(0.229, -0.4));
    points.push(new THREE.Vector2(0.292, -0.444));
    points.push(new THREE.Vector2(0.298, -0.476));
    points.push(new THREE.Vector2(0.324, -0.502));
    points.push(new THREE.Vector2(0.343, -0.495));
    points.push(new THREE.Vector2(0.337, -0.457));
    points.push(new THREE.Vector2(0.337, -0.413));
    points.push(new THREE.Vector2(0.368, -0.368));
    points.push(new THREE.Vector2(0.413, -0.349));
    points.push(new THREE.Vector2(0.463, -0.381));
    points.push(new THREE.Vector2(0.483, -0.463));
    points.push(new THREE.Vector2(0.463, -0.59));
    points.push(new THREE.Vector2(0.381, -0.717));
    points.push(new THREE.Vector2(0.324, -0.775));
    points.push(new THREE.Vector2(0.286, -0.844));
    points.push(new THREE.Vector2(0.286, -0.889));
    points.push(new THREE.Vector2(0.273, -0.927));
    points.push(new THREE.Vector2(0.254, -0.933));
    points.push(new THREE.Vector2(0.241, -0.927));
    points.push(new THREE.Vector2(0.241, -0.87));
    points.push(new THREE.Vector2(0.19, -0.946));
    points.push(new THREE.Vector2(0.133, -1.016));
    points.push(new THREE.Vector2(0.063, -1.079));
    points.push(new THREE.Vector2(0.089, -1.117));
    points.push(new THREE.Vector2(0.089, -1.168));
    points.push(new THREE.Vector2(0.07, -1.187));
    points.push(new THREE.Vector2(0.076, -1.238));
    points.push(new THREE.Vector2(0.114, -1.333));
    points.push(new THREE.Vector2(0.146, -1.371));
    points.push(new THREE.Vector2(0.152, -1.435));
    points.push(new THREE.Vector2(0.178, -1.454));
    points.push(new THREE.Vector2(0.178, -1.524));
    points.push(new THREE.Vector2(0.19, -1.524));
    points.push(new THREE.Vector2(0.19, -1.581));
    points.push(new THREE.Vector2(0.222, -1.581));
    points.push(new THREE.Vector2(0.222, -1.879));
    points.push(new THREE.Vector2(0.298, -1.949));
    points.push(new THREE.Vector2(0.241, -2));
    points.push(new THREE.Vector2(-0.508, 0.057));

    const trophyGeo = new THREE.LatheGeometry(points, 25);
    const trophyMat = new THREE.MeshBasicMaterial({
      color: col,
      side: THREE.DoubleSide,
    });
    const trophy = new THREE.Mesh(trophyGeo, trophyMat);
    trophy.rotation.x = Math.PI / 2;
    trophy.position.set(0, 0, 0.55);

    return trophy;
  }
}

const trophy1 = new Operants().trophy1(0x2ecc71);
// trophy1.position.y = -Math.PI / 2;
trophy1.position.set(5, 0, 6);

const closet = new THREE.Group();

closet.add(trophy1);
closet.add(hana);
closet.add(boxDood1);
closet.add(boxDood2);
closet.add(havtgaiSuuri);
closet.add(ondor1);
closet.add(ondor2);
closet.add(ondor3);
closet.add(ondor4);
closet.add(header1);
closet.add(header2);
closet.add(header3);
closet.add(hd1);
closet.add(hd2);

export { closet };
