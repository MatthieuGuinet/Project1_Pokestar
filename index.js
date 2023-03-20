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



