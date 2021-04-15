//arrays
import { questions } from "./questions";
console.log(questions);

//other constants

const DOMSelectors = {
  quizBlock: document.getElementById("quiz-block"),
  start: document.getElementById("submit-btn"),
  answerOne: document.getElementById("choice1"),
  answerTwo: document.getElementById("choice2"),
  answerThree: document.getElementById("choice3"),
  answerFour: document.getElementById("choice4"),
  questions: document.getElementById("question-text"),
};

//testing

function nextQuestion() {
  console.log("Next owowowowo");
}
function responseOne() {
  console.log("pressed 1");
}
function responseTwo() {
  console.log("pressed 2");
}
function responseThree() {
  console.log("pressed 3");
}
function responseFour() {
  console.log("pressed 4");
}
function load() {
  display: flex;
}

DOMSelectors.quizBlock.addEventListener("page load", load);
DOMSelectors.start.addEventListener("click", nextQuestion);
DOMSelectors.answerOne.addEventListener("click", responseOne);
DOMSelectors.answerTwo.addEventListener("click", responseTwo);
DOMSelectors.answerThree.addEventListener("click", responseThree);
DOMSelectors.answerFour.addEventListener("click", responseFour);

console.log("hi");
//real deal

/* List of things to do: 
1. listen for page load
2. display question + answers
3. listen to user submission
4. if answer is true, update score
5. if question number < questions.length display next question
5a. else display results */

//1+2:

window.addEventListener("load", (e) => {
  console.log("started");
  DOMSelectors.quizBlock.classList.remove("hide");
});

//WOOOOOOOOOOO YATTAAAAAAAAA WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO WOOOOOOOOOOOOOOOOOOOOOOO
