import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import gsap from'gsap'
import { _round } from "gsap/gsap-core";


//Scene
const scene = new THREE.Scene()

//Color 
var r = 255;
var g = 0;
var b = 0;

//Sphere
const geometry = new THREE.SphereGeometry(3, 64, 64)
var material = new THREE.MeshStandardMaterial({
    color: 0xffaaaa,
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
const pointLight = new THREE.PointLight(0xffaaaa,100)
pointLight.position.set(10,-10,10)
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
controls.autoRotate = true 
controls.autoRotateSpeed = 10

//Resize
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  camera.aspect = sizes.width/sizes.height
  camera.updateProjectionMatrix()
  renderer.setSize(sizes.width, sizes.height)
})

//loop

const loop = () => {
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(loop)
}
loop()

//gsap anim test

// TweenMax.to(material, 1, {color: 'blue', repeat: -1, yoyo: true});

/* const element = document.getElementById('text');
const timeline = new gsap.timeline({ repeat: -1, yoyo: true });

timeline.to(element, { duration: 1, color: 'red' });

console.log(timeline.TimelineMax) */ 

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
  colorGrapth(235,255,0,40,193,51)

  console.log('ratio three:', percentageScroll)

  mesh.material.color = {r:re,g:ge,b:be}
  console.log(mesh.material.color)
});