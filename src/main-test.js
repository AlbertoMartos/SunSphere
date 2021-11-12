var WIDTH = window.innerWidth
var HEIGHT = window.innerHeight

var scene, camera, renderer


function generateSphere(){
    var geometry = new THREE.SphereGeometry(1,30,30)

    var loader = new THREE.TextureLoader();
    var material = new THREE.MeshBasicMaterial({
        //https://i.stack.imgur.com/7MXox.jpg  mapa tal cual 
        //https://i.stack.imgur.com/dG4sE.jpg bump de relieve


        map: loader.load('./img/sol.jpg'),
        //map: loader.load('../assets/earthmap1k.jpg'),
      });
    //var material = new THREE.MeshBasicMaterial({color: 0x0095DD, wireframe:true})
    var sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)
}


/*var boxGeometry = new THREE.BoxGeometry(10, 10, 10);
var basicMaterial = new THREE.MeshBasicMaterial({color: 0x0095DD});
var cube = new THREE.Mesh(boxGeometry, basicMaterial);
scene.add(cube);
cube.rotation.set(0.4, 0.2, 0);*/


function init(){
    renderer = new THREE.WebGLRenderer({antialias:true})
    renderer.setSize(WIDTH, HEIGHT)
    renderer.setClearColor("#171717", 1)
    document.body.appendChild(renderer.domElement)

    scene = new THREE.Scene()

    camera = new THREE.PerspectiveCamera(70, WIDTH/HEIGHT)
    camera.position.z = 2
    scene.add(camera)

    var controls = new THREE.OrbitControls(camera, renderer.domElement);

    generateSphere()
}

function render() {
    requestAnimationFrame(render)
    renderer.render(scene, camera)
}

init();
render();