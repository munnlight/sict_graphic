import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000); // corrected line
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const axesHelper = new THREE.AxesHelper(130);
scene.add(axesHelper);

var HologGeo = new THREE.BoxGeometry(250, 500, -0.1);
var HologMat = new THREE.MeshLambertMaterial({ color: 0x442840 });
var Holog = new THREE.Mesh(HologGeo, HologMat);

const light = new THREE.DirectionalLight(0xffffff, 5);
light.position.set(5, 5, 5);
scene.add(light);

const light1 = new THREE.DirectionalLight(0xffffff, 10);
light1.position.set(-5, -5, -5);
scene.add(light1);
scene.add(Holog);

export { scene, camera, renderer };
