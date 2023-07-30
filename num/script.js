// select the Element
// input
const numberEl = document.getElementById("number");
const btnGuessEl = document.getElementById("btn_guess");
const btnPlayEl = document.getElementById("btn_play");

// output
const scoreEl = document.getElementById("score");
const highscoreEl = document.getElementById("highscore");
const msgEl = document.getElementById("msg");

// solution
const getRandomNumber = function () {
  return Math.trunc(Math.random () * 100 + 1)
}

const randomNumber = getRandomNumber();

// Button guess event
// btnGuessEl.addEventListener('click', function () {
//   const userInput = guessInputEl.value;
//   console.log(userInput);
// })





