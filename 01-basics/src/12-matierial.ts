import * as THREE from "three";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();
/**
 * Objects
 */
const textureLoader = new THREE.TextureLoader();

const doorColorTexture = textureLoader.load("/woo.jpeg");
// const material = new THREE.MeshBasicMaterial({ map: doorColorTexture });

// material.transparent = true;
// material.alphaMap = doorColorTexture;

// The MeshDepthMaterial will simply color the geometry in white if it's close to the camera's near value and in black if it's close to the far value of the camera:
// const material = new THREE.MeshDepthMaterial();

const material = new THREE.MeshLambertMaterial();

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 0.5);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

// const material = new THREE.MeshNormalMaterial();
// material.flatShading = true;

const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), material);
sphere.position.x = -1.5;

const plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material);

const torus = new THREE.Mesh(
  new THREE.TorusGeometry(0.3, 0.2, 16, 32),
  material
);
torus.position.x = 1.5;

scene.add(sphere, plane, torus);
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

const camera = new THREE.PerspectiveCamera(100, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  sphere.rotation.y = 0.1 * elapsedTime;
  plane.rotation.y = 0.1 * elapsedTime;
  torus.rotation.y = 0.1 * elapsedTime;

  sphere.rotation.x = 0.15 * elapsedTime;
  plane.rotation.x = 0.15 * elapsedTime;
  torus.rotation.x = 0.15 * elapsedTime;

  // ...
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
};

tick();
