//arrays
import { questions } from "./questions";

//other constants

const DOMSelectors = {
  quizBlock: document.getElementById("quiz-block"),
  nextBtn: document.getElementById("submit-btn"),
  answerOne: document.getElementById("choice1"),
  answerTwo: document.getElementById("choice2"),
  answerThree: document.getElementById("choice3"),
  answerFour: document.getElementById("choice4"),
  questionBlock: document.getElementById("question-text"),
};

var currentQuestionIndex;

//real deal

/* List of things to do: 
1. listen for page load
2. display question + answers
3. listen to user submission
4. if answer is true, update score
5. if question number < questions.length display next question
5a. else display results */

function startGame() {
  //console.log("started");
  DOMSelectors.quizBlock.classList.remove("hide");
  currentQuestionIndex = 0;
  nextQuestion();
}

function nextQuestion() {
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  DOMSelectors.questionBlock.innerText = questions.questionContent;
}

window.addEventListener("load", startGame);

const questionText = questions;
console.log(questionText);
