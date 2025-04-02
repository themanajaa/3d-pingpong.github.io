import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

function main() {
  const canvas = document.querySelector('#c'); 
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x202020);

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 10, 30);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 5, 0);
  controls.update();

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.position.set(5, 10, 5);
  scene.add(dirLight);

  const tableGeometry = new THREE.BoxGeometry(20, 0.5, 40);
  const tableMaterial = new THREE.MeshStandardMaterial({ color: 0x1e1e1e });
  const table = new THREE.Mesh(tableGeometry, tableMaterial);
  table.position.y = -0.25;
  scene.add(table);

  const ballGeometry = new THREE.SphereGeometry(0.8, 32, 32);
  const ballMaterial = new THREE.MeshStandardMaterial({ color: 0xff5555 });
  const ball = new THREE.Mesh(ballGeometry, ballMaterial);
  ball.position.set(0, 0.8, 0);
  scene.add(ball);

  const paddleGeometry = new THREE.BoxGeometry(4, 1, 1);
  const paddleMaterial = new THREE.MeshStandardMaterial({ color: 0x00ffaa });

  const paddleLeft = new THREE.Mesh(paddleGeometry, paddleMaterial);
  paddleLeft.position.set(0, 0.5, -18);
  scene.add(paddleLeft);

  const paddleRight = new THREE.Mesh(paddleGeometry, paddleMaterial);
  paddleRight.position.set(0, 0.5, 18);
  scene.add(paddleRight);

  const gui = new GUI();
  const ballFolder = gui.addFolder('Balle');
  ballFolder.add(ball.position, 'x', -10, 10, 0.1).name('X');
  ballFolder.add(ball.position, 'z', -20, 20, 0.1).name('Z');
  ballFolder.open();

  const lightFolder = gui.addFolder('Lumière');
  lightFolder.add(dirLight.position, 'x', -20, 20).name('X');
  lightFolder.add(dirLight.position, 'y', 0, 50).name('Y');
  lightFolder.open();

  function animate(time) {
    time *= 0.001;
    ball.rotation.x = time;
    ball.rotation.y = time;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

main();