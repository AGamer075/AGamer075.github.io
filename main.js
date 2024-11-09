import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/+esm";
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/controls/OrbitControls.js/+esm'

//Scene
const scene = new THREE.Scene()

//Color 
var r = 255;
var g = 0;
var b = 0;

//Sphere
const geometry = new THREE.SphereGeometry(3, 64, 64)
var material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
})

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

//Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width/sizes.height, 0.1,1000)
camera.position.setY(30)
camera.rotateX(90)
scene.add(camera)

//Light
const pointLight = new THREE.PointLight(0xEB0032,100)
pointLight.position.set(0,-5,0)
scene.add(pointLight)

//Helpers
// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50)
// scene.add(lightHelper, gridHelper)

//Renderer
const renderer = new THREE.WebGLRenderer({ 
  canvas: document.querySelector('#bg')
})

const canvasa = document.querySelector('#bg')

renderer.setPixelRatio( 2 )
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

//Controls
  const controls = new OrbitControls(camera, canvasa)
  controls.enableZoom = false
  controls.enableDamping = true
  controls.enablePan = false
// controls.autoRotate = true 
// controls.autoRotateSpeed = 10

//Resize
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  camera.aspect = sizes.width/sizes.height
  camera.updateProjectionMatrix()
  renderer.setSize(sizes.width, sizes.height)
})

//Light rotation function
let radius = 10; // radius of the circle
let angle = 0; // initial angle
let speed = 0.05; // speed of rotation

function animate() {
  pointLight.position.setX(radius * Math.cos(angle))
  pointLight.position.setZ(radius * Math.sin(angle))
  angle += speed
  // move the object to (x, y)
}

//loop

const loop = () => {
  animate()

  //controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(loop)
}
loop()

//Scroll Events 
var sheight = document.getElementById("scroll").offsetHeight

window.addEventListener('scroll', function() {
  var sP = window.scrollY;
  var percentageScroll = Math.round(100*(sP/(document.body.scrollHeight-window.innerHeight)))

  var re = 1
  var ge = 1
  var be = 1

  function colorGrapth(r1,g1,b1,r2,g2,b2) {
      re = ((percentageScroll)*((r2-r1)/100) + r1)/255
      ge = ((percentageScroll)*((g2-g1)/100) + g1)/255
      be = ((percentageScroll)*((b2-b1)/100) + b1)/255
  }
  colorGrapth(235, 0, 30, 239, 210, 18)

 // document.getElementById('text').innerHTML = percentageScroll + '%';

  pointLight.color = {r:re,g:ge,b:be}

//Move obj

  if(percentageScroll > 50){
    gsap.to(mesh.position, { duration: 1, x: 0, y: 0, z: -1*((percentageScroll-50)/3) })
  } else {
    gsap.to(mesh.position, { duration: 1, x: 0, y: 0, z:0 })
    gsap.killTweensOf(document.getElementById('scroll'))
    gsap.to(document.getElementById("scroll"), {opacity: 0, bottom: 0.05*window.innerHeight,  duration: 0.2})
  } 

  const scrollE = document.getElementById('scroll')
  const scrollS = getComputedStyle(scrollE)

  const scrollH = scrollE.clientHeight - parseFloat(scrollS.paddingBottom)

  if(percentageScroll == 100){
    console.log((scrollH))
    gsap.killTweensOf(document.getElementById("scroll"))
    gsap.to(document.getElementById("scroll"), {bottom: 0.5*(window.innerHeight - scrollH), duration: 1.5,})
    gsap.to(document.getElementById("scroll"), {opacity: 1, duration: 3})}
});

//Move Button

function getRandomPosition(element) { 
    var x = document.body.offsetHeight - element.clientHeight;
    var y = document.body.offsetWidth - element.clientWidth;
    var randomX = Math.floor(Math.random() * x);
    var randomY = Math.floor(Math.random() * y);
    return [randomX, randomY]; 
} 

function moveElement() { 
    var element = document.getElementById("decButton"); 
    var xy = getRandomPosition(element);
    element.style.top = xy[0] + 'px'; 
    element.style.left = xy[1] + 'px'; 
}

document.getElementById("decButton").addEventListener("click", moveElement());
