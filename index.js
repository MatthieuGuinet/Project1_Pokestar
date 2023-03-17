//import of the displayText function to unwrap the legend section test
import displayText from './displayText.js'

// Section "legend", button "poursuivre l'aventure"
let legendButton = document.getElementById("legend-deployment");
legendButton.addEventListener("click",()=>{displayText()}) ;
