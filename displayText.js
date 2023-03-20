// function allowing to display legend after clicking on the "poursuivre l'aventure" button 

export default function displayText() {
    const pLegend = document.querySelector("#legend p");
    // removing blur effect to the partly hidden text 
    pLegend.style.height = "initial";
    pLegend.style.webkitTextFillColor = "initial";
    pLegend.style.marginBottom = "25px";
    // removing the "poursuivre l'aventure" button display 
    document.getElementById("legend-deployment").style.display = "none";
}

