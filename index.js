var userQuestion = document.querySelector(".question-field");
var submitButton = document.querySelector("#submit-button");
var eightBall = document.querySelector(".eight-ball-img");


submitButton.addEventListener("click", showAnswer);

function showAnswer() {
  eightBall.classList.add("hidden");
};
