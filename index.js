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