import { switchPokemon } from "./content_modification.js";

function hoverButton(myArr) {
  const textButtons = document.querySelectorAll(".text_button");
  const svgButtons = document.querySelectorAll(".lr_buttons");
  for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    element.addEventListener("mouseover", () => {
      textButtons[i].style.cursor = "pointer";
      svgButtons[i].style.fill = "#949494";
      svgButtons[i].style.cursor = "pointer";
    });
    element.addEventListener("mouseout", () => {
      svgButtons[i].style.fill = "white";
    });
  }
}

function clickButtonL(myArray) {
  for (let i = 0; i < myArray.length; i++) {
    const elem = myArray[i];
    elem.addEventListener("click", () => {
      const pokemonToSwitchL = document.querySelector("#pokemon_left").textContent;
      switch (pokemonToSwitchL) {
            case "EVOLI":
              switchPokemon.eeveeContent.replaceContent();
            break;
        
            case "PYROLI":
              switchPokemon.flareonContent.replaceContent();
            break;
        
            case "AQUALI":
              switchPokemon.vaporeonContent.replaceContent();
            break;
        
            case "VOLTALI":
              switchPokemon.jolteonContent.replaceContent();
            break;
            default:
              break;
      }
    })

  }
}
function clickButtonR(myArray) {
  for (let i = 0; i < myArray.length; i++) {
    const elem = myArray[i];
    elem.addEventListener("click", () => {
      const pokemonToSwitchR = document.querySelector("#pokemon_right").textContent;
      switch (pokemonToSwitchR) {
            case "EVOLI":
              switchPokemon.eeveeContent.replaceContent();
            break;
        
            case "PYROLI":
              switchPokemon.flareonContent.replaceContent();
            break;
        
            case "AQUALI":
              switchPokemon.vaporeonContent.replaceContent();
            break;
        
            case "VOLTALI":
              switchPokemon.jolteonContent.replaceContent();
            break;
            default:
              break;
      }
    })

  }
}




export let headerFunctions = {
  hoverButton: hoverButton,
  clickButtonL: clickButtonL,
  clickButtonR: clickButtonR,
};