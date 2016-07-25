var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// what the 3D image looks like
var geometry = new THREE.BoxGeometry( 100, 50, 300 );

// set material of image
var material = new THREE.MeshBasicMaterial( {
  color: 0x00ff00,
  wireframe: true
} );

//apply material to geomerty
var cube = new THREE.Mesh( geometry, material );

scene.add( cube );

camera.position.z = 1000;

var render = function () {
  requestAnimationFrame( render );
  // rotation speed
  // cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};
render();