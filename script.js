// select the Element
// input
const numberEl = document.getElementById("number");
const btnGuessEl = document.getElementById("btn_guess");
const btnPlayEl = document.getElementById("btn_play");

// output
const scoreEl = document.getElementById("score");
const highscoreEl = document.getElementById("highscore");
const msgEl = document.getElementById("msg");

// global score
let score = 10;

// solution
const getRandomNumber = function () {
  return Math.trunc(Math.random() * 100 + 1);
};
const randomNumber = getRandomNumber();

// Button check event
btnGuessEl.addEventListener("click", function () {
  const userInput = Number(numberEl.value);
  if (score > 0) {
    if (userInput > 0 && userInput <= 100) {
      if (userInput === randomNumber) {
        document.body.style.backgroundColor = "rgb(19, 131, 19)";
        msgEl.innerText = "YOU ARE CORRECT 🥳🥂";
        highscoreEl.innerText = score;
        // numberEl(userInput);
      } else if (userInput > randomNumber) {
        msgEl.innerText = "YOU GUESS VERY HIGH 😵‍💫";
        score = score - 1;
        scoreEl.innerText = score;
      } else if (userInput < randomNumber) {
        msgEl.innerText = "YOU GUESS VERY LOW 😤";
        score = score - 1;
        scoreEl.innerText = score;
      }
    } else {
      console.log("enter a valid number");
    }
  } else {
    document.body.style.backgroundColor = "rgb(216, 35, 14)";
    msgEl.innerText = "GAME OVER 💣";
    scoreEl.innerText = score;
  }
});

//again btn event
btnPlayEl.addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
  msgEl.innerText = "Start Guessing.................";
  score = 10;
  scoreEl.innerText = score;
  numberEl.value = " ";
});
