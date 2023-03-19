//import of the displayText function to unwrap the legend section test
import displayText from "./displayText.js";
import { quizzFunctions } from "./quizz.js";

// Section "legend", button "poursuivre l'aventure"
let legendButton = document.getElementById("legend-deployment");
legendButton.addEventListener("click", () => {
  displayText();
});

// Section "quizz" button "suivant"
let nextButton = document.getElementById("quizz-button-next");
nextButton.addEventListener("click", () => {
  quizzFunctions.nextQuestion();
});

// Section "quizz". toggling an isChosen class for the chosen item

const allAnswers = document.getElementsByClassName("quizz-answer");

for (let i = 0; i < allAnswers.length; i++) {
  allAnswers[i].addEventListener("click", function () {
    if (allAnswers[i].classList.contains("isChosen")) {
      allAnswers[i].classList.toggle("isChosen");
    } else {
      const isChosen = document.getElementsByClassName("isChosen");
      for (let j = isChosen.length - 1; j >= 0; j--) {
        isChosen[j].classList.toggle("isChosen");
      }
      allAnswers[i].classList.toggle("isChosen");
    }
  });
}

// adding addeventListener function to replay button

const replayButton = document.getElementById("quizz-replay-button");
replayButton.addEventListener("click", () => {
  quizzFunctions.replay();
});
