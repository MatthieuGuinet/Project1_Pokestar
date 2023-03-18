//import of the displayText function to unwrap the legend section test
import displayText from './displayText.js'
import nextQuestion from './quizz.js';

// Section "legend", button "poursuivre l'aventure"
let legendButton = document.getElementById("legend-deployment");
legendButton.addEventListener("click",()=>{displayText()}) ;


// Section "quizz", button "suivant"
let nextButton = document.getElementById("quizz-button-next");
nextButton.addEventListener("click",()=>{nextQuestion()}) ; 