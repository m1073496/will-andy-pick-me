var userQuestion = document.querySelector(".question-field");
var submitButton = document.querySelector("#submit-button");
var eightBall = document.querySelector(".eight-ball-img");
var answerDisplay = document.querySelector(".answer-box");


submitButton.addEventListener("click", showAnswer);

function showAnswer() {
  eightBall.classList.add("hidden");
  answerDisplay.innerHTML =
    `<section class="q-a-box">
     <h4 class="user-question">""</h4>
     <h3 class="random-answer"></h3>
     </section>`;
};
