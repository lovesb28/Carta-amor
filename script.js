// 🌱 Corazones del árbol
const heartsContainer = document.getElementById("hearts");

setTimeout(() => {
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 160 + "px";
    heart.style.top = Math.random() * 160 + "px";
    heart.style.animationDelay = Math.random() * 3 + "s";
    heartsContainer.appendChild(heart);
  }
}, 3000);

// ⏳ Contador desde el 14 de junio de 2025
const startDate = new Date("2025-06-14T00:00:00");
const timer = document.getElementById("timer");

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timer.textContent =
    `Mi amor por ti comenzó hace…
     ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos 💕`;
}

setInterval(updateTimer, 1000);
updateTimer();

// 💗 Corazones flotando por toda la pantalla
setInterval(() => {
  const heart = document.createElement("div");
  heart.textContent = "💗";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-20px";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animation = "rise 6s linear forwards";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 600);
