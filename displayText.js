// function allowing to display legend after clicking on the "poursuivre l'aventure" button 

export default function displayText() {
    const pLegend = document.querySelector("#legend p");
    pLegend.style.height = "initial";
    pLegend.style.webkitTextFillColor = "initial";
    pLegend.style.marginBottom = "25px";
    document.getElementById("legend-deployment").style.display = "none";
}

