import { switchPokemon } from "./content_modification.js";

function actionButton(myArr) {
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
    element.addEventListener("click", () => {
      switch (textButtons[i].textContent) {
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
      };
    })
  }
}

export let headerFunctions = {
  actionButton: actionButton,
};

