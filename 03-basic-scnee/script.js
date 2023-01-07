

const scene = new THREE.Scene()
const canvas = document.querySelector(".webgl")

// Object
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({
    color: '#ff0000'
})
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
scene.add(cubeMesh)

const sizes = {
    width: 800,
    height: 600,
}

//camera
const camera = new THREE.PerspectiveCamera(100, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

//renderer


// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)