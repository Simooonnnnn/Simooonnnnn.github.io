// MAXIMUM CHAOS MODE JAVASCRIPT
let chaosLevel = 0;
let glitchMode = false;
let particleCount = 0;

// Enhanced mouse trail with multiple effects
document.addEventListener("mousemove", e => {
  // Sparkle trail
  const sparkle = document.createElement("div");
  sparkle.style.left = e.pageX + "px";
  sparkle.style.top = e.pageY + "px";
  document.getElementById("sparkleContainer").appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1000);
  
  // Random chaos particles on movement
  if (Math.random() < 0.3) {
    createChaosParticle(e.pageX, e.pageY);
  }
});

// Enhanced emoji spam with chaos
function spawnEmoji() {
  const emojis = ["💖", "✨", "🌈", "🎀", "👀", "😳", "💅", "🦄", "🌸", "💝", "🍓", "🧚‍♀️", "💫", "🌺", "🦋"];
  const container = document.getElementById("emojiRain");
  
  for (let i = 0; i < 30; i++) {
    const el = document.createElement("div");
    el.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.top = "-50px";
    el.style.animationDelay = Math.random() * 2 + "s";
    el.style.animationDuration = (Math.random() * 3 + 2) + "s";
    container.appendChild(el);
    setTimeout(() => el.remove(), 8000);
  }
  
  // Add screen flash effect
  flashScreen("#ff00ff");
  playSound("emoji");
}

// Enhanced UwU spam with variations
function spawnUwU() {
  const uwuTexts = ["UwU~✨", "OwO💖", ">w<🌈", "^w^💫", "~(＾◡＾)~", "(*´ω｀*)", "(´∀｀)♡", "ヽ(♡‿♡)ノ"];
  const container = document.getElementById("uwuRain");
  
  for (let i = 0; i < 25; i++) {
    const el = document.createElement("div");
    el.innerText = uwuTexts[Math.floor(Math.random() * uwuTexts.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.top = "-30px";
    el.style.animationDelay = Math.random() * 1.5 + "s";
    el.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
    container.appendChild(el);
    setTimeout(() => el.remove(), 7000);
  }
  
  flashScreen("#00ffff");
  playSound("uwu");
}

// New kiss explosion effect
function kissExplosion() {
  const kisses = ["💋", "😘", "💕", "💖", "💗", "💘", "💞", "💝"];
  const container = document.getElementById("kissExplosions");
  
  for (let i = 0; i < 15; i++) {
    const el = document.createElement("div");
    el.innerText = kisses[Math.floor(Math.random() * kisses.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.top = Math.random() * 100 + "vh";
    container.appendChild(el);
    setTimeout(() => el.remove(), 2000);
  }
  
  // Create explosion effect at center
  createExplosion(window.innerWidth / 2, window.innerHeight / 2);
  flashScreen("#ffff00");
  playSound("kiss");
}

// Screen shake effect
function screenShake() {
  document.body.classList.add("screen-shake");
  setTimeout(() => {
    document.body.classList.remove("screen-shake");
  }, 500);
  
  // Add random particles during shake
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      createChaosParticle(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight
      );
    }, i * 25);
  }
  
  playSound("shake");
}

// New rainbow explosion effect
function rainbowExplosion() {
  const container = document.getElementById("rainbowParticles");
  const colors = ["#ff00ff", "#00ffff", "#ffff00", "#ff0080", "#8000ff", "#00ff80"];
  
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    particle.style.animationDelay = Math.random() * 1 + "s";
    container.appendChild(particle);
    setTimeout(() => particle.remove(), 3000);
  }
  
  // Rainbow flash effect
  let colorIndex = 0;
  const rainbowFlash = setInterval(() => {
    flashScreen(colors[colorIndex]);
    colorIndex = (colorIndex + 1) % colors.length;
  }, 100);
  
  setTimeout(() => clearInterval(rainbowFlash), 600);
  playSound("rainbow");
}

// New heart storm effect
function heartStorm() {
  const hearts = ["💖", "💗", "💘", "💝", "💕", "💞", "❤️", "🧡", "💛", "💚", "💙", "💜"];
  const container = document.getElementById("heartRain");
  
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-50px";
    heart.style.animationDelay = Math.random() * 2 + "s";
    heart.style.fontSize = (Math.random() * 2 + 1) + "em";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }
  
  flashScreen("#ff69b4");
  playSound("heart");
}

// Glitch mode toggle
function glitchMode() {
  glitchMode = !glitchMode;
  
  if (glitchMode) {
    startGlitchEffects();
    document.body.style.filter = "contrast(150%) saturate(200%)";
  } else {
    stopGlitchEffects();
    document.body.style.filter = "none";
  }
  
  playSound("glitch");
}

let glitchInterval;
function startGlitchEffects() {
  const container = document.getElementById("glitchTextContainer");
  const glitchTexts = ["ERROR", "CHAOS", "OVERLOAD", "SYSTEM MALFUNCTION", "UwU.exe", "FEMBOY.dll", "💖ERROR💖"];
  
  glitchInterval = setInterval(() => {
    const glitchEl = document.createElement("div");
    glitchEl.innerText = glitchTexts[Math.floor(Math.random() * glitchTexts.length)];
    glitchEl.style.left = Math.random() * 100 + "vw";
    glitchEl.style.top = Math.random() * 100 + "vh";
    container.appendChild(glitchEl);
    setTimeout(() => glitchEl.remove(), 3000);
  }, 500);
}

function stopGlitchEffects() {
  if (glitchInterval) {
    clearInterval(glitchInterval);
  }
}

// Helper function to create chaos particles
function createChaosParticle(x, y) {
  const particle = document.createElement("div");
  particle.style.position = "fixed";
  particle.style.left = x + "px";
  particle.style.top = y + "px";
  particle.style.width = "10px";
  particle.style.height = "10px";
  particle.style.borderRadius = "50%";
  particle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
  particle.style.pointerEvents = "none";
  particle.style.zIndex = "9";
  particle.style.animation = "sparkleFade 0.8s ease-out forwards";
  
  document.body.appendChild(particle);
  setTimeout(() => particle.remove(), 800);
}

// Helper function to create explosion effect
function createExplosion(x, y) {
  const explosionEmojis = ["💥", "⚡", "✨", "🌟", "💫", "🎆", "🎇"];
  
  for (let i = 0; i < 10; i++) {
    const explosion = document.createElement("div");
    explosion.innerText = explosionEmojis[Math.floor(Math.random() * explosionEmojis.length)];
    explosion.style.position = "fixed";
    explosion.style.left = x + Math.random() * 200 - 100 + "px";
    explosion.style.top = y + Math.random() * 200 - 100 + "px";
    explosion.style.fontSize = "3em";
    explosion.style.pointerEvents = "none";
    explosion.style.zIndex = "10";
    explosion.style.animation = "kissExplode 1.5s ease-out forwards";
    
    document.body.appendChild(explosion);
    setTimeout(() => explosion.remove(), 1500);
  }
}

// Screen flash effect
function flashScreen(color) {
  const flash = document.createElement("div");
  flash.style.position = "fixed";
  flash.style.top = "0";
  flash.style.left = "0";
  flash.style.width = "100vw";
  flash.style.height = "100vh";
  flash.style.background = color;
  flash.style.opacity = "0.5";
  flash.style.pointerEvents = "none";
  flash.style.zIndex = "9999";
  flash.style.animation = "flashFade 0.3s ease-out forwards";
  
  document.body.appendChild(flash);
  setTimeout(() => flash.remove(), 300);
}

// Add CSS for flash animation if not exists
if (!document.querySelector('#flashAnimation')) {
  const style = document.createElement('style');
  style.id = 'flashAnimation';
  style.textContent = `
    @keyframes flashFade {
      0% { opacity: 0.5; }
      50% { opacity: 0.8; }
      100% { opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}

// Sound effect simulation (visual feedback since audio is limited)
function playSound(type) {
  console.log(`🔊 Playing ${type} sound effect!`);
  
  // Visual sound effect
  const soundIndicator = document.createElement("div");
  soundIndicator.style.position = "fixed";
  soundIndicator.style.top = "20px";
  soundIndicator.style.right = "20px";
  soundIndicator.style.background = "#ff00ff";
  soundIndicator.style.color = "white";
  soundIndicator.style.padding = "10px";
  soundIndicator.style.borderRadius = "10px";
  soundIndicator.style.zIndex = "10000";
  soundIndicator.style.animation = "soundPulse 0.5s ease-out";
  soundIndicator.innerText = `🔊 ${type.toUpperCase()}!`;
  
  document.body.appendChild(soundIndicator);
  setTimeout(() => soundIndicator.remove(), 500);
}

// Add sound pulse animation
const soundStyle = document.createElement('style');
soundStyle.textContent = `
  @keyframes soundPulse {
    0% { transform: scale(0); opacity: 0; }
    50% { transform: scale(1.2); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }
`;
document.head.appendChild(soundStyle);

// Random chaos events
setInterval(() => {
  if (Math.random() < 0.1) { // 10% chance every 2 seconds
    const chaosEvents = [
      () => createChaosParticle(Math.random() * window.innerWidth, Math.random() * window.innerHeight),
      () => {
        const randomEmoji = ["✨", "💖", "🌈", "💫"][Math.floor(Math.random() * 4)];
        const el = document.createElement("div");
        el.innerText = randomEmoji;
        el.style.position = "fixed";
        el.style.left = Math.random() * 100 + "vw";
        el.style.top = "-50px";
        el.style.fontSize = "2em";
        el.style.animation = "chaosfall 4s linear";
        el.style.pointerEvents = "none";
        el.style.zIndex = "5";
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 4000);
      }
    ];
    
    chaosEvents[Math.floor(Math.random() * chaosEvents.length)]();
  }
}, 2000);

// Konami code for ULTIMATE CHAOS
let konamiCode = [];
const konamiSequence = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.code);
  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift();
  }
  
  if (konamiCode.join(',') === konamiSequence.join(',')) {
    activateUltimateChaos();
    konamiCode = [];
  }
});

function activateUltimateChaos() {
  alert("🌈💖 ULTIMATE FEMBOY CHAOS MODE ACTIVATED! 💖🌈");
  
  // Trigger all effects at once
  spawnEmoji();
  spawnUwU();
  kissExplosion();
  screenShake();
  rainbowExplosion();
  heartStorm();
  
  setTimeout(() => {
    glitchMode();
  }, 1000);
  
  // Create massive particle explosion
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      createChaosParticle(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight
      );
    }, i * 20);
  }
}

// Initialize chaos
console.log("🌈💖 FEMBOY CHAOS DIMENSION LOADED! 💖🌈");
console.log("Try the Konami code for ultimate chaos! ↑↑↓↓←→←→BA");

// Add some initial sparkles
setTimeout(() => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      createChaosParticle(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight
      );
    }, i * 200);
  }
}, 1000);