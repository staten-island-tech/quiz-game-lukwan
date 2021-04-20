function addValueChoice1() {
  //adding the value of things in

  if (currentQuestionIndex <= 9 && currentQuestionIndex < 0) {
    score = score + questions[currentQuestionIndex - 1].choices[0].value;
  } else {
    score = score + questions[currentQuestionIndex].choices[0].value;
  }

  if (currentQuestionIndex <= 9 && currentQuestionIndex < 0) {
    nextQuestion();
  }
}

function addValueChoice2() {
  //adding the value of things in

  if (currentQuestionIndex <= 9 && currentQuestionIndex < 0) {
    score = score + questions[currentQuestionIndex - 1].choices[0].value;
  } else {
    score = score + questions[currentQuestionIndex].choices[0].value;
  }

  if (currentQuestionIndex <= 9) {
    nextQuestion();
  }
}

function addValueChoice3() {
  //adding the value of things in

  if (currentQuestionIndex <= 9 && currentQuestionIndex < 0) {
    score = score + questions[currentQuestionIndex - 1].choices[0].value;
  } else {
    score = score + questions[currentQuestionIndex].choices[0].value;
  }

  if (currentQuestionIndex <= 9) {
    nextQuestion();
  }
}

function addValueChoice4() {
  //adding the value of things in

  if (currentQuestionIndex <= 9 && currentQuestionIndex < 0) {
    score = score + questions[currentQuestionIndex - 1].choices[0].value;
  } else {
    score = score + questions[currentQuestionIndex].choices[0].value;
  }

  if (currentQuestionIndex <= 9) {
    nextQuestion();
  }
}
