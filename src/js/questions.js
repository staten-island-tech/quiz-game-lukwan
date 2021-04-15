/* const questions = [
    { question: "The following are all Mondstadt characters except", answers: [
        { text:'Venti', correct:false}
        { text:'Mona', correct:false}
        { text:'Fischl', correct:false}
        { text:'Cyno', correct:true}
    ]}
]

[
  { question: "The following are all Mondstadt characters except", answer: 4 },
  { question: "What is the Vigilant Yaksha's true name?", answer: 2 },
  { question: "Diluc, owner of the Dawn Winery, prefers to drink", answer: 2 },
  {
    question: "Which of the following is NOT one of the four winds?",
    answer: 4,
  },
  {
    question: "During the Archon war, which god was slain by their own people?",
    answer: 1,
  },
  { question: "What caused the fall of Sal Vindagnyr?", answer: 3 },
  {
    question: "When deciphered, in what language is the lost language written?",
    answer: 3,
  },
  { question: "What secret is Celestia hiding from humanity?", answer: 2 },
  { question: "What is the name of the Unknown God?", answer: 1 },
  { question: "What are the stars?", answer: 1 },
]; */
/* except", answer: 4 },
    { question: "What is the Vigilant Yaksha's true name?", answer: 2 },
    { question: "Diluc, owner of the Dawn Winery, prefers to drink", answer: 2 },
    {
      question: "Which of the following is NOT one of the four winds?",
      answer: 4,
    },
    {
      question: "During the Archon war, which god was slain by their own people?",
      answer: 1,
    },
    { question: "What caused the fall of Sal Vindagnyr?", answer: 3 },
    {
      question: "When deciphered, in what language is the lost language written?",
      answer: 3,
    },
    { question: "What secret is Celestia hiding from humanity?", answer: 2 },
    { question: "What is the name of the Unknown God?", answer: 1 },
    { question: "What are the stars?", answer: 1 },
  ]; */
const questions = [
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
export { questions };
