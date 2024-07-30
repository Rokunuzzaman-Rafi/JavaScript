const questionEl = document.getElementById("question");
const scoreEl = document.querySelector(".score");
const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const formEL = document.querySelector(".form");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreEl.innerText = `Score: ${score}`;

const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

questionEl.innerText = `What is ${num1} multiply by ${num2}`;

const answer = num1 * num2;

formEL.addEventListener("submit", () => {
  const userAns = +inputEl.value;
  if (userAns === answer) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

// btnEl.addEventListener("click", result);
// function result() {
//   const num1 = Math.ceil(Math.random() * 10);
//   const num2 = Math.ceil(Math.random() * 10);

//   const answer = num1 * num2;

//   const score = 0;

//   if (answer === inputValue) {
//     score++;
//   } else {
//     score--;
//   }

//   questionEl.innerText = `What is ${num1} multiply by ${num2}`;

//   scoreEl.innerText = score;
// }
