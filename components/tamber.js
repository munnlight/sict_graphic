import { height , innerColor} from "./innerwall";

const heightImp = height;
const color = innerColor;
const widht = 6.38;
const haalgniBaruun = 2;


 // байгуулагч функц
const box = (x, y, posx, posy, trans, col) => {
    const geometry = new THREE.BoxGeometry(x, y, heightImp);
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

const Rhajuu = box(1, widht, 15,50,0.5,color);

const uud = new THREE.Group();

uud.add(Rhajuu);

export { Rhajuu }