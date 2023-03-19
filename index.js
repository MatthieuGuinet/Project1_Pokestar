// ouverture et fermeture du menu burger + animation de l'icone
const burgerIcon = document.getElementById("burger_icon");
const burgerMenu = document.getElementById("nav_links");
const burger = document.getElementById("burger")
const navBurger = document.getElementsByClassName("navBurger")

burgerIcon.addEventListener('click', function () {
    burgerMenu.classList.toggle("burger_open");
    burger.classList.toggle("animationOpen");
})

// disparition du menu burger au click sur les liens
const navLegend = document.getElementById("nav_legend");
const navLocalisation = document.getElementById("nav_localisation");
const navCaracteristics = document.getElementById("nav_caracteristics");
const navQuizz = document.getElementById("nav_quizz");
navLegend.addEventListener('click', function () {
    burgerMenu.classList.remove("burger_open");
    burger.classList.remove("animationOpen");
})
navLocalisation.addEventListener('click', function () {
    burgerMenu.classList.remove("burger_open");
    burger.classList.remove("animationOpen");
})
navCaracteristics.addEventListener('click', function () {
    burgerMenu.classList.remove("burger_open");
    burger.classList.remove("animationOpen");
})
navQuizz.addEventListener('click', function () {
    burgerMenu.classList.remove("burger_open");
    burger.classList.remove("animationOpen");
})