import * as THREE from "three";

const box = (x, y, z, col, position) => {
  const geometry = new THREE.BoxGeometry(x, y, z);
  const material = new THREE.MeshMatcapMaterial({
    color: col,
    wireframe: false,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.copy(position);
  return cube;
};

const hanaPos = new THREE.Vector3(0, 0, 7.5);
const hana = box(0, 24.1, 15, 0x6e4100, hanaPos);

const boxDoodPos1 = new THREE.Vector3(1.5, 9.775, 1.75);
const boxDood1 = box(3, 4.55, 3.5, 0x3c2503, boxDoodPos1);
const boxDoodPos2 = new THREE.Vector3(1.5, -9.775, 1.75);
const boxDood2 = box(3, 4.55, 3.5, 0x3c2503, boxDoodPos2);

const havtgiaSuuriPos = new THREE.Vector3(1, 0, 0.925);
const havtgaiSuuri = box(2, 15, 1.85, 0x543406, havtgiaSuuriPos);

const ondorPos1 = new THREE.Vector3(1.5, 12.05, 9.25);
const ondor1 = box(3, 0.1, 11.5, 0x3c2503, ondorPos1);

const ondorPos2 = new THREE.Vector3(1.5, -12.05, 9.25);
const ondor2 = box(3, 0.1, 11.5, 0x3c2503, ondorPos2);

const ondorPos3 = new THREE.Vector3(1.5, 7.5, 9.25);
const ondor3 = box(3, 0.1, 11.5, 0x3c2503, ondorPos3);

const ondorPos4 = new THREE.Vector3(1.5, -7.5, 9.25);
const ondor4 = box(3, 0.1, 11.5, 0x3c2503, ondorPos4);

const headerPos1 = new THREE.Vector3(3, -9.775, 14.75);
const header1 = box(0.1, 4.55, 0.5, 0x3c2503, headerPos1);

const headerPos2 = new THREE.Vector3(3, 9.775, 14.75);
const header2 = box(0.1, -4.55, 0.5, 0x3c2503, headerPos2);

const headerPos3 = new THREE.Vector3(0, 0, 14.75);
const header3 = box(0.1, 15, 0.5, 0x3c2503, headerPos3);

const headPs1 = new THREE.Vector3(1.5, 9.775, 14.95);
const hd1 = box(3, 4.55, 0.1, 0x3c2503, headPs1);

const headPs2 = new THREE.Vector3(1.5, -9.775, 14.95);
const hd2 = box(3, 4.55, 0.1, 0x3c2503, headPs2);

const tPos1 = new THREE.Vector3(1.5, 9.775, 6.5);
const t1 = box(3, 4.55, 0.1, 0x3c2503, tPos1);
const tPos2 = new THREE.Vector3(1.5, 9.775, 11.5);
const t2 = box(3, 4.55, 0.1, 0x3c2503, tPos2);
const tPos3 = new THREE.Vector3(1.5, -9.775, 6.5);
const t3 = box(3, 4.55, 0.1, 0x3c2503, tPos3);
const tPos4 = new THREE.Vector3(1.5, -9.775, 11.5);
const t4 = box(3, 4.55, 0.1, 0x3c2503, tPos4);

const orgomjlolPos1 = new THREE.Vector3(2, -10.5, 12.3);
const orgomjlol1 = box(0.01, 1.05, 1.485, 0x45b1ed, orgomjlolPos1);

const orgomjlolPos2 = new THREE.Vector3(1.5, -9, 12.45);
const orgomjlol2 = box(0.01, 1.5, 2, 0x45b1ed, orgomjlolPos2);

const orgomjlolPos3 = new THREE.Vector3(2, 10.5, 4.3);
const orgomjlol3 = box(0.01, 1.05, 1.485, 0x45b1ed, orgomjlolPos3);

const orgomjlolPos4 = new THREE.Vector3(1.5, 9, 4.6);
const orgomjlol4 = box(0.01, 1.5, 2, 0x45b1ed, orgomjlolPos4);

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
  trophy2(col) {
    const points = [];
    points.push(new THREE.Vector2(-0.034, 2.016));
    points.push(new THREE.Vector2(0.061, 1.995));
    points.push(new THREE.Vector2(0.147, 1.955));
    points.push(new THREE.Vector2(0.221, 1.892));
    points.push(new THREE.Vector2(0.293, 1.77));
    points.push(new THREE.Vector2(0.307, 1.643));
    points.push(new THREE.Vector2(0.266, 1.506));
    points.push(new THREE.Vector2(0.214, 1.429));
    points.push(new THREE.Vector2(0.212, 1.375));
    points.push(new THREE.Vector2(0.228, 1.343));
    points.push(new THREE.Vector2(0.201, 1.223));
    points.push(new THREE.Vector2(0.151, 1.117));
    points.push(new THREE.Vector2(0.129, 1.002));
    points.push(new THREE.Vector2(0.135, 0.847));
    points.push(new THREE.Vector2(0.149, 0.589));
    points.push(new THREE.Vector2(0.192, 0.47));
    points.push(new THREE.Vector2(0.221, 0.449));
    points.push(new THREE.Vector2(0.221, 0.418));
    points.push(new THREE.Vector2(0.251, 0.372));
    points.push(new THREE.Vector2(0.309, 0.253));
    points.push(new THREE.Vector2(0.3, 0.235));
    points.push(new THREE.Vector2(0.332, 0.167));
    points.push(new THREE.Vector2(0.35, 0.169));
    points.push(new THREE.Vector2(0.384, 0.016));

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
  trophy3(col) {
    const points = [];
    points.push(new THREE.Vector2(0, 3.838));
    points.push(new THREE.Vector2(1.04, 3.838));
    points.push(new THREE.Vector2(1.04, 3.653));
    points.push(new THREE.Vector2(1.017, 3.191));
    points.push(new THREE.Vector2(0.902, 2.659));
    points.push(new THREE.Vector2(0.717, 2.312));
    points.push(new THREE.Vector2(0.347, 2.012));
    points.push(new THREE.Vector2(0.301, 1.873));
    points.push(new THREE.Vector2(0.185, 1.734));
    points.push(new THREE.Vector2(0.231, 1.503));
    points.push(new THREE.Vector2(0.347, 1.249));
    points.push(new THREE.Vector2(0.601, 1.04));
    points.push(new THREE.Vector2(0.601, 0.925));
    points.push(new THREE.Vector2(0.763, 0.925));
    points.push(new THREE.Vector2(0.763, 0.185));
    points.push(new THREE.Vector2(0.902, 0.185));
    points.push(new THREE.Vector2(0.902, 0));

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

const trophy1 = new Operants().trophy1(0xffb404);
trophy1.position.set(2, -10.5, 5.55);

const trophy2 = new Operants().trophy2(0xffb404);
trophy2.position.set(2, -9, 3.55);

const trophy3 = new Operants().trophy1(0xffb404);
trophy3.position.set(2, 10.5, 13.55);

const trophy4 = new Operants().trophy2(0xffb404);
trophy4.position.set(2, 9, 11.55);

const gol1 = new Operants().trophy3(0xffb404);
gol1.position.set(1.6, 10, 6.5);

const gol2 = new Operants().trophy3(0xffb404);
gol2.position.set(1.6, -10, 6.5);

// const loader = new THREE.TextureLoader();

// // Load the image asynchronously
// loader.load(
//   "sictImg.jpg",

//   // onLoad callback
//   function (texture) {
//     const material = new THREE.MeshBasicMaterial({ map: texture });
//     const plane = new THREE.PlaneGeometry(
//       texture.image.width / 10,
//       texture.image.height / 10
//     );
//     const mesh = new THREE.Mesh(plane, material);
//     mesh.position.set(1.6, -10, 6.5); // Adjust position as needed
//     closet.add(mesh); // Add the image as part of the group
//   },

//   // onProgress callback currently not supported
//   undefined,

//   // onError callback
//   function (error) {
//     console.error("An error happened while loading the image:", error);
//   }
// );
const closet = new THREE.Group();
closet.add(trophy1);
closet.add(trophy2);
closet.add(trophy3);
closet.add(trophy4);
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
closet.add(t1);
closet.add(t2);
closet.add(t3);
closet.add(t4);
closet.add(gol1);
closet.add(gol2);
closet.add(orgomjlol1);
closet.add(orgomjlol2);
closet.add(orgomjlol3);
closet.add(orgomjlol4);

const loader = new THREE.TextureLoader();
loader.load(
  "./sictImg.jpg",
  function (texture) {
    console.log("Image loaded successfully:", texture);

    const material = new THREE.MeshBasicMaterial({ map: texture });
    const plane = new THREE.PlaneGeometry(
      texture.image.width / 10,
      texture.image.height / 10
    );
    const mesh = new THREE.Mesh(plane, material);
    mesh.position.set(1, 1, 3); // Adjust position as needed
    closet.add(mesh); // Add the image as part of the group
  },
  undefined
);

export { closet };
