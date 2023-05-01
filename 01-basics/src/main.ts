import * as THREE from "three";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
/**
 * Objects
 */
const group = new THREE.Group();
group.scale.y = 1;
// group.rotation.y = 0.2;
scene.add(group);

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("/woo.jpeg", () => {
  console.log("loaded");
});

texture.minFilter = THREE.NearestFilter;
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};
/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(100, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Cursor
const cursor = {
  x: 0,
  y: 0,
};

window.addEventListener("mousemove", (event) => {
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = -(event.clientY / sizes.height - 0.5);

  // console.log(cursor.x, cursor.y);
});
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

const controls = new OrbitControls(camera, canvas);
// controls.target.x = 2;
controls.enableDamping = true;

const clock = new THREE.Clock();
// gsap.to(mesh.position, { duration: 5, delay: 0.1, x: 2 });
const tick = () => {
  // Update objects
  // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2;
  // // camera.position.z = cursor.z * 3;
  // camera.position.y = Math.cos(cursor.x * Math.PI * 2) * 2;
  // camera.position.x = cursor.x * 5;

  // camera.position.y = cursor.y * 5;
  // camera.lookAt(mesh.position);
  controls.update();
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};
tick();
renderer.setSize(sizes.width, sizes.height);
// renderer.render(scene, camera);
