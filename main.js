import * as THREE from "three";

const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xfffffff);
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        const axesHelper = new THREE.AxesHelper(130);
        scene.add(axesHelper);
        
        var HologGeo = new THREE.BoxGeometry(110,100,0);
        var HologMat = new THREE.MeshLambertMaterial({color:0xff8800});
        var Holog = new THREE.Mesh(HologGeo,HologMat);
        scene.add(Holog);

        // var pointColor = "#ffffff";
        // const pointLight = new THREE.PointLight( pointColor, 2.4, 200 );
        // pointLight.position.set( 15, 15, 15 );
        // scene.add( pointLight );

        // Material class
        class Material {
            box(x, y, z, col, posX, posY, posZ) {
                const geometry = new THREE.BoxGeometry(x, y, z);
                const material = new THREE.MeshBasicMaterial({ color: col, wireframe: false });
                const cube = new THREE.Mesh(geometry, material);
                cube.position.set(posX, posY, posZ); 
                scene.add(cube);
            }
        }

        const nuur = new Material().box(68.4, 1, 6.5, 0xffffff, -8.5, 7, 3.25);

        const ar = new Material().box(78.4, 1, 6.5, 0xffffff, 0, -7, 3.25);

        const hajuu1 = new Material().box(1, 44.2, 6.5, 0xffffff, 25.2, 29.5, 3.25);

        const hajuu2 = new Material().box(1, 55, 6.5, 0xffffff, 38.7, 20, 3.25);    

        // const ar = nuur.clone();

        // GUI controls
        const gui = new dat.GUI();
        const params = {
            alpx: 0.0,
            alpy: 0.0,
            alpz: 0.0
        };
        gui.add( params, 'alpx', -Math.PI/2, Math.PI/2 ).step( 0.01 ).onChange( function ( value ) {
            scene.rotation.x = value;
            renderer.render(scene, camera);
        } );
        gui.add( params, 'alpy', -Math.PI/2, Math.PI/2 ).step( 0.01 ).onChange( function ( value ) {
            scene.rotation.y = value;
            renderer.render(scene, camera);
        } );
        gui.add( params, 'alpz', -Math.PI/2, Math.PI/2 ).step( 0.01 ).onChange( function ( value ) {
            scene.rotation.z = value;
            renderer.render(scene, camera);
        } );

        // Camera setup
        camera.position.set(0, 15, 15);
        camera.up = new THREE.Vector3(0, 0, 1);
        camera.lookAt(new THREE.Vector3(1, 0, 1));

        // Keyboard controls
        const keyboard = {};
        document.addEventListener('keydown', event => {
            keyboard[event.key] = true;
        });
        document.addEventListener('keyup', event => {
            keyboard[event.key] = false;
        });

        function animate() {
            requestAnimationFrame(animate);
            if (keyboard['ArrowUp']) {
                camera.position.z -= 0.1;
            }
            if (keyboard['ArrowDown']) {
                camera.position.z += 0.1;
            }
            if (keyboard['ArrowLeft']) {
                camera.position.x -= 0.1;
            }
            if (keyboard['ArrowRight']) {
                camera.position.x += 0.1;
            }

            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        }
        animate();