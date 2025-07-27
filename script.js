// MAXIMUM CHAOS MODE JAVASCRIPT - FIXED VERSION
let chaosLevel = 0;
let glitchMode = false;
let particleCount = 0;
let audioContext = null;

// Initialize audio context for sound effects
function initAudio() {
  if (!audioContext) {
    try {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      console.log("Audio not supported, using visual feedback only");
    }
  }
}

// Enhanced mouse trail with multiple effects
document.addEventListener("mousemove", e => {
  // Sparkle trail - with error checking
  const sparkleContainer = document.getElementById("sparkleContainer");
  if (sparkleContainer) {
    const sparkle = document.createElement("div");
    sparkle.style.position = "fixed";
    sparkle.style.left = e.pageX + "px";
    sparkle.style.top = e.pageY + "px";
    sparkle.style.width = "8px";
    sparkle.style.height = "8px";
    sparkle.style.borderRadius = "50%";
    sparkle.style.background = "radial-gradient(circle, white, transparent)";
    sparkle.style.pointerEvents = "none";
    sparkle.style.zIndex = "6";
    sparkle.className = "mouse-sparkle";
    sparkleContainer.appendChild(sparkle);
    setTimeout(() => {
      if (sparkle.parentNode) sparkle.remove();
    }, 1000);
  }
  
  // Random chaos particles on movement
  if (Math.random() < 0.3) {
    createChaosParticle(e.pageX, e.pageY);
  }
});

// Enhanced emoji spam with chaos
function spawnEmoji() {
  const emojis = ["💖", "✨", "🌈", "🎀", "👀", "😳", "💅", "🦄", "🌸", "💝", "🍓", "🧚‍♀️", "💫", "🌺", "🦋"];
  const container = document.getElementById("emojiRain");
  
  if (!container) return;
  
  for (let i = 0; i < 30; i++) {
    const el = document.createElement("div");
    el.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.position = "fixed";
    el.style.left = Math.random() * 100 + "vw";
    el.style.top = "-50px";
    el.style.fontSize = "2em";
    el.style.pointerEvents = "none";
    el.style.zIndex = "5";
    el.style.textShadow = "0 0 10px black";
    el.style.animationDelay = Math.random() * 2 + "s";
    el.style.animationDuration = (Math.random() * 3 + 2) + "s";
    el.className = "falling-emoji";
    container.appendChild(el);
    setTimeout(() => {
      if (el.parentNode) el.remove();
    }, 8000);
  }
  
  // Add screen flash effect
  flashScreen("#ff00ff");
  playSound("emoji");
}

// Enhanced UwU spam with variations
function spawnUwU() {
  const uwuTexts = ["UwU~✨", "OwO💖", ">w<🌈", "^w^💫", "~(＾◡＾)~", "(*´ω｀*)", "(´∀｀)♡", "ヽ(♡‿♡)ノ"];
  const container = document.getElementById("uwuRain");
  
  if (!container) return;
  
  for (let i = 0; i < 25; i++) {
    const el = document.createElement("div");
    el.innerText = uwuTexts[Math.floor(Math.random() * uwuTexts.length)];
    el.style.position = "fixed";
    el.style.left = Math.random() * 100 + "vw";
    el.style.top = "-30px";
    el.style.fontSize = "1.8em";
    el.style.pointerEvents = "none";
    el.style.zIndex = "5";
    el.style.textShadow = "0 0 10px black";
    el.style.animationDelay = Math.random() * 1.5 + "s";
    el.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
    el.className = "falling-uwu";
    container.appendChild(el);
    setTimeout(() => {
      if (el.parentNode) el.remove();
    }, 7000);
  }
  
  flashScreen("#00ffff");
  playSound("uwu");
}

// New kiss explosion effect
function kissExplosion() {
  const kisses = ["💋", "😘", "💕", "💖", "💗", "💘", "💞", "💝"];
  const container = document.getElementById("kissExplosions");
  
  if (!container) return;
  
  for (let i = 0; i < 15; i++) {
    const el = document.createElement("div");
    el.innerText = kisses[Math.floor(Math.random() * kisses.length)];
    el.style.position = "fixed";
    el.style.left = Math.random() * 100 + "vw";
    el.style.top = Math.random() * 100 + "vh";
    el.style.fontSize = "3em";
    el.style.pointerEvents = "none";
    el.style.zIndex = "7";
    el.className = "kiss-explosion";
    container.appendChild(el);
    setTimeout(() => {
      if (el.parentNode) el.remove();
    }, 2000);
  }
  
  // Create explosion effect at center
  createExplosion(window.innerWidth / 2, window.innerHeight / 2);
  flashScreen("#ffff00");
  playSound("kiss");
}

// Screen shake effect - FIXED
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

// New rainbow explosion effect - FIXED
function rainbowExplosion() {
  const container = document.getElementById("rainbowParticles");
  if (!container) return;
  
  const colors = ["#ff00ff", "#00ffff", "#ffff00", "#ff0080", "#8000ff", "#00ff80"];
  
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.style.position = "fixed";
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = "100vh";
    particle.style.width = "15px";
    particle.style.height = "15px";
    particle.style.borderRadius = "50%";
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    particle.style.pointerEvents = "none";
    particle.style.zIndex = "4";
    particle.style.animationDelay = Math.random() * 1 + "s";
    particle.className = "rainbow-particle";
    container.appendChild(particle);
    setTimeout(() => {
      if (particle.parentNode) particle.remove();
    }, 3000);
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

// New heart storm effect - FIXED
function heartStorm() {
  const hearts = ["💖", "💗", "💘", "💝", "💕", "💞", "❤️", "🧡", "💛", "💚", "💙", "💜"];
  const container = document.getElementById("heartRain");
  
  if (!container) return;
  
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-50px";
    heart.style.fontSize = (Math.random() * 2 + 1) + "em";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "5";
    heart.style.textShadow = "0 0 10px black";
    heart.style.animationDelay = Math.random() * 2 + "s";
    heart.className = "falling-heart";
    container.appendChild(heart);
    setTimeout(() => {
      if (heart.parentNode) heart.remove();
    }, 6000);
  }
  
  flashScreen("#ff69b4");
  playSound("heart");
}

// Glitch mode toggle - FIXED
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
  if (!container) return;
  
  const glitchTexts = ["ERROR", "CHAOS", "OVERLOAD", "SYSTEM MALFUNCTION", "UwU.exe", "FEMBOY.dll", "💖ERROR💖"];
  
  glitchInterval = setInterval(() => {
    const glitchEl = document.createElement("div");
    glitchEl.innerText = glitchTexts[Math.floor(Math.random() * glitchTexts.length)];
    glitchEl.style.position = "fixed";
    glitchEl.style.left = Math.random() * 100 + "vw";
    glitchEl.style.top = Math.random() * 100 + "vh";
    glitchEl.style.fontSize = "2em";
    glitchEl.style.color = "#00ffff";
    glitchEl.style.fontFamily = "'Courier New', monospace";
    glitchEl.style.pointerEvents = "none";
    glitchEl.style.zIndex = "8";
    glitchEl.style.textShadow = "2px 0 #ff00ff, -2px 0 #ffff00";
    glitchEl.className = "glitch-text";
    container.appendChild(glitchEl);
    setTimeout(() => {
      if (glitchEl.parentNode) glitchEl.remove();
    }, 3000);
  }, 500);
}

function stopGlitchEffects() {
  if (glitchInterval) {
    clearInterval(glitchInterval);
  }
}

// Helper function to create chaos particles - FIXED
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
  particle.className = "chaos-particle";
  
  document.body.appendChild(particle);
  setTimeout(() => {
    if (particle.parentNode) particle.remove();
  }, 800);
}

// Helper function to create explosion effect - FIXED
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
    explosion.className = "explosion-particle";
    
    document.body.appendChild(explosion);
    setTimeout(() => {
      if (explosion.parentNode) explosion.remove();
    }, 1500);
  }
}

// Screen flash effect - FIXED
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
  flash.className = "screen-flash";
  
  document.body.appendChild(flash);
  setTimeout(() => {
    if (flash.parentNode) flash.remove();
  }, 300);
}

// ENHANCED Sound effect with actual audio - FIXED
function playSound(type) {
  // Visual feedback
  const soundIndicator = document.createElement("div");
  soundIndicator.style.position = "fixed";
  soundIndicator.style.top = "20px";
  soundIndicator.style.right = "20px";
  soundIndicator.style.background = "#ff00ff";
  soundIndicator.style.color = "white";
  soundIndicator.style.padding = "10px";
  soundIndicator.style.borderRadius = "10px";
  soundIndicator.style.zIndex = "10000";
  soundIndicator.style.fontWeight = "bold";
  soundIndicator.className = "sound-indicator";
  soundIndicator.innerText = `🔊 ${type.toUpperCase()}!`;
  
  document.body.appendChild(soundIndicator);
  setTimeout(() => {
    if (soundIndicator.parentNode) soundIndicator.remove();
  }, 500);
  
  // Actual audio synthesis
  if (audioContext) {
    try {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Different frequencies for different sound types
      const frequencies = {
        emoji: [440, 550, 660],
        uwu: [330, 440, 550],
        kiss: [220, 330, 440],
        shake: [110, 220],
        rainbow: [440, 550, 660, 770],
        heart: [330, 415, 550],
        glitch: [100, 200, 400]
      };
      
      const freq = frequencies[type] || [440];
      oscillator.frequency.setValueAtTime(freq[0], audioContext.currentTime);
      
      // Create a musical effect
      freq.forEach((f, i) => {
        oscillator.frequency.setValueAtTime(f, audioContext.currentTime + i * 0.1);
      });
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {
      console.log("Audio synthesis failed:", e);
    }
  }
}

// Random chaos events - FIXED
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
        el.style.pointerEvents = "none";
        el.style.zIndex = "5";
        el.style.textShadow = "0 0 10px black";
        el.className = "random-chaos";
        document.body.appendChild(el);
        setTimeout(() => {
          if (el.parentNode) el.remove();
        }, 4000);
      }
    ];
    
    chaosEvents[Math.floor(Math.random() * chaosEvents.length)]();
  }
}, 2000);

// Konami code for ULTIMATE CHAOS - FIXED
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

// Initialize audio on first user interaction
document.addEventListener('click', () => {
  initAudio();
}, { once: true });

document.addEventListener('keydown', () => {
  initAudio();
}, { once: true });

// Initialize chaos
console.log("🌈💖 FEMBOY CHAOS DIMENSION LOADED! 💖🌈");
console.log("Try the Konami code for ultimate chaos! ↑↑↓↓←→←→BA");

// Add some initial sparkles - FIXED
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