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
  const colorMap = loader.load('textures/bois/wood_table_001_diff_4k.jpg');
  const normalMap = loader.load('textures/bois/wood_table_001_nor_gl_4k.jpg');
  const roughnessMap = loader.load('textures/bois/wood_table_001_rough_4k.jpg');
  const redTexture = loader.load('textures/metal/PaintedMetal004.png');
  const blueTexture = loader.load('textures/metal/PaintedMetal002.png');

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
  //const paddleMat = new THREE.MeshStandardMaterial({ color: 0x00ffcc });
  const redPaddleMat = new THREE.MeshStandardMaterial({ color: 0xa63c3c});
  const bluePaddleMat = new THREE.MeshStandardMaterial({ color: 0x3a5f81 });
  //const redPaddleMat = new THREE.MeshStandardMaterial({ map: redTexture });
  //const bluePaddleMat = new THREE.MeshStandardMaterial({ map: blueTexture });
  paddleLeft = new THREE.Mesh(paddleGeo, redPaddleMat);
  paddleRight = new THREE.Mesh(paddleGeo, bluePaddleMat);
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

  ballVelocity = new THREE.Vector3(0.4, 0, 0.2);

  composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.4, 0.4, 0.85);
  composer.addPass(bloom);

  const gui = new GUI();
  const gameFolder = gui.addFolder('Game Controls');
  gameFolder.add(ballVelocity, 'x', -0.2, 0.4).name('Vélocité X');
  gameFolder.add(ballVelocity, 'z', -0.2, 0.4).name('Vélocité Z');
  gameFolder.open();

  const lightFolder = gui.addFolder('Lumière');
  lightFolder.add(dirLight.position, 'x', -20, 20).name('X');
  lightFolder.add(dirLight.position, 'y', 2.8, 50).name('Y');
  lightFolder.open();

  const actions = {
    resetScore() {
      score.left = 0;
      score.right = 0;
      updateScore();
    },
    resetBall() {
      resetBall();
    }
  };
  gui.add(actions, 'resetScore').name('Reset Score');
  gui.add(actions, 'resetBall').name('Reset Ball');

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
    document.getElementById('scoreBoard').innerText = `Red: ${score.left}  |  Blue: ${score.right}`;
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

    const minX = -10 + 2;
    const maxX = 10 - 2;
    paddleLeft.position.x = THREE.MathUtils.clamp(paddleLeft.position.x, minX, maxX);
    paddleRight.position.x = THREE.MathUtils.clamp(paddleRight.position.x, minX, maxX);

    ball.position.add(ballVelocity);

    if (ball.position.x <= -10 || ball.position.x >= 10) {
      ballVelocity.x *= -1;
    }

    const ballBox = new THREE.Box3().setFromObject(ball);
    const leftBox = new THREE.Box3().setFromObject(paddleLeft);
    const rightBox = new THREE.Box3().setFromObject(paddleRight);

    const acceleration = 1.05;
    const maxSpeed = 2.5; 

    if (ballBox.intersectsBox(leftBox)) {
      const offset = ball.position.x - paddleLeft.position.x;
      ballVelocity.x = offset * 0.15;
      ballVelocity.z = Math.abs(ballVelocity.z);
      ballVelocity.multiplyScalar(acceleration);
      ballVelocity.clampLength(0, maxSpeed);
      ball.position.z = paddleLeft.position.z + 1.1;
    }

    if (ballBox.intersectsBox(rightBox)) {
      const offset = ball.position.x - paddleRight.position.x;
      ballVelocity.x = offset * 0.15;
      ballVelocity.z = -Math.abs(ballVelocity.z);
      ballVelocity.multiplyScalar(acceleration);
      ballVelocity.clampLength(0, maxSpeed);
      ball.position.z = paddleRight.position.z - 1.1;
    }

    if (ball.position.z < -18) {
      score.right++;
      updateScore();
      resetBall();
    }

    if (ball.position.z > 18) {
      score.left++;
      updateScore();
      resetBall();
    }
  }

  function resetBall() {
    ball.position.set(0, 0.7, 0);
    ballVelocity.set((Math.random() - 0.5), 0, (Math.random() < 0.5 ? 1 : -1) * ballVelocity.x);
  }

  updateScore();
  animate();
}

main();