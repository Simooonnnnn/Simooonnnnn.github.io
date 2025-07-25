document.addEventListener("mousemove", e => {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle-trail";
    sparkle.style.left = e.pageX + "px";
    sparkle.style.top = e.pageY + "px";
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  });
  
  function spawnEmoji() {
    for (let i = 0; i < 20; i++) {
      const el = document.createElement("div");
      el.innerText = ["💖", "✨", "🌈", "🎀", "👀", "😳", "💅"][Math.floor(Math.random() * 7)];
      el.style.left = Math.random() * 100 + "vw";
      el.style.top = "-50px";
      document.getElementById("emojiRain").appendChild(el);
      setTimeout(() => el.remove(), 6000);
    }
  }
  
  function spawnUwU() {
    for (let i = 0; i < 15; i++) {
      const el = document.createElement("div");
      el.innerText = "UwU~✨";
      el.style.left = Math.random() * 100 + "vw";
      el.style.top = "-30px";
      document.getElementById("uwuRain").appendChild(el);
      setTimeout(() => el.remove(), 6000);
    }
  }
  