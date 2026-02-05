const game = document.getElementById("game");
const message = document.getElementById("message");
const scoreEl = document.getElementById("score");
const startBtn = document.getElementById("startBtn");

let score = 0;
let canTap = false;
let interval = null;
let speed = 1200;

function startGame() {
  score = 0;
  speed = 1200;
  scoreEl.textContent = "Pont: 0";
  startBtn.style.display = "none";
  message.textContent = "VÁRJ...";
  nextRound();
}

function nextRound() {
  canTap = false;
  game.style.background = "red";
  message.textContent = "NE TAPPELD";

  setTimeout(() => {
    canTap = true;
    game.style.background = "green";
    message.textContent = "TAP NOW";
  }, Math.random() * speed + 300);
}

function gameOver() {
  clearInterval(interval);
  game.style.background = "black";
  message.textContent = "GAME OVER";
  startBtn.style.display = "block";
}

game.addEventListener("touchstart", handleTap);
game.addEventListener("mousedown", handleTap);

function handleTap() {
  if (startBtn.style.display !== "none") return;

  if (canTap) {
    score++;
    scoreEl.textContent = "Pont: " + score;
    speed = Math.max(300, speed - 50);
    nextRound();
  } else {
    gameOver();
  }
}

startBtn.addEventListener("click", startGame);

