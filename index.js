var userQuestion = document.querySelector(".question-field");
var submitButton = document.querySelector("#submit-button");
var eightBall = document.querySelector(".eight-ball-img");
var display = document.querySelector(".answer-box");


submitButton.addEventListener("click", showAnswer);

function getRandomAnswer(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

function showAnswer() {
  eightBall.classList.add("hidden");
  display.innerHTML =
    `<section>
     <h4 class="user-question"></h4>
     <h3 class="random-answer"></h3>
     </section>`;
  var questionDisplay = document.querySelector(".user-question");
  var answerDisplay = document.querySelector(".random-answer");
  questionDisplay.innerText = `"${userQuestion.value}"`;

  var randomAnswer = getRandomAnswer(answers);
  answerDisplay.innerText = `${randomAnswer}`;
  userQuestion.value = "";
};
