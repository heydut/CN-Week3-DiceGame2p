let newGameB = document.querySelector(".newGameB");
let rollB = document.querySelector(".rollB");
let holdB = document.querySelector(".holdB");
let hidden = document.querySelectorAll(".hidden");

newGameB.addEventListener("click", () => {
  newGameB.innerHTML = "Restart";
  hidden[0].style.visibility = "visible";
  hidden[1].style.visibility = "visible";
  hidden[2].style.visibility = "visible";
});

let scoreP1 = document.querySelector(".scoreP1");
let scoreP2 = document.querySelector(".scoreP2");
let CurScoreP1 = document.querySelector(".CurScoreP1");
let CurScoreP2 = document.querySelector(".CurScoreP2");

let score1 = 0;
let score2 = 0;
let curScore1 = 0;
let curScore2 = 0;

rollB.addEventListener("click", () => {
  let number = Math.floor(Math.random() * 6 + 1);
  if (number === 1) {
  }
});
