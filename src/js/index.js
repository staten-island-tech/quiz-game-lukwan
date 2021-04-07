//arrays

[
  {
    questionContent: "The following are all Mondstadt characters except",
    choices: [
      { choice: "Venti", correct: false, value: 0 },
      { choice: "Fischl", correct: false, value: 0 },
      { choice: "Diluc", correct: false, value: 0 },
      { choice: "Cyno", correct: true, value: 1 },
    ],
  },
  {
    questionContent: "What is the Vigilant Yaksha's true name?",
    choices: [
      { choice: "Xiao", correct: false, value: 0 },
      { choice: "Alatus", correct: true, value: 1 },
      { choice: "Pervases", correct: false, value: 0 },
      { choice: "Bosacius", correct: false, value: 0 },
    ],
  },
  {
    questionContent: "Diluc, owner of the Dawn Winery, prefers to drink",
    choices: [
      { choice: "Dandelion Wine", correct: false, value: 0 },
      { choice: "Grape Juice", correct: true, value: 1 },
      { choice: "Apple Juice", correct: false, value: 0 },
      { choice: "Hot Sauce", correct: false, value: 0 },
    ],
  },
  {
    questionContent: "Which of the following is NOT one of the four winds?",
    choices: [
      { choice: "Boreas", correct: false, value: 0 },
      { choice: "Jean", correct: false, value: 0 },
      { choice: "Dvalin", correct: false, value: 0 },
      { choice: "Barbatos", correct: true, value: 1 },
    ],
  },
  {
    questionContent:
      "During the Archon war, which god was slain by their own people?",
    choices: [
      { choice: "Havria", correct: true, value: 1 },
      { choice: "Guizhong", correct: false, value: 0 },
      { choice: "Morax", correct: false, value: 0 },
      { choice: "Osial", correct: false, value: 0 },
    ],
  },
  {
    questionContent: "What caused the fall of Sal Vindagnyr?",
    choices: [
      { choice: "Peak of Vindagnyr", correct: false, value: 0 },
      { choice: "Durin", correct: false, value: 0 },
      { choice: "Skyfrost Nail", correct: true, value: 1 },
      { choice: "The Catastrophe", correct: false, value: 0 },
    ],
  },
  {
    questionContent:
      "When deciphered, in what language is the lost language written?",
    choices: [
      { choice: "English", correct: false, value: 0 },
      { choice: "Greek", correct: false, value: 0 },
      { choice: "Latin", correct: true, value: 1 },
      { choice: "Italian", correct: false, value: 0 },
    ],
  },
  {
    questionContent: "What secret is Celestia hiding from humanity?",
    choices: [
      { choice: "Artifact luck is rigged", correct: false, value: 0 },
      { choice: "The world loops infinitely", correct: true, value: 1 },
      { choice: "They are sacrifices to the Honkai", correct: false, value: 0 },
      { choice: "Off-pity is a lie", correct: false, value: 0 },
    ],
  },
  {
    questionContent: "What is the name of the Unknown God?",
    choices: [
      { choice: "Asmoday", correct: true, value: 1 },
      { choice: "Sirin", correct: false, value: 0 },
      { choice: "Morax", correct: false, value: 0 },
      { choice: "Kiana", correct: false, value: 0 },
    ],
  },
  {
    questionContent: "What are the stars?",
    choices: [
      { choice: "a lie.", correct: true, value: 1 },
      { choice: "a lie.", correct: true, value: 1 },
      { choice: "a lie.", correct: true, value: 1 },
      { choice: "a lie.", correct: true, value: 1 }, //no mistakes here, this alludes to a quest in the game \(^-^)/
    ],
  },
];

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
