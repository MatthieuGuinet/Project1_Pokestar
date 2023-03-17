const text_pokemon_buttons = document.querySelectorAll(".text_pokemon_buttons");
const pokemon_buttons = document.querySelectorAll(".lr_button");

text_pokemon_buttons.addEventListener('mouseover', function () {
    pokemon_buttons.style.background = "blue";
});