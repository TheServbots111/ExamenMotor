import * as THREE from 'three';



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera ( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );  


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild (renderer.domElement);

const geometry = new THREE.BoxGeometry (0.5,0.5,0.5);
const material = new THREE.MeshStandardMaterial ({color: 0X00ff00});
const cube = new THREE.Mesh ( geometry, material );

const geometry2 = new THREE.BoxGeometry (0.5,0.5,0.5);
const material2 = new THREE.MeshStandardMaterial ({color: 0Xff0000});
const cube2 = new THREE.Mesh ( geometry2, material2 );

const geometry3 = new THREE.PlaneGeometry( 2, 2 );
const material3 = new THREE.MeshBasicMaterial( {color: 0x0000ff, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry3, material3 );
scene.add( plane );

const light = new THREE.AmbientLight( 0x404040 );
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5);

scene.add(cube);
scene.add(cube2);
scene.add(plane);

scene.add(light);
scene.add(directionalLight);

plane.rotation.x = Math.PI / 2;
plane.position.y = -1;
plane.position.z = -1;
cube2.position.x = -0.5;
cube.position.x = 0.5;

camera.position.set(1,1,1);
directionalLight.position.set(10,1,5);
camera.lookAt (cube.position);


console.log(THREE.AmbientLight);

function animate(){
  cube.rotation.x += 0.01;
 cube.rotation.y += 0.01;
 cube2.rotation.x += 0.01;
 cube2.rotation.y += 0.01;
  renderer.render( scene, camera );
}

