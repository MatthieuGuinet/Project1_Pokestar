//import of the displayText function to unwrap the legend section test
import displayText from "./displayText.js";
import { quizzFunctions } from "./quizz.js";

// ouverture et fermeture du menu burger + animation de l'icone
const burgerIcon = document.getElementById("burger_icon");
const burgerMenu = document.getElementById("nav_links");
const burger = document.getElementById("burger")

function closeNav() {
    burgerMenu.classList.toggle("burger_open");
    burger.classList.toggle("animationOpen");
}

burgerIcon.addEventListener('click', function () {
    closeNav()
})
// fermeture du menu burger après click sur un lien
const navElement = document.getElementsByClassName("nav");

for (let i = 0; i < navElement.length; i++) {
    const link = navElement[i];
    link.addEventListener("click", () => {
        closeNav()
    })
}


// import hoverButton from './header_button.js'

// const textButtons = document.querySelectorAll(".text_button");
// const svgButtons = document.querySelectorAll(".lr_buttons");

// hoverButton(textButtons);
// hoverButton(svgButtons);

const buttonPokemon = document.querySelectorAll(".button_pokemon");
const textButtons = document.querySelectorAll(".text_button");
const svgButtons = document.querySelectorAll(".lr_buttons");

// // textButtons.map((button, index) => {
// //     return button.addEventListener("mouseover", () => {
// //     console.log("ça marche !");
// //     // svgButtons[index].style.fill = "blue";
// //     // svgButtons[index].style.cursor = "pointer";
// //     // button[index].style.fill = "blue";
// //     // button[index].style.cursor = "pointer";
// // })});

for (let i = 0; i < textButtons.length; i++) {
    const element = textButtons[i];
    element.addEventListener("mouseover", () => {
        textButtons[i].style.cursor = "pointer";
        svgButtons[i].style.fill = "blue";
        svgButtons[i].style.cursor = "pointer";
    });
    element.addEventListener("mouseout", () => {
        svgButtons[i].style.fill="white";
    })
}

for (let i = 0; i < svgButtons.length; i++) {
    const element = svgButtons[i];
    element.addEventListener("mouseover", () => {
        textButtons[i].style.cursor = "pointer";
        svgButtons[i].style.fill = "blue";
        svgButtons[i].style.cursor = "pointer";
    });
    element.addEventListener("mouseout", () => {
        svgButtons[i].style.fill="white";
    })
}

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
