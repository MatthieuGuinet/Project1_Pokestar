//import of the displayText function to unwrap the legend section test
import displayText from "./displayText.js";
import { quizFunctions } from "./quiz.js";

// ouverture et fermeture du menu burger + animation de l'icone
const burgerIcon = document.getElementById("burger_icon");
const burgerMenu = document.getElementById("nav_links");
const burger = document.getElementById("burger");

function closeNav() {
  burgerMenu.classList.toggle("burger_open");
  burger.classList.toggle("animationOpen");
}

burgerIcon.addEventListener("click", function () {
  closeNav();
});
// fermeture du menu burger après click sur un lien
const navElement = document.getElementsByClassName("nav");

for (let i = 0; i < navElement.length; i++) {
  const link = navElement[i];
  link.addEventListener("click", () => {
    closeNav();
  });
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
    svgButtons[i].style.fill = "white";
  });
}

for (let i = 0; i < svgButtons.length; i++) {
  const element = svgButtons[i];
  element.addEventListener("mouseover", () => {
    textButtons[i].style.cursor = "pointer";
    svgButtons[i].style.fill = "blue";
    svgButtons[i].style.cursor = "pointer";
  });
  element.addEventListener("mouseout", () => {
    svgButtons[i].style.fill = "white";
  });
}

// Section "legend", button "poursuivre l'aventure"
let legendButton = document.getElementById("legend-deployment");
legendButton.addEventListener("click", () => {
  displayText();
});

// déclaration des variables contenant les coordonnées de départ. On utilise "let" car les coordonnées vont être amenées à changer
let startX = 0;
let startY = 0;
let scrollTop = 0;
let scrollLeft = 0;

// déclaration des variables contenant la carte et son conteneur
const scrollableMap = document.getElementById("scrollable_map");
const wrapper = document.getElementById("map_wrapper");

// fonction contenant l'ensemble des fonctions et instructions permettant le scroll
function scrollTheMap() {
  // méthode 'onmousedown' crée une interaction lorsque le clic gauche est maintenu;

  // le paramètre event est un objet "natif" de JS contenant diverses données : par exemple "event.clientX" donne la coordonnée sur l'axe X du pointeur de la souris
  scrollableMap.onmousedown = function mouseDown(event) {
    startX = event.clientX;
    startY = event.clientY;
    scrollTop = wrapper.scrollTop;
    scrollLeft = wrapper.scrollLeft;
  };
  // méthode 'onmousemove' crée une interaction lorsque l'on bouge le curseur avec le clic gauche enfoncé

  // on donne les instructions afin que le scroll suive le curseur
  scrollableMap.onmousemove = function mouseMove(event) {
    wrapper.scrollTo({
      left: scrollLeft + (startX - event.clientX),
      top: scrollTop + (startY - event.clientY),
    });
  };

  // méthode 'onmouseup' crée une interaction lorsque l'on relâche le clic gauche

  // on veut que le scroll s'arrête
  scrollableMap.onmouseup = function mouseUp() {
    scrollableMap.onmousemove = null;
  };
}

// création d'un 'addeventlistener' appelant la fonction principale lorsque le clic gauche est enfoncé
scrollableMap.addEventListener("mousedown", scrollTheMap);

// Section "quiz" button "suivant"
let nextButton = document.getElementById("quiz-button-next");
nextButton.addEventListener("click", () => {
  quizFunctions.nextQuestion();
});

// Section "quiz". adding an isChosen class to the chosen item, removing all others

const allAnswers = document.getElementsByClassName("quiz-answer");

for (let i = 0; i < allAnswers.length; i++) {
  allAnswers[i].addEventListener("click", function () {
    // deleting all "isChosen" classes among the answers
    for (let j = 0; j < allAnswers.length; j++) {
      allAnswers[j].classList.remove("isChosen");
    }
    // adding "isChosen" to the allAnswers[i] clicked
    allAnswers[i].classList.add("isChosen");
  });
}

// Section "quiz" adding addeventListener function to replay button

const replayButton = document.getElementById("quiz-replay-button");
replayButton.addEventListener("click", () => {
  quizFunctions.replay();
});
