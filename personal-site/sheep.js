const startButton = document.getElementById('start-button');
let score = 0;
let currentSheep = null;
let timer;

function randomHole() {
const holes = document.querySelectorAll('.grid-item');
  holes.forEach(hole => hole.classList.remove("sheep"));

  const index = Math.floor(Math.random() * holes.length);
  holes[index].classList.add("sheep");
  currentSheep = holes[index];
}

function startGame() {
  score = 0;
  document.getElementById('score').textContent = score;
  timer = setInterval(randomHole, 800);
}

document.querySelectorAll('.grid-item').forEach(hole => {
  hole.addEventListener('click', () => {
    if (hole === currentSheep) {
      score++;
      document.getElementById('score').textContent = score;
      currentSheep.classList.remove("sheep");
      currentSheep = null;
    }
  });
});

startButton.addEventListener('click', () => { 
    startGame();
});
