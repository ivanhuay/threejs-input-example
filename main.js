var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var cubes = [];
scene.background = new THREE.Color( 0x505050 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshLambertMaterial({
  color: 0x00ff00
});

camera.position.z = 7;
camera.position.y = 3;
camera.position.x = 2;

var light = new THREE.DirectionalLight( 0xffffff, 1 );
light.position.set( 3, 3, 5);

scene.add( light );
var light2 = new THREE.AmbientLight( 0xabababa, 0.3 );
scene.add( light2 );

var letters = {
    a:[
      [0,0,1,0,0],
      [0,1,0,1,0],
      [0,1,1,1,0],
      [0,1,0,1,0],
      [0,1,0,1,0]
    ],
    b:[
      [0,1,1,1,0],
      [0,1,0,0,1],
      [0,1,1,1,0],
      [0,1,0,0,1],
      [0,1,1,1,0]
    ],
    c:[
      [0,1,1,1,0],
      [0,1,0,0,0],
      [0,1,0,0,0],
      [0,1,0,0,0],
      [0,1,1,1,0]
    ],
    d:[
      [0,1,1,1,0],
      [0,1,0,0,1],
      [0,1,0,0,1],
      [0,1,0,0,1],
      [0,1,1,1,0]
    ],
    e:[
      [0,1,1,1,0],
      [0,1,0,0,0],
      [0,1,1,1,0],
      [0,1,0,0,0],
      [0,1,1,1,0]
    ],
    f:[
      [0,1,1,1,0],
      [0,1,0,0,0],
      [0,1,1,1,0],
      [0,1,0,0,0],
      [0,1,0,0,0]
    ],
    g:[
      [0,1,1,1,0],
      [0,1,0,0,0],
      [0,1,1,1,0],
      [0,1,0,1,0],
      [0,1,1,1,0]
    ],
    h:[
      [0,1,0,1,0],
      [0,1,0,1,0],
      [0,1,1,1,0],
      [0,1,0,1,0],
      [0,1,0,1,0]
    ],
    i:[
      [0,1,1,1,0],
      [0,0,1,0,0],
      [0,0,1,0,0],
      [0,0,1,0,0],
      [0,1,1,1,0]
    ],
    j:[
      [0,0,0,1,0],
      [0,0,0,1,0],
      [0,0,0,1,0],
      [0,1,0,1,0],
      [0,1,1,1,0]
    ],
    k:[
      [0,1,0,1,0],
      [0,1,0,1,0],
      [0,1,1,0,0],
      [0,1,0,1,0],
      [0,1,0,1,0]
    ],
    l:[
      [0,1,0,0,0],
      [0,1,0,0,0],
      [0,1,0,0,0],
      [0,1,0,0,0],
      [0,1,1,1,0]
    ],
    m:[
      [1,0,0,0,1],
      [1,1,0,1,1],
      [1,0,1,0,1],
      [1,0,0,0,1],
      [1,0,0,0,1]
    ],
    n:[
      [1,0,0,0,1],
      [1,1,0,0,1],
      [1,0,1,0,1],
      [1,0,0,1,1],
      [1,0,0,0,1]
    ],
    ñ:[
      [0,1,0,1,0],
      [0,0,1,0,0],
      [1,0,0,0,1],
      [1,1,0,0,1],
      [1,0,1,0,1],
      [1,0,0,1,1],
      [1,0,0,0,1]
    ],
    o:[
      [0,1,1,1,0],
      [0,1,0,1,0],
      [0,1,0,1,0],
      [0,1,0,1,0],
      [0,1,1,1,0]
    ],
    p:[
      [0,1,1,1,0],
      [0,1,0,1,0],
      [0,1,1,1,0],
      [0,1,0,0,0],
      [0,1,0,0,0]
    ],
    q:[
      [0,1,1,1,0],
      [0,1,0,1,0],
      [0,1,0,1,0],
      [0,1,1,1,0],
      [0,0,0,0,1]
    ],
    r:[
      [0,1,1,1,0],
      [0,1,0,1,0],
      [0,1,1,1,0],
      [0,1,1,0,0],
      [0,1,0,1,0]
    ],
    s:[
      [0,1,1,1,0],
      [0,1,0,0,0],
      [0,1,1,1,0],
      [0,0,0,1,0],
      [0,1,1,1,0]
    ],
    t:[
      [0,1,1,1,0],
      [0,0,1,0,0],
      [0,0,1,0,0],
      [0,0,1,0,0],
      [0,0,1,0,0]
    ],
    u:[
      [0,1,0,1,0],
      [0,1,0,1,0],
      [0,1,0,1,0],
      [0,1,0,1,0],
      [0,1,1,1,0]
    ],
    v:[
      [0,1,0,1,0],
      [0,1,0,1,0],
      [0,1,0,1,0],
      [0,1,0,1,0],
      [0,0,1,0,0]
    ],
    w:[
      [1,0,0,0,1],
      [1,0,0,0,1],
      [1,0,1,0,1],
      [1,0,1,0,1],
      [0,1,0,1,0]
    ],
    x:[
      [0,1,0,1,0],
      [0,1,0,1,0],
      [0,0,1,0,0],
      [0,1,0,1,0],
      [0,1,0,1,0]
    ],
    y:[
      [0,1,0,1,0],
      [0,1,0,1,0],
      [0,1,1,1,0],
      [0,0,1,0,0],
      [0,0,1,0,0]
    ],
    z:[
      [0,1,1,1,0],
      [0,0,0,1,0],
      [0,0,1,0,0],
      [0,1,0,0,0],
      [0,1,1,1,0]
    ],
    default:[
      [0,1,1,1,0],
      [0,0,0,1,0],
      [0,1,1,1,0],
      [0,0,0,0,0],
      [0,1,0,0,0]
    ]
}

var letter = 'z';
function createLetter(){

  var arrayPosition = letters[letter];
  for(var y=0; y<arrayPosition.length; y++){
    var realY = arrayPosition.length - y;
    for(var x=0; x<arrayPosition[y].length; x++){
      if(arrayPosition[y][x]===1){
        var cube = new THREE.Mesh(geometry, material);
        cube.position.set(x,realY,0);
        scene.add(cube);
        cubes.push(cube);
      }
    }
  }
}
createLetter();
function cleanScene(){
  cubes.forEach(function(cube){
    scene.remove(cube);
  });
  cubes = [];
}
function render(){
    for (var i = 0; i < cubes.length; i++) {
      var cube = cubes[i];
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
    }
}

var time = 0;
function animate() {
  time++;
  requestAnimationFrame(animate);
  camera.rotation.y = Math.sin(time/100) * 0.4;
  render();
  renderer.render(scene, camera);
}
animate();


var elm = document.querySelector('.floating-input');
elm.addEventListener('keypress',function(event){
  var key = String.fromCharCode(event.keyCode).toLowerCase();
  if(letter == key){
      return;
  }
  if(letters.hasOwnProperty(key)){
    letter = key;
  } else{
    letter = 'default';
  }
  cleanScene();
  createLetter();
});
