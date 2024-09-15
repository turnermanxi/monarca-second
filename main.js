import './style.css';
import * as THREE from 'three';
import { pictureGallery } from './openmenu.js';
import { contactForm } from './form.js';
import { OBJLoader } from 'three/examples/jsm/Addons.js';

var container;


var camera, scene, renderer;

init();
animate();

function init() {

	container = document.createElement( 'div' );
	document.body.appendChild( container );

	camera = new THREE.PerspectiveCamera( 65, window.innerWidth / window.innerHeight, 1, 100 );
	camera.position.y = 2;
    camera.position.z = 1;
    camera.position.x = 0;

	// scene

	scene = new THREE.Scene();

	var ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
	scene.add( ambientLight );
  
  

	var pointLight = new THREE.PointLight( 0xffffff, 0.8 );
    pointLight.position.set(20,20,20)
	camera.add( pointLight );
	scene.add( camera );

  //var lightHelper = new THREE.PointLightHelper(pointLight)
  //var gridHelper = new THREE.GridHelper(200,50);
  //scene.add(lightHelper, gridHelper);

	// model

  
    const loader = new OBJLoader();
	  loader.load('Monarca.obj', ( obj ) => {
		// center asset
    
		  var box = new THREE.Box3().setFromObject( obj );
		  var center = new THREE.Vector3();
		  box.getCenter( center );
		  obj.position.sub( center );
      

      obj.rotation.x += 0.01;
      obj.rotation.y += 0.009;
      obj.rotation.z += 0.008;

    

		// add to scene
		scene.add( obj );
    
    
    const spotLight = new THREE.SpotLight(0xffffff, 4000, 100, 100, 1);
    spotLight.position.set(0, 25, 0);
    scene.add(spotLight);

	}, undefined, function (error) {
    console.error('An error happened while loading the OBJ file:', error);
  });



	renderer = new THREE.WebGLRenderer();
  
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth / 1.15, window.innerHeight / 1.15);
    camera.position.setZ(5)
  
	container.appendChild( renderer.domElement );



	

	//

	window.addEventListener( 'resize', onWindowResize, false );

}  


function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0005;
  camera.rotation.y = t * -0.0005;

  obj.rotation.x += 0.01
  obj.rotation.y += 0.009;
  obj.rotation.z += 0.008;
}

document.body.onscroll = moveCamera




function onWindowResize() {

	camera.aspect = 150 / 2, 100 / 2 ;
	camera.updateProjectionMatrix();

	renderer.setSize( 125 / 2, 100 / 2  );

  if(camera.aspect>1){
    camera.position.z = 0.01 / camera.aspect;
  }else{
    camera.position.z= 0.01;
  }

}

//

function animate() {

	requestAnimationFrame( animate );

    
  renderer.render( scene, camera );

}

contactForm();

pictureGallery();

