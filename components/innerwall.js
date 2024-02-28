import * as THREE from "three";
import threeJsCsg, { CSG } from "three-js-csg";

// Зарим тогтмол бөгөөд шаардлагатай хэмжээсүүдийг тогтмолоор хадгалав.

const height = 15;
const wallTrans = 0.5;
const noTrans = 1;
const coridorB_Y = 26;

const innerColor = "#ffffff";
const GlassCol = "#002299";
const col3 = "#093982";

// X тэнхлэгийн дагуу зарим зөөлтөд шаардагдав.
const xLinear = 6;

const right1_len = 127;
const right2_len = 77.2;
const door_len = 4.45;

// Y тэнхлэгийн дагуу зүүн дотоод ханыг зөөхөд туслах хэмжээ
const leftGap = 20.8; // Хойд хананаас зүүн хана хүртэлх зай
const stairGap = 7.2; // Шатны өргөн

const left1_len = 27;
const left2_len = 112.1;
const left3_len = 37.1;

// X тэнхлэгийн дагуух ханануудын байрлал
const innerRightX = 88.625;
const innerLeftX = 73.65;

// Гол байгуулагч функц
const box = (x, y, posx, posy, trans, col) => {
  const geometry = new THREE.BoxGeometry(x, y, height);
  const material = new THREE.MeshBasicMaterial({
    color: col,
    wireframe: false,
    transparent: true,
    opacity: trans,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(posx, posy, height / 2);
  return cube;
};

// Хаалганы зайг хэмжих зориулалттай биет

const doorR = box(
  1,
  door_len,
  innerRightX,
  right1_len + door_len / 2 - 6,
  wallTrans,
  GlassCol
);

const doorL = box(
  1,
  door_len,
  innerLeftX,
  -xLinear + stairGap + leftGap + left1_len + left2_len + door_len / 2,
  wallTrans,
  GlassCol
);

const stairL = box(
  1,
  stairGap,
  innerLeftX,
  leftGap - xLinear + left1_len + stairGap / 2,
  noTrans,
  col3
);

// Хөндлөн коридорын элементүүд

const innerBack = box(178.25, 1, 0, -6.5, wallTrans, innerColor);
const innerFront1 = box(129.75, 1, -24.25, 6.5, wallTrans, innerColor);
const innerFront2 = box(25.1, 1, 53.325, 6.5, wallTrans, GlassCol);

const innerRight1 = box(
  1,
  right1_len,
  innerRightX,
  right1_len / 2 - xLinear,
  wallTrans,
  innerColor
);
const innerRight2 = box(
  1,
  right2_len,
  innerRightX,
  -xLinear + right1_len + door_len + right2_len / 2,
  wallTrans,
  innerColor
);

const innerLeft1 = box(
  1,
  left1_len,
  innerLeftX,
  leftGap - xLinear + left1_len / 2,
  wallTrans,
  GlassCol
);
// const innerLeft2 = box(1, 7.2, innerLeftX, 52.825, wallTrans, innerColor);
const innerLeft2 = box(
  1,
  left2_len,
  innerLeftX,
  -xLinear + leftGap + left1_len + stairGap + left2_len / 2,
  wallTrans,
  innerColor
);
const innerLeft3 = box(
  1,
  left3_len,
  innerLeftX,
  -xLinear +
    leftGap +
    left1_len +
    stairGap +
    left2_len +
    door_len +
    left3_len / 2,
  wallTrans,
  innerColor
);

const innerWall = new THREE.Group();
innerWall.add(innerBack);
innerWall.add(innerRight1);
innerWall.add(innerRight2);
innerWall.add(innerFront1);
innerWall.add(innerFront2);
innerWall.add(innerLeft1);
innerWall.add(innerLeft2);
innerWall.add(innerLeft3);

innerWall.add(doorR);
innerWall.add(doorL);
innerWall.add(stairL);

export { innerWall };
