//import of the displayText function to unwrap the legend section test
import displayText from "./displayText.js";

//import hoverButton to use the hovering on the buttons a the top of the pokemon

import { headerFunctions } from "./header_button.js";
import {options} from './chart.js';

import { quizFunctions } from "./quiz.js";

// import modify content function
import { switchPokemon } from "./content_modification.js";

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

//Hover and click on desktop header band

const textButtons = document.querySelectorAll(".text_button");
const svgButtons = document.querySelectorAll(".lr_buttons");
headerFunctions.actionButton(textButtons);
headerFunctions.actionButton(svgButtons);

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

//Chart
let chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

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
    document.getElementById("quiz-error").style.display = "none";
    document.getElementById("quiz-button-next").style.marginBottom = "30px";
  });
}

// Section "quiz" adding addeventListener function to replay button

const replayButton = document.getElementById("quiz-replay-button");
replayButton.addEventListener("click", () => {
  quizFunctions.replay();
});

//sticky-nav hover
const icon = document.getElementsByClassName("sticky-nav-icon");
const circle = document.getElementsByClassName("sticky-nav-circle");
const eeveeIcon = document.getElementById("eevee-icon");
const vaporeonIcon = document.getElementById("vaporeon-icon");
const jolteonIcon = document.getElementById("jolteon-icon");
const flareonIcon = document.getElementById("flareon-icon");

function hoverIcon(stickyIcon) {
  for (let i = 0; i < stickyIcon.length; i++) {
    const nav = stickyIcon[i]
    nav.addEventListener("mouseover", function () {
      icon[i].style.fill = "white";
      eeveeIcon.style.fill = "#C38F5C";
      vaporeonIcon.style.fill = "#54ADFF";
      jolteonIcon.style.fill = "#FFCA42";
      flareonIcon.style.fill = "#FF7D05";
      circle[i].style.opacity = "1";
      icon[i].style.cursor = "pointer"
      circle[i].style.cursor = "pointer"
    });
    nav.addEventListener("mouseout", function () {
      icon[i].style.fill = "black";
      circle[i].style.opacity = "0.6";
    })
  }
}
hoverIcon(icon);
hoverIcon(circle);

// sticky_nav scroll
const stickyNav = document.getElementById("sticky-nav");
let firstScrollPosition = window.pageYOffset
let windowWidth = window.outerWidth
if (windowWidth < 768) {
window.addEventListener('scroll', function () {
  let secondScrollPosition = window.pageYOffset
  if (firstScrollPosition < secondScrollPosition) {
    stickyNav.style.bottom = "-200px"
  } else {
    stickyNav.style.bottom = "0"
  }
  firstScrollPosition = secondScrollPosition;

});
};

//sticky-nav addEventListener

let eeveeNavButton = document.getElementById("evee-nav-button");
eeveeNavButton.addEventListener("click", () => {
  switchPokemon.eeveeContent.replaceContent();
});
let flareonNavButton = document.getElementById("flareon-nav-button");
flareonNavButton.addEventListener("click", () => {
  switchPokemon.flareonContent.replaceContent();
});
let jolteonNavButton = document.getElementById("jolteon-nav-button");
jolteonNavButton.addEventListener("click", () => {
  switchPokemon.jolteonContent.replaceContent();
});
let vaporeonNavButton = document.getElementById("vaporeon-nav-button");
vaporeonNavButton.addEventListener("click", () => {
  switchPokemon.vaporeonContent.replaceContent();
});



