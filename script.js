let img = document.querySelector(".dice1");
let newGameB = document.querySelector(".newGameB");
let restartB = document.querySelector(".restartB");
let rollB = document.querySelector(".rollB");
let holdB = document.querySelector(".holdB");
let pToRoll = document.querySelector(".pToRoll");

let p1Text = document.querySelector(".p1-text");
let p2Text = document.querySelector(".p2-text");

let scoreP1 = document.querySelector(".scoreP1");
let scoreP2 = document.querySelector(".scoreP2");
let CurScoreP1 = document.querySelector(".CurScoreP1");
let CurScoreP2 = document.querySelector(".CurScoreP2");

let score1 = 0;
let score2 = 0;
let curScore1 = 0;
let curScore2 = 0;
let hold1 = false;
let hold2 = false;

let playerTurn = true;

newGameB.addEventListener("click", () => {
  // Reset current scores to begin a new game
  curScore1 = 0;
  curScore2 = 0;
  CurScoreP1.textContent = 0;
  CurScoreP2.textContent = 0;
  // Reset hold variables
  hold1 = false;
  hold2 = false;
  // Disable the new game button + add restart button
  newGameB.classList.add("display-hide");
  // Roll and holb buttons to show
  rollB.classList.remove("hidden");
  holdB.classList.remove("hidden");
  pToRoll.classList.remove("hidden");
  // Reset colors to black
  pToRoll.style.color = "black";
  // Reset original names
  p1Text.textContent = "Player 1";
  p2Text.textContent = "Player 2";

  if (playerTurn) {
    pToRoll.textContent = "Player 1 to roll";
  } else {
    pToRoll.textContent = "Player 2 to roll";
  }
});

// Roll dice event listener

rollB.addEventListener("click", () => {
  let number = Math.floor(Math.random() * 6 + 1);
  img.src = `imgs/dice${number}.png`;

  // Game logic PLAYER 1
  if (playerTurn) {
    // Check to see if the player 1 score is less than 20, if true continue adding score.
    if (curScore1 <= 20) {
      curScore1 += number;
      CurScoreP1.textContent = curScore1;

      // Check to see if the player 1 current score is above 20, if true they lose.
      if (curScore1 > 20) {
        pToRoll.textContent = "PLAYER 1 YOU LOSE!";
        pToRoll.style.color = "red";

        score2++;
        scoreP2.textContent = score2;

        rollB.classList.add("hidden");
        holdB.classList.add("hidden");
        newGameB.classList.remove("display-hide");
      }
    }
  }

  // Game logic PLAYER 2
  if (!playerTurn) {
    // Check to see if the player 2 score is less than 20, if true continue adding score.
    if (curScore2 <= 20) {
      curScore2 += number;
      CurScoreP2.textContent = curScore2;

      // Check to see if the player 2 current score is above 20, if true they lose.
      if (curScore2 > 20) {
        pToRoll.textContent = "PLAYER 2 YOU LOSE!";
        pToRoll.style.color = "red";

        score1++;
        scoreP1.textContent = score1;

        rollB.classList.add("hidden");
        holdB.classList.add("hidden");
        newGameB.classList.remove("display-hide");
      }
    }
  }

  // Check if either player rolls a 1 and if true, they lose.

  if (number === 1 && playerTurn) {
    pToRoll.textContent = "PLAYER 1 HIT 1 & LOSE!";
    pToRoll.style.color = "red";

    score2++;
    scoreP2.textContent = score2;

    rollB.classList.add("hidden");
    holdB.classList.add("hidden");
    newGameB.classList.remove("display-hide");
  } else if (number === 1 && !playerTurn) {
    pToRoll.textContent = "PLAYER 2 HIT 1 & LOSE!";
    pToRoll.style.color = "red";

    score1++;
    scoreP1.textContent = score1;

    rollB.classList.add("hidden");
    holdB.classList.add("hidden");
    newGameB.classList.remove("display-hide");
  }

  // Check if either player is holding and the opponent gets a higher current score.

  if (hold1 && curScore2 > curScore1 && number != 1) {
    pToRoll.style.color = "limegreen";
    pToRoll.textContent = "PLAYER 2 YOU WIN!";

    score2++;
    score2.textContent = score2;

    rollB.classList.add("hidden");
    holdB.classList.add("hidden");
    newGameB.classList.remove("display-hide");
  } else if (hold2 && curScore1 > curScore2 && number != 1) {
    pToRoll.style.color = "limegreen";
    pToRoll.textContent = "PLAYER 1 YOU WIN!";

    score1++;
    score1.textContent = score1;

    rollB.classList.add("hidden");
    holdB.classList.add("hidden");
    newGameB.classList.remove("display-hide");
  }

  // Check to see if both players have the same current score and call a draw.

  if (curScore1 === curScore2) {
    pToRoll.style.color = "blue";
    pToRoll.textContent = "IT'S A DRAW!";

    rollB.classList.add("hidden");
    holdB.classList.add("hidden");
    newGameB.classList.remove("display-hide");
  }

  // Check to see if either player has got to 5 total score.

  if (score1 === 5) {
    pToRoll.style.color = "pink";
    pToRoll.textContent = "PLAYER 1 WINS THE GAME!";

    rollB.classList.add("hidden");
    holdB.classList.add("hidden");
    newGameB.classList.remove("display-hide");

    // Reset the scores
    score1 = 0;
    scoreP1.textContent = 0;
    score2 = 0;
    scoreP2.textContent = 0;
  } else if (score2 === 5) {
    pToRoll.style.color = "pink";
    pToRoll.textContent = "PLAYER 2 WINS THE GAME!";

    rollB.classList.add("hidden");
    holdB.classList.add("hidden");
    newGameB.classList.remove("display-hide");

    // Reset the scores
    score1 = 0;
    scoreP1.textContent = 0;
    score2 = 0;
    scoreP2.textContent = 0;
  }
});

holdB.addEventListener("click", () => {
  if (playerTurn) {
    playerTurn = false;
    hold1 = true;
    p1Text.textContent = "HOLDING";
  } else {
    playerTurn = true;
    hold2 = true;
    p2Text.textContent = "HOLDING";
  }
});

// restartB.addEventListener("click", () => {
//     // Reset current score
//     curScore1 = 0;
//     curScore2 = 0;
//     // Reset hold variables
//     hold1 = false;
//     hold2 = false;
//     // Enable the new game button
//     newGameB.classList.remove("display-hide");
//     restartB.classList.add("display-hide");

//     // Reset all text
//     CurScoreP1.textContent = 0;
//     CurScoreP2.textContent = 0;
//     pToRoll.style.color = "black";
//     pToRoll.textContent = "Player 1 to roll";

//     // Reset the player names
//     p1Text.textContent = "Player 1";
//     p2Text.textContent = "Player 2";

//     // Reset game buttons
//     rollB.classList.remove("hidden");
//     holdB.classList.remove("hidden");
//   });
