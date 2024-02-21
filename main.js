import * as THREE from 'three';

const scene = new THREE.Scene();

const textureLoader = new THREE.TextureLoader();
textureLoader.load(
    'img2.jpg',
    function(texture) { 
        scene.background = texture;
    },
    function(xhr) { 
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function(error) { 
        console.error('An error happened', error);
    }
);

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const GUI = dat.gui.GUI;

const gui = new GUI();

var HologGeo = new THREE.BoxGeometry(18,18,1);
var HologMat = new THREE.MeshLambertMaterial({color:0xff8800});
var Holog = new THREE.Mesh(HologGeo,HologMat);
scene.add(Holog);

var pointColor = "#ffffff";
const pointLight = new THREE.PointLight( pointColor, 2.4, 200 );
pointLight.position.set( 15, 15, 15 );
scene.add( pointLight );

for(var i=0;i<4;i++){
    for(var j=0;j<4;j++){
        var cellGeo = new THREE.PlaneGeometry(2,2);
        var cellMat = new THREE.MeshLambertMaterial({color:0x964B00});
        var cell1 = new THREE.Mesh(cellGeo,cellMat);
        cell1.position.set(-7+4*i,-7+4*j,0.51);
        scene.add(cell1);
        var cell2 = new THREE.Mesh(cellGeo,cellMat);
        cell2.position.set(-5+4*i,-5+4*j,0.51);
        scene.add(cell2);
    }
}

camera.position.set(0, 15,5);
camera.up = new THREE.Vector3(0, 0, 1);
camera.lookAt(new THREE.Vector3(1, 0, 1));
renderer.render(scene, camera);

class Operants {
    son (col) {
        const points = [];
        points.push( new THREE.Vector2(-0.023,2.021));
        points.push( new THREE.Vector2(0.03,2.017));
        points.push( new THREE.Vector2(0.099,2));
        points.push( new THREE.Vector2(0.173,1.964));
        points.push( new THREE.Vector2(0.23,1.915));
        points.push( new THREE.Vector2(0.285,1.852));
        points.push( new THREE.Vector2(0.323,1.759));
        points.push( new THREE.Vector2(0.334,1.664));
        points.push( new THREE.Vector2(0.315,1.552));
        points.push( new THREE.Vector2(0.271,1.474));
        points.push( new THREE.Vector2(0.201,1.4));
        points.push( new THREE.Vector2(0.184,1.364));
        points.push( new THREE.Vector2(0.184,1.33));
        points.push( new THREE.Vector2(0.211,1.283));
        points.push( new THREE.Vector2(0.258,1.237));
        points.push( new THREE.Vector2(0.298,1.209));
        points.push( new THREE.Vector2(0.334,1.199));
        points.push( new THREE.Vector2(0.342,1.188));
        points.push( new THREE.Vector2(0.334,1.173));
        points.push( new THREE.Vector2(0.249,1.169));
        points.push( new THREE.Vector2(0.171,1.146));
        points.push( new THREE.Vector2(0.195,1.008));
        points.push( new THREE.Vector2(0.224,0.909));
        points.push( new THREE.Vector2(0.279,0.784));
        points.push( new THREE.Vector2(0.351,0.66));
        points.push( new THREE.Vector2(0.414,0.577));
        points.push( new THREE.Vector2(0.436,0.573));
        points.push( new THREE.Vector2(0.442,0.562));
        points.push( new THREE.Vector2(0.431,0.548));
        points.push( new THREE.Vector2(0.617,0.366));
        points.push( new THREE.Vector2(0.634,0.3));
        points.push( new THREE.Vector2(0.6,0.281));
        points.push( new THREE.Vector2(0.592,0.273));
        points.push( new THREE.Vector2(0.596,0.249));
        points.push( new THREE.Vector2(0.636,0.233));
        points.push( new THREE.Vector2(0.636,0.055));
        points.push( new THREE.Vector2(0.619,0.021));

        const pawnGeo = new THREE.LatheGeometry(points, 25);
        const pawnMat = new THREE.MeshLambertMaterial({ color: col, side: THREE.DoubleSide });
        const pawn = new THREE.Mesh(pawnGeo, pawnMat);
        pawn.rotation.x = Math.PI / 2;
        pawn.position.set(0, 0, 0.55);

        return pawn;
    }
    noyon (col) {
        const points = [];
        points.push( new THREE.Vector2(0,3.957));
        points.push( new THREE.Vector2(0.028,3.945));
        points.push( new THREE.Vector2(0.045,3.92));
        points.push( new THREE.Vector2(0.037,3.884));
        points.push( new THREE.Vector2(0.089,3.892));
        points.push( new THREE.Vector2(0.126,3.843));
        points.push( new THREE.Vector2(0.045,3.738));
        points.push( new THREE.Vector2(0.077,3.713));
        points.push( new THREE.Vector2(0.167,3.758));
        points.push( new THREE.Vector2(0.191,3.738));
        points.push( new THREE.Vector2(0.191,3.612));
        points.push( new THREE.Vector2(0.167,3.587));
        points.push( new THREE.Vector2(0.077,3.636));
        points.push( new THREE.Vector2(0.045,3.612));
        points.push( new THREE.Vector2(0.154,3.51));
        points.push( new THREE.Vector2(0.118,3.453));
        points.push( new THREE.Vector2(0.081,3.453));
        points.push( new THREE.Vector2(0.098,3.425));
        points.push( new THREE.Vector2(0.093,3.38));
        points.push( new THREE.Vector2(0.073,3.36));
        points.push( new THREE.Vector2(0.187,3.343));
        points.push( new THREE.Vector2(0.321,3.315));
        points.push( new THREE.Vector2(0.516,3.222));
        points.push( new THREE.Vector2(0.516,3.169));
        points.push( new THREE.Vector2(0.317,2.608));
        points.push( new THREE.Vector2(0.301,2.6));
        points.push( new THREE.Vector2(0.297,2.58));
        points.push( new THREE.Vector2(0.317,2.563));
        points.push( new THREE.Vector2(0.329,2.519));
        points.push( new THREE.Vector2(0.37,2.482));
        points.push( new THREE.Vector2(0.447,2.466));
        points.push( new THREE.Vector2(0.443,2.433));
        points.push( new THREE.Vector2(0.406,2.397));
        points.push( new THREE.Vector2(0.41,2.356));
        points.push( new THREE.Vector2(0.455,2.336));
        points.push( new THREE.Vector2(0.548,2.332));
        points.push( new THREE.Vector2(0.565,2.299));
        points.push( new THREE.Vector2(0.548,2.263));
        points.push( new THREE.Vector2(0.358,2.226));
        points.push( new THREE.Vector2(0.28,2.169));
        points.push( new THREE.Vector2(0.248,2.1));
        points.push( new THREE.Vector2(0.236,1.991));
        points.push( new THREE.Vector2(0.244,1.702));
        points.push( new THREE.Vector2(0.276,1.41));
        points.push( new THREE.Vector2(0.366,1.036));
        points.push( new THREE.Vector2(0.512,0.723));
        points.push( new THREE.Vector2(0.54,0.719));
        points.push( new THREE.Vector2(0.548,0.703));
        points.push( new THREE.Vector2(0.536,0.687));
        points.push( new THREE.Vector2(0.642,0.565));
        points.push( new THREE.Vector2(0.772,0.451));
        points.push( new THREE.Vector2(0.792,0.37));
        points.push( new THREE.Vector2(0.739,0.345));
        points.push( new THREE.Vector2(0.739,0.305));
        points.push( new THREE.Vector2(0.792,0.305));
        points.push( new THREE.Vector2(0.792,0.106));
        points.push( new THREE.Vector2(0.752,0.057));

        const noyonGeo = new THREE.LatheGeometry(points, 25);
        const noyonMat = new THREE.MeshLambertMaterial({ color: col, side: THREE.DoubleSide });
        const noyon = new THREE.Mesh(noyonGeo, noyonMat);
        noyon.rotation.x = Math.PI / 2;
        noyon.position.set(0, 0, 0.55);

        return noyon;
    }
    bers (col) {
        const points = [];
        points.push( new THREE.Vector2(0,3.526));
        points.push( new THREE.Vector2(0.09,3.508));
        points.push( new THREE.Vector2(0.15,3.444));
        points.push( new THREE.Vector2(0.169,3.361));
        points.push( new THREE.Vector2(0.15,3.297));
        points.push( new THREE.Vector2(0.124,3.256));
        points.push( new THREE.Vector2(0.195,3.222));
        points.push( new THREE.Vector2(0.259,3.174));
        points.push( new THREE.Vector2(0.323,3.11));
        points.push( new THREE.Vector2(0.371,3.136));
        points.push( new THREE.Vector2(0.401,3.14));
        points.push( new THREE.Vector2(0.435,3.121));
        points.push( new THREE.Vector2(0.458,3.091));
        points.push( new THREE.Vector2(0.458,3.039));
        points.push( new THREE.Vector2(0.428,2.964));
        points.push( new THREE.Vector2(0.383,2.862));
        points.push( new THREE.Vector2(0.345,2.765));
        points.push( new THREE.Vector2(0.315,2.611));
        points.push( new THREE.Vector2(0.349,2.588));
        points.push( new THREE.Vector2(0.36,2.562));
        points.push( new THREE.Vector2(0.349,2.528));
        points.push( new THREE.Vector2(0.323,2.513));
        points.push( new THREE.Vector2(0.323,2.472));
        points.push( new THREE.Vector2(0.356,2.457));
        points.push( new THREE.Vector2(0.375,2.416));
        points.push( new THREE.Vector2(0.36,2.36));
        points.push( new THREE.Vector2(0.405,2.333));
        points.push( new THREE.Vector2(0.431,2.288));
        points.push( new THREE.Vector2(0.428,2.243));
        points.push( new THREE.Vector2(0.371,2.202));
        points.push( new THREE.Vector2(0.278,2.183));
        points.push( new THREE.Vector2(0.248,1.992));
        points.push( new THREE.Vector2(0.24,1.786));
        points.push( new THREE.Vector2(0.255,1.531));
        points.push( new THREE.Vector2(0.296,1.279));
        points.push( new THREE.Vector2(0.349,1.02));
        points.push( new THREE.Vector2(0.409,0.99));
        points.push( new THREE.Vector2(0.428,0.942));
        points.push( new THREE.Vector2(0.416,0.889));
        points.push( new THREE.Vector2(0.394,0.848));
        points.push( new THREE.Vector2(0.398,0.822));
        points.push( new THREE.Vector2(0.469,0.743));
        points.push( new THREE.Vector2(0.551,0.649));
        points.push( new THREE.Vector2(0.585,0.57));
        points.push( new THREE.Vector2(0.578,0.461));
        points.push( new THREE.Vector2(0.521,0.364));
        points.push( new THREE.Vector2(0.578,0.315));
        points.push( new THREE.Vector2(0.611,0.259));
        points.push( new THREE.Vector2(0.623,0.195));
        points.push( new THREE.Vector2(0.596,0.109));
        points.push( new THREE.Vector2(0.533,0.026));

        const bersGeo = new THREE.LatheGeometry(points, 25);
        const bersMat = new THREE.MeshLambertMaterial({ color: col, side: THREE.DoubleSide });
        const bers = new THREE.Mesh(bersGeo, bersMat);
        bers.rotation.x = Math.PI / 2;
        bers.position.set(0, 0, 0.55);

        return bers;
    }
    camel (col) {
        const points = [];
        points.push( new THREE.Vector2(0,3));
        points.push( new THREE.Vector2(0.048,2.976));
        points.push( new THREE.Vector2(0.066,2.916));
        points.push( new THREE.Vector2(0.06,2.85));
        points.push( new THREE.Vector2(0.012,2.826));
        points.push( new THREE.Vector2(0.018,2.796));
        points.push( new THREE.Vector2(0.066,2.713));
        points.push( new THREE.Vector2(0.222,2.533));
        points.push( new THREE.Vector2(0.311,2.401));
        points.push( new THREE.Vector2(0.347,2.246));
        points.push( new THREE.Vector2(0.317,2.132));
        points.push( new THREE.Vector2(0.246,2.084));
        points.push( new THREE.Vector2(0.24,2.066));
        points.push( new THREE.Vector2(0.281,2.066));
        points.push( new THREE.Vector2(0.299,2.024));
        points.push( new THREE.Vector2(0.281,1.988));
        points.push( new THREE.Vector2(0.329,1.964));
        points.push( new THREE.Vector2(0.341,1.928));
        points.push( new THREE.Vector2(0.323,1.892));
        points.push( new THREE.Vector2(0.263,1.886));
        points.push( new THREE.Vector2(0.299,1.844));
        points.push( new THREE.Vector2(0.311,1.814));
        points.push( new THREE.Vector2(0.293,1.784));
        points.push( new THREE.Vector2(0.18,1.784));
        points.push( new THREE.Vector2(0.162,1.689));
        points.push( new THREE.Vector2(0.15,1.557));
        points.push( new THREE.Vector2(0.162,1.389));
        points.push( new THREE.Vector2(0.198,1.222));
        points.push( new THREE.Vector2(0.257,1.054));
        points.push( new THREE.Vector2(0.335,0.886));
        points.push( new THREE.Vector2(0.431,0.862));
        points.push( new THREE.Vector2(0.449,0.814));
        points.push( new THREE.Vector2(0.443,0.778));
        points.push( new THREE.Vector2(0.401,0.766));
        points.push( new THREE.Vector2(0.443,0.713));
        points.push( new THREE.Vector2(0.539,0.593));
        points.push( new THREE.Vector2(0.623,0.449));
        points.push( new THREE.Vector2(0.635,0.287));
        points.push( new THREE.Vector2(0.599,0.198));
        points.push( new THREE.Vector2(0.551,0.12));
        points.push( new THREE.Vector2(0.611,0.102));
        points.push( new THREE.Vector2(0.641,0.054));
        points.push( new THREE.Vector2(0.617,0.006));
        points.push( new THREE.Vector2(0.581,0));


        const camelGeo = new THREE.LatheGeometry(points, 25);
        const camelMat = new THREE.MeshLambertMaterial({ color: col, side: THREE.DoubleSide });
        const camel = new THREE.Mesh(camelGeo, camelMat);
        camel.rotation.x = Math.PI / 2;
        camel.position.set(0, 0, 0.55);

        return camel;
    }
    car(col) {
        const points = [];
        points.push( new THREE.Vector2(0,2.038));
        points.push( new THREE.Vector2(0.021,2.036));
        points.push( new THREE.Vector2(0.035,2.044));
        points.push( new THREE.Vector2(0.044,2.056));
        points.push( new THREE.Vector2(0.044,2.174));
        points.push( new THREE.Vector2(0.05,2.191));
        points.push( new THREE.Vector2(0.065,2.2));
        points.push( new THREE.Vector2(0.162,2.2));
        points.push( new THREE.Vector2(0.176,2.191));
        points.push( new THREE.Vector2(0.182,2.174));
        points.push( new THREE.Vector2(0.182,2.062));
        points.push( new THREE.Vector2(0.194,2.044));
        points.push( new THREE.Vector2(0.209,2.036));
        points.push( new THREE.Vector2(0.258,2.036));
        points.push( new THREE.Vector2(0.247,2.047));
        points.push( new THREE.Vector2(0.282,2.056));
        points.push( new THREE.Vector2(0.282,2.174));
        points.push( new THREE.Vector2(0.288,2.191));
        points.push( new THREE.Vector2(0.303,2.2));
        points.push( new THREE.Vector2(0.402,2.2));
        points.push( new THREE.Vector2(0.414,2.191));
        points.push( new THREE.Vector2(0.423,2.174));
        points.push( new THREE.Vector2(0.423,1.853));
        points.push( new THREE.Vector2(0.405,1.821));
        points.push( new THREE.Vector2(0.376,1.795));
        points.push( new THREE.Vector2(0.355,1.786));
        points.push( new THREE.Vector2(0.332,1.783));
        points.push( new THREE.Vector2(0.344,1.768));
        points.push( new THREE.Vector2(0.352,1.742));
        points.push( new THREE.Vector2(0.35,1.707));
        points.push( new THREE.Vector2(0.332,1.683));
        points.push( new THREE.Vector2(0.373,1.683));
        points.push( new THREE.Vector2(0.391,1.671));
        points.push( new THREE.Vector2(0.402,1.639));
        points.push( new THREE.Vector2(0.391,1.615));
        points.push( new THREE.Vector2(0.373,1.601));
        points.push( new THREE.Vector2(0.341,1.601));
        points.push( new THREE.Vector2(0.323,1.542));
        points.push( new THREE.Vector2(0.303,1.422));
        points.push( new THREE.Vector2(0.297,1.251));
        points.push( new THREE.Vector2(0.305,1.049));
        points.push( new THREE.Vector2(0.332,0.884));
        points.push( new THREE.Vector2(0.367,0.743));
        points.push( new THREE.Vector2(0.417,0.626));
        points.push( new THREE.Vector2(0.526,0.626));
        points.push( new THREE.Vector2(0.526,0.582));
        points.push( new THREE.Vector2(0.505,0.546));
        points.push( new THREE.Vector2(0.479,0.526));
        points.push( new THREE.Vector2(0.446,0.517));
        points.push( new THREE.Vector2(0.411,0.508));
        points.push( new THREE.Vector2(0.517,0.508));
        points.push( new THREE.Vector2(0.564,0.488));
        points.push( new THREE.Vector2(0.596,0.444));
        points.push( new THREE.Vector2(0.596,0.385));
        points.push( new THREE.Vector2(0.579,0.344));
        points.push( new THREE.Vector2(0.543,0.32));
        points.push( new THREE.Vector2(0.629,0.32));
        points.push( new THREE.Vector2(0.681,0.276));
        points.push( new THREE.Vector2(0.72,0.203));
        points.push( new THREE.Vector2(0.726,0.141));
        points.push( new THREE.Vector2(0.702,0.073));
        points.push( new THREE.Vector2(0.667,0.029));
        points.push( new THREE.Vector2(0.617,0));

        const carGeo = new THREE.LatheGeometry(points, 25);
        const carMat = new THREE.MeshLambertMaterial({ color: col, side: THREE.DoubleSide });
        const car = new THREE.Mesh(carGeo, carMat);
        car.rotation.x = Math.PI / 2;
        car.position.set(0, 0, 0.55);

        return car;
    }
    horse(col) {
        const shape = new THREE.Shape();
        shape.lineTo(-0.251,2.417);
        shape.lineTo(-0.073,2.344);
        shape.lineTo(0.066,2.328);
        shape.lineTo(0.205,2.278);
        shape.lineTo(0.327,2.219);
        shape.lineTo(0.426,2.143);
        shape.lineTo(0.522,2.044);
        shape.lineTo(0.601,1.932);
        shape.lineTo(0.657,1.819);
        shape.lineTo(0.71,1.658);
        shape.lineTo(0.723,1.509);
        shape.lineTo(0.713,1.357);
        shape.lineTo(0.68,1.208);
        shape.lineTo(0.634,1.083);
        shape.lineTo(0.584,0.921);
        shape.lineTo(0.532,0.783);
        shape.lineTo(0.525,0.667);
        shape.lineTo(-0.522,0.667);
        shape.lineTo(-0.502,0.802);
        shape.lineTo(-0.459,0.925);
        shape.lineTo(-0.37,1.067);
        shape.lineTo(-0.264,1.179);
        shape.lineTo(-0.152,1.308);
        shape.lineTo(-0.076,1.433);
        shape.lineTo(-0.003,1.621);
        shape.lineTo(-0.102,1.532);
        shape.lineTo(-0.251,1.492);
        shape.lineTo(-0.383,1.492);
        shape.lineTo(-0.515,1.354);
        shape.lineTo(-0.598,1.364);
        shape.lineTo(-0.67,1.403);
        shape.lineTo(-0.73,1.499);
        shape.lineTo(-0.73,1.502);
        shape.lineTo(-0.568,1.783);
        shape.lineTo(-0.466,1.915);
        shape.lineTo(-0.442,2.041);
        shape.lineTo(-0.307,2.136);
        shape.lineTo(-0.383,2.268);
        shape.lineTo(-0.251,2.328);

        const extrudeSettings = {
            steps: 2,
            depth: 0.5,
            bevelEnabled: true,
            bevelThickness: 0.005,
            bevelSize: 0.005,
            bevelOffset: 0,
            bevelSegments: 1
        };

        const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
        const material = new THREE.MeshLambertMaterial( {color: col} );
        const mesh = new THREE.Mesh( geometry, material );
        mesh.position.set(0, 0, -0.25);
        
        const pointSuuri = [];
        pointSuuri.push( new THREE.Vector2(0,0.667));
        pointSuuri.push( new THREE.Vector2(0.535,0.667));
        pointSuuri.push( new THREE.Vector2(0.604,0.637));
        pointSuuri.push( new THREE.Vector2(0.604,0.532));
        pointSuuri.push( new THREE.Vector2(0.548,0.492));
        pointSuuri.push( new THREE.Vector2(0.472,0.492));
        pointSuuri.push( new THREE.Vector2(0.449,0.423));
        pointSuuri.push( new THREE.Vector2(0.479,0.337));
        pointSuuri.push( new THREE.Vector2(0.568,0.294));
        pointSuuri.push( new THREE.Vector2(0.624,0.208));
        pointSuuri.push( new THREE.Vector2(0.733,0.195));
        pointSuuri.push( new THREE.Vector2(0.763,0.149));
        pointSuuri.push( new THREE.Vector2(0.763,0.003));


        const suurigeo = new THREE.LatheGeometry( pointSuuri, 25);
        const suurimat = new THREE.MeshLambertMaterial( {color: col, side: THREE.DoubleSide });
        const suuri = new THREE.Mesh(suurigeo, suurimat);

        const mori = new THREE.Group();
        mori.add(mesh);
        mori.add(suuri);
        mori.rotation.x = Math.PI/2;

        return mori;
    }
}

for (var i = 0; i < 1; i++) {
    for (var j = 0; j < 8; j++) {
        const whiteSons = new Operants().son(0xfee1b1);
        whiteSons.position.set(5, 7 - j * 2, 0.55);
        scene.add(whiteSons);

        const blackSons = new Operants().son(0x392300);
        blackSons.position.set(-5, -7 + j * 2, 0.55);
        scene.add(blackSons);
    }
}

const m1 = new Operants().horse(0xfee1b1);
m1.position.y = -Math.PI / 2;
m1.position.set(7, -5, 0.51);
scene.add(m1);

const m2 = new Operants().horse(0xfee1b1);
m2.position.y = -Math.PI / 2;
m2.position.set(7, 5, 0.51);
scene.add(m2);

const m3 = new Operants().horse(0x392300);
m3.position.set(-7, 5, 0.51);
m3.rotation.y = -Math.PI;
scene.add(m3);

const m4 = new Operants().horse(0x392300);
m4.position.set(-7, -5, 0.51);
m4.rotation.y = -Math.PI;
scene.add(m4);

const c1 = new Operants().camel(0xfee1b1);
c1.position.set(7, -3, 0.51);
scene.add(c1);

const c2 = new Operants().camel(0xfee1b1);
c2.position.y = -Math.PI / 2;
c2.position.set(7, 3, 0.51);
scene.add(c2);

const c3 = new Operants().camel(0x392300);
c3.position.set(-7, 3, 0.51);
c3.rotation.y = -Math.PI;
scene.add(c3);

const c4 = new Operants().camel(0x392300);
c4.position.set(-7, -3, 0.51);
c4.rotation.y = -Math.PI;
scene.add(c4);

const car1 = new Operants().car(0xfee1b1);
car1.position.set(7, 7, 0.51);
scene.add(car1);

const car2 = new Operants().car(0xfee1b1);
car2.position.y = -Math.PI / 2;
car2.position.set(7, -7, 0.51);
scene.add(car2);

const car3 = new Operants().car(0x392300);
car3.position.set(-7, 7, 0.51);
car3.rotation.y = -Math.PI;
scene.add(car3);

const car4 = new Operants().car(0x392300);
car4.position.set(-7, -7, 0.51);
car4.rotation.y = -Math.PI;
scene.add(car4);

const b1 = new Operants().bers(0xfee1b1);
b1.position.set(7, 1, 0.51);
scene.add(b1);

const b2 = new Operants().bers(0x392300);
b2.position.set(-7, 1, 0.51);
scene.add(b2);

const n1 = new Operants().noyon(0xfee1b1);
n1.position.set(7, -1, 0.51);
scene.add(n1);

const n2 = new Operants().noyon(0x392300);
n2.position.set(-7, -1, 0.51);
scene.add(n2);


const params = {
    alpx: 0.0,
    alpy: 0.0,
    alpz: 0.0
};

// Add GUI controls
gui.add( params, 'alpx', -Math.PI/2, Math.PI/2 ).step( 0.01 ).onChange( function ( value ) {
    scene.rotation.x = value;
} );
gui.add( params, 'alpy', -Math.PI/2, Math.PI/2 ).step( 0.01 ).onChange( function ( value ) {
    scene.rotation.y = value;
} );
gui.add( params, 'alpz', -Math.PI/2, Math.PI/2 ).step( 0.01 ).onChange( function ( value ) {
    scene.rotation.z = value;
} );

camera.position.set(0, 15,5);
camera.up = new THREE.Vector3(0, 0, 1);
camera.lookAt(new THREE.Vector3(1, 0, 1));
renderer.render(scene, camera);

const keyboard = {};
document.addEventListener('keydown', event => {
    keyboard[event.key] = true;
});
document.addEventListener('keyup', event => {
    keyboard[event.key] = false;
});
