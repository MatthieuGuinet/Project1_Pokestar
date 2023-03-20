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

// Section "quizz". adding an isChosen class to the chosen item, removing all others

const allAnswers = document.getElementsByClassName("quizz-answer");

for (let i=0 ; i<allAnswers.length;i++){
  allAnswers[i].addEventListener("click", function () {
    // deleting all "isChosen" classes among the answers 
    for (let j=0; j<allAnswers.length;j++){
    allAnswers[j].classList.remove("isChosen");
  }
    // adding "isChosen" to the allAnswers[i] clicked
    allAnswers[i].classList.add("isChosen");
  })
}

// Section "quizz" adding addeventListener function to replay button

const replayButton = document.getElementById("quizz-replay-button");
replayButton.addEventListener("click", () => {
  quizzFunctions.replay();
});
