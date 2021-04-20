const questions = [
  {
    questionContent: "The following are all Mondstadt characters except",
    choices: [
      { choiceContent: "Venti", correct: false, value: 0 },
      { choiceContent: "Fischl", correct: false, value: 0 },
      { choiceContent: "Diluc", correct: false, value: 0 },
      { choiceContent: "Cyno", correct: true, value: 1 },
    ],
  },
  {
    questionContent: "What is the Vigilant Yaksha's true name?",
    choices: [
      { choiceContent: "Xiao", correct: false, value: 0 },
      { choiceContent: "Alatus", correct: true, value: 1 },
      { choiceContent: "Pervases", correct: false, value: 0 },
      { choiceContent: "Bosacius", correct: false, value: 0 },
    ],
  },
  {
    questionContent: "Diluc, owner of the Dawn Winery, prefers to drink",
    choices: [
      { choiceContent: "Dandelion Wine", correct: false, value: 0 },
      { choiceContent: "Grape Juice", correct: true, value: 1 },
      { choiceContent: "Apple Juice", correct: false, value: 0 },
      { choiceContent: "Hot Sauce", correct: false, value: 0 },
    ],
  },
  {
    questionContent: "Which of the following is NOT one of the four winds?",
    choices: [
      { choiceContent: "Boreas", correct: false, value: 0 },
      { choiceContent: "Jean", correct: false, value: 0 },
      { choiceContent: "Dvalin", correct: false, value: 0 },
      { choiceContent: "Barbatos", correct: true, value: 1 },
    ],
  },
  {
    questionContent:
      "During the Archon war, which god was slain by their own people?",
    choices: [
      { choiceContent: "Havria", correct: true, value: 1 },
      { choiceContent: "Guizhong", correct: false, value: 0 },
      { choiceContent: "Morax", correct: false, value: 0 },
      { choiceContent: "Osial", correct: false, value: 0 },
    ],
  },
  {
    questionContent: "What caused the fall of Sal Vindagnyr?",
    choices: [
      { choiceContent: "Peak of Vindagnyr", correct: false, value: 0 },
      { choiceContent: "Durin", correct: false, value: 0 },
      { choiceContent: "Skyfrost Nail", correct: true, value: 1 },
      { choiceContent: "The Catastrophe", correct: false, value: 0 },
    ],
  },
  {
    questionContent:
      "When deciphered, in what language is the lost language written?",
    choices: [
      { choiceContent: "English", correct: false, value: 0 },
      { choiceContent: "Greek", correct: false, value: 0 },
      { choiceContent: "Latin", correct: true, value: 1 },
      { choiceContent: "Italian", correct: false, value: 0 },
    ],
  },
  {
    questionContent: "What secret is Celestia hiding from humanity?",
    choices: [
      { choiceContent: "Artifact luck is rigged", correct: false, value: 0 },
      { choiceContent: "The world loops infinitely", correct: true, value: 1 },
      {
        choiceContent: "They are sacrifices to the Honkai",
        correct: false,
        value: 0,
      },
      { choiceContent: "Off-pity is a lie", correct: false, value: 0 },
    ],
  },
  {
    questionContent: "What is the name of the Unknown God?",
    choices: [
      { choiceContent: "Asmoday", correct: true, value: 1 },
      { choiceContent: "Sirin", correct: false, value: 0 },
      { choiceContent: "Morax", correct: false, value: 0 },
      { choiceContent: "Kiana", correct: false, value: 0 },
    ],
  },
  {
    questionContent: "What are the stars?",
    choices: [
      { choiceContent: "a lie.", correct: true, value: 1 },
      { choiceContent: "a lie.", correct: true, value: 1 },
      { choiceContent: "a lie.", correct: true, value: 1 },
      { choiceContent: "a lie.", correct: true, value: 1 }, //no mistakes here, this alludes to a quest in the game \(^-^)/
    ],
  },
];
export { questions };
