import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

let ball, paddleLeft, paddleRight, ballVelocity, score = { left: 0, right: 0 }, composer;
const keys = {};

function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x202020);

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 10, 30);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false;
  controls.enableZoom = true;
  controls.target.set(0, 5, 0);
  controls.update();

  const ambient = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(ambient);
  const dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.position.set(-20, 2.8, 10);
  scene.add(dirLight);

  const loader = new THREE.TextureLoader();
  const colorMap = loader.load('textures/bricks/Bricks073C_1K-JPG_Color.jpg');
  const normalMap = loader.load('textures/bricks/Bricks073C_1K-JPG_NormalGL.jpg');
  const roughnessMap = loader.load('textures/bricks/Bricks073C_1K-JPG_Roughness.jpg');

  const tableGeo = new THREE.BoxGeometry(20, 0.5, 40);
  const tableMat = new THREE.MeshStandardMaterial({
    map: colorMap,
    normalMap: normalMap,
    roughnessMap: roughnessMap,
    roughness: 1
  });  
  const table = new THREE.Mesh(tableGeo, tableMat);
  table.position.y = -0.25;
  scene.add(table);

  const paddleGeo = new THREE.BoxGeometry(4, 1, 1);
  const paddleMat = new THREE.MeshStandardMaterial({ color: 0x00ffcc });
  paddleLeft = new THREE.Mesh(paddleGeo, paddleMat);
  paddleRight = new THREE.Mesh(paddleGeo, paddleMat);
  paddleLeft.position.set(0, 0.5, -18);
  paddleRight.position.set(0, 0.5, 18);
  scene.add(paddleLeft);
  scene.add(paddleRight);

  const ballGeo = new THREE.SphereGeometry(0.7, 64, 64);
  const ballShaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0.0 }
    },
    vertexShader: `
      varying vec3 vNormal;
      void main() {
        vNormal = normal;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      varying vec3 vNormal;
      void main() {
        float intensity = pow(0.5 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        gl_FragColor = vec4(1.0, 0.3 + 0.3 * sin(time), 0.3, 1.0) * intensity;
      }
    `
  });
  ball = new THREE.Mesh(ballGeo, ballShaderMaterial);
  ball.position.set(0, 0.7, 0);
  scene.add(ball);

  ballVelocity = new THREE.Vector3(0.2, 0, 0.4);

  composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.4, 0.4, 0.85);
  composer.addPass(bloom);

  const gui = new GUI();
  const gameFolder = gui.addFolder('Game Controls');
  gameFolder.add(ballVelocity, 'x', -1, 1).name('X');
  gameFolder.add(ballVelocity, 'z', -1, 1).name('Z');
  gameFolder.open();

  const lightFolder = gui.addFolder('Lumière');
  lightFolder.add(dirLight.position, 'x', -20, 20).name('X');
  lightFolder.add(dirLight.position, 'y', 2.8, 50).name('Y');
  lightFolder.open();

  const scoreBoard = document.createElement('div');
  scoreBoard.style.position = 'absolute';
  scoreBoard.style.top = '10px';
  scoreBoard.style.left = '50%';
  scoreBoard.style.transform = 'translateX(-50%)';
  scoreBoard.style.color = 'white';
  scoreBoard.style.fontSize = '24px';
  scoreBoard.style.fontFamily = 'monospace';
  scoreBoard.id = 'scoreBoard';
  document.body.appendChild(scoreBoard);

  function updateScore() {
    document.getElementById('scoreBoard').innerText = `Left: ${score.left}  |  Right: ${score.right}`;
  }

  window.addEventListener('keydown', (e) => keys[e.code] = true);
  window.addEventListener('keyup', (e) => keys[e.code] = false);

  function animate(time) {
    requestAnimationFrame(animate);
    updateGame(time);
    composer.render();
  }

  function updateGame(time) {
    if (ball.material.uniforms) ball.material.uniforms.time.value = time * 0.001;

    if (keys['ArrowLeft']) paddleRight.position.x -= 0.5;
    if (keys['ArrowRight']) paddleRight.position.x += 0.5;
    if (keys['KeyA']) paddleLeft.position.x -= 0.5;
    if (keys['KeyD']) paddleLeft.position.x += 0.5;

    ball.position.add(ballVelocity);

    if (ball.position.x <= -10 || ball.position.x >= 10) ballVelocity.x *= -1;

    if (ball.position.distanceTo(paddleLeft.position) < 1.5 && ball.position.z < paddleLeft.position.z + 1) ballVelocity.z *= -1;
    if (ball.position.distanceTo(paddleRight.position) < 1.5 && ball.position.z > paddleRight.position.z - 1) ballVelocity.z *= -1;

    if (ball.position.z < -20) {
      score.right++;
      updateScore();
      resetBall();
    }
    if (ball.position.z > 20) {
      score.left++;
      updateScore();
      resetBall();
    }
  }

  function resetBall() {
    ball.position.set(0, 0.7, 0);
    ballVelocity.set((Math.random() - 0.5), 0, (Math.random() < 0.5 ? 1 : -1) * 0.4);
  }

  updateScore();
  animate();
}

main();