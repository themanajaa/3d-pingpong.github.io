import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AmbientLight,
  DirectionalLight,
  TextureLoader,
  BoxGeometry,
  MeshStandardMaterial,
  Mesh,
  SphereGeometry,
  Vector3,
  MathUtils,
  Box3,
  Color,
  ShaderMaterial,
  Vector2
} from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://a3cba31734e8caf17b0ff0dfa7fe95ee@o4509310067539968.ingest.de.sentry.io/4509310074683472",
  integrations: [Sentry.browserTracingIntegration()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});

let ball, paddleLeft, paddleRight, ballVelocity, score = { left: 0, right: 0 }, composer, dynamicCamera = true, gameStarted = false, gameOver = false;
const keys = {};

function main() {
  const canvas = document.querySelector('#c');
  const renderer = new WebGLRenderer({ antialias: true, canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new Scene();
  scene.background = new Color(0x202020);

  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 10, 30);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false;
  controls.enableZoom = true;
  controls.target.set(0, 5, 0);
  controls.update();

  const ambient = new AmbientLight(0xffffff, 0.3);
  scene.add(ambient);
  const dirLight = new DirectionalLight(0xffffff, 1);
  dirLight.position.set(-20, 2.8, 10);
  scene.add(dirLight);

  const loader = new TextureLoader();
  const colorMap = loader.load('textures/bois/wood_table_001_diff_4k.webp');
  const normalMap = loader.load('textures/bois/wood_table_001_nor_gl_4k.webp');
  const roughnessMap = loader.load('textures/bois/wood_table_001_rough_4k.webp');

  const tableGeo = new BoxGeometry(20, 0.5, 40);
  const tableMat = new MeshStandardMaterial({
    map: colorMap,
    normalMap: normalMap,
    roughnessMap: roughnessMap,
    roughness: 1
  });  
  const table = new Mesh(tableGeo, tableMat);
  table.position.y = -0.25;
  scene.add(table);

  const paddleGeo = new BoxGeometry(4, 1, 1);
  //const paddleMat = new MeshStandardMaterial({ color: 0x00ffcc });
  const redPaddleMat = new MeshStandardMaterial({ color: 0xe06262});
  const bluePaddleMat = new MeshStandardMaterial({ color: 0x5fa4e3 });
  //const redPaddleMat = new MeshStandardMaterial({ map: redTexture });
  //const bluePaddleMat = new MeshStandardMaterial({ map: blueTexture });
  paddleLeft = new Mesh(paddleGeo, redPaddleMat);
  paddleRight = new Mesh(paddleGeo, bluePaddleMat);
  paddleLeft.position.set(0, 0.5, -18);
  paddleRight.position.set(0, 0.5, 18);
  scene.add(paddleLeft);
  scene.add(paddleRight);

  const ballGeo = new SphereGeometry(0.7, 64, 64);
  const ballShaderMaterial = new ShaderMaterial({
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
  ball = new Mesh(ballGeo, ballShaderMaterial);
  ball.position.set(0, 0.7, 0);
  scene.add(ball);

  ballVelocity = new Vector3(0.4, 0, 0.2);

  composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new Vector2(window.innerWidth, window.innerHeight), 0.4, 0.4, 0.85);
  composer.addPass(bloom);

  requestIdleCallback(() => {
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
    
    const cameraOptions = { dynamicCamera: true };
    gui.add(cameraOptions, 'dynamicCamera')
      .name('Caméra dynamique')
      .onChange((value) => {
        dynamicCamera = value;
    });

    const gameControls = {
      restartGame() {
        score.left = 0;
        score.right = 0;
        updateScore();
        gameOver = false;
        resetBall();
        document.getElementById('winOverlay').style.opacity = 0;
        showIntro();
      }
    };
    gui.add(gameControls, 'restartGame').name('Nouvelle manche');
  }); 


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
    document.getElementById('scoreBoard').innerHTML = `
      <span style="color:#5fa4e3;">Blue: ${score.right}</span> |
      <span style="color:#e06262;">Red: ${score.left}</span> 
    `;
  }

  window.addEventListener('keydown', (e) => keys[e.code] = true);
  window.addEventListener('keyup', (e) => keys[e.code] = false);

  function animate(time) {   
    if (dynamicCamera) {
      const radius = 30;
      const camSpeed = 0.2;
      const angle = time * 0.0001 * camSpeed;
    
      camera.position.x = Math.cos(angle) * radius;
      camera.position.z = Math.sin(angle) * radius;
      camera.position.y = 12 + Math.sin(angle * 2) * 2;
    
      camera.lookAt(0, 0, 0);
    }    

    requestAnimationFrame(animate);
    if (!gameStarted || gameOver) {
      composer.render();
      return;
    } 
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
    paddleLeft.position.x = MathUtils.clamp(paddleLeft.position.x, minX, maxX);
    paddleRight.position.x = MathUtils.clamp(paddleRight.position.x, minX, maxX);

    ball.position.add(ballVelocity);

    if (ball.position.x <= -10 || ball.position.x >= 10) {
      ballVelocity.x *= -1;
    }

    const ballBox = new Box3().setFromObject(ball);
    const leftBox = new Box3().setFromObject(paddleLeft);
    const rightBox = new Box3().setFromObject(paddleRight);

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

    if (score.right >= 10) {
      showWinMessage('BLUE');
      return;
    }
    if (score.left >= 10) {
      showWinMessage('RED');
      return;
    }
    
  }

  function resetBall() {
    ball.position.set(0, 0.7, 0);
    ballVelocity.set((Math.random() - 0.5), 0, (Math.random() < 0.5 ? 1 : -1) * ballVelocity.x);
  }

  function showIntro() {
    const introOverlay = document.getElementById('introOverlay');
    introOverlay.textContent = 'READY...';
    introOverlay.style.opacity = 1;
    gameStarted = false;
  
    setTimeout(() => {
      introOverlay.textContent = 'GO!';
    }, 1500);
  
    setTimeout(() => {
      introOverlay.style.opacity = 0;
      gameStarted = true;
    }, 3000);
  }  

  function showWinMessage(winner) {
    const winOverlay = document.getElementById('winOverlay');
  
    if (winner === 'BLUE') {
      winOverlay.style.color = '#5fa4e3';
    } else if (winner === 'RED') {
      winOverlay.style.color = '#e06262';
    }
  
    winOverlay.textContent = `${winner} WINS!`;
    winOverlay.style.opacity = 1;
    gameOver = true;
  }  

  updateScore();
  animate();
  showIntro();
}

main();