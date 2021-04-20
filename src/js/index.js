//arrays
import { questions } from "./questions";

//other constants

const DOMSelectors = {
  quizBlock: document.getElementById("quiz-block"),
  submitBtn: document.getElementById("submit-btn"),
  answerOne: document.getElementById("choice1"),
  answerTwo: document.getElementById("choice2"),
  answerThree: document.getElementById("choice3"),
  answerFour: document.getElementById("choice4"),
  questionBlock: document.getElementById("question-text"),
  resultsBlock: document.getElementById("res-block"),
};

const resultsSelectors = {
  klee: document.getElementById("results-1"),
  huTao: document.getElementById("results-2"),
  albedo: document.getElementById("results-3"),
  zhongli: document.getElementById("results-4"),
};

var currentQuestionIndex;
var score = 0;

//ingame functions
var score = 0;

function addValueChoice1() {
  //adding the value of things in

  if (currentQuestionIndex <= 9 && currentQuestionIndex < 0) {
    score = score + questions[currentQuestionIndex - 1].choices[0].value;
  } else {
    score = score + questions[currentQuestionIndex].choices[0].value;
  }

  if (currentQuestionIndex < 9) {
    currentQuestionIndex = currentQuestionIndex + 1;
  }

  if (currentQuestionIndex <= 9) {
    nextQuestion();
  }
}

function addValueChoice2() {
  //adding the value of things in

  if (currentQuestionIndex <= 9 && currentQuestionIndex < 0) {
    score = score + questions[currentQuestionIndex - 1].choices[1].value;
  } else {
    score = score + questions[currentQuestionIndex].choices[1].value;
  }

  if (currentQuestionIndex < 9) {
    currentQuestionIndex = currentQuestionIndex + 1;
  }

  if (currentQuestionIndex <= 9) {
    nextQuestion();
  }
}

function addValueChoice3() {
  //adding the value of things in

  if (currentQuestionIndex <= 9 && currentQuestionIndex < 0) {
    score = score + questions[currentQuestionIndex - 1].choices[2].value;
  } else {
    score = score + questions[currentQuestionIndex].choices[2].value;
  }

  if (currentQuestionIndex < 9) {
    currentQuestionIndex = currentQuestionIndex + 1;
  }

  if (currentQuestionIndex <= 9) {
    nextQuestion();
  }
}

function addValueChoice4() {
  //adding the value of things in

  if (currentQuestionIndex <= 9 && currentQuestionIndex < 0) {
    score = score + questions[currentQuestionIndex - 1].choices[3].value;
  } else {
    score = score + questions[currentQuestionIndex].choices[3].value;
  }
  console.log(questions[currentQuestionIndex].choices[3]);

  if (currentQuestionIndex < 9) {
    currentQuestionIndex = currentQuestionIndex + 1;
  }

  if (currentQuestionIndex <= 9) {
    nextQuestion();
  }
}

function calculateScore() {
  if (score < 4) {
    resultsSelectors.klee.classList.remove("hide");
  }

  if (score > 3 && score < 7) {
    resultsSelectors.huTao.classList.remove("hide");
  }

  if (score > 6 && score < 10) {
    resultsSelectors.albedo.classList.remove("hide");
  }

  if (score > 9) {
    resultsSelectors.zhongli.classList.remove("hide");
  }

  DOMSelectors.resultsBlock.classList.remove("hide");
  DOMSelectors.quizBlock.classList.add("hide");
  console.log(score);
}

/* List of things to do: ok
1. listen for page load ok
2. display question + answers
3. listen to user submission ok
4. if answer is true, update score ok
5. if question number < questions.length display next question ok
5a. else display results */

function startGame() {
  DOMSelectors.quizBlock.classList.remove("hide");
  DOMSelectors.submitBtn.classList.add("hide");
  currentQuestionIndex = 0;
  nextQuestion();
}

function nextQuestion() {
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  //q text changing
  DOMSelectors.questionBlock.innerText =
    questions[currentQuestionIndex].questionContent;

  questions[currentQuestionIndex].sort;

  //answer text changing
  DOMSelectors.answerOne.innerText =
    questions[currentQuestionIndex].choices[0].choiceContent;
  DOMSelectors.answerOne.addEventListener("click", addValueChoice1);
  DOMSelectors.answerTwo.innerText =
    questions[currentQuestionIndex].choices[1].choiceContent;
  DOMSelectors.answerTwo.addEventListener("click", addValueChoice2);
  DOMSelectors.answerThree.innerText =
    questions[currentQuestionIndex].choices[2].choiceContent;
  DOMSelectors.answerThree.addEventListener("click", addValueChoice3);
  DOMSelectors.answerFour.innerText =
    questions[currentQuestionIndex].choices[3].choiceContent;
  DOMSelectors.answerFour.addEventListener("click", addValueChoice4);

  if (currentQuestionIndex > 8) {
    DOMSelectors.submitBtn.classList.remove("hide");
  }
  DOMSelectors.submitBtn.addEventListener("click", calculateScore);
  console.log(score);
}

window.addEventListener("load", startGame);
