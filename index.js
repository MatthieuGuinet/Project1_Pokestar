

//sticky-nav hover
const icon = document.getElementsByClassName("sticky-nav-icon-desktop");
const circle = document.getElementsByClassName("sticky-nav-circle-desktop");
const eeveeIcon = document.getElementById("eevee-icon-desktop");
const vaporeonIcon = document.getElementById("vaporeon-icon-desktop");
const jolteonIcon = document.getElementById("jolteon-icon-desktop");
const flareonIcon = document.getElementById("flareon-icon-desktop");

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

const stickyNavMobile = document.getElementById("sticky-nav-mobile");
const stickyNavDesktop = document.getElementById("sticky-nav-desktop");

function scrollStickyNavMobile() {
  let firstScrollPosition = window.pageYOffset
  window.addEventListener('scroll', function () {
    let secondScrollPosition = window.pageYOffset
    if (firstScrollPosition < secondScrollPosition) {
      stickyNavMobile.classList.add("down")
      // stickyNavMobile.style.bottom = "-50px"
    } else {
      stickyNavMobile.classList.remove("down")
      // stickyNavMobile.style.bottom = "0"
    }
    firstScrollPosition = secondScrollPosition;
  });
}

let mobile = window.matchMedia("(max-width: 768px)");
let desktop = window.matchMedia("(min-width: 769px)");

if (desktop.matches) {
  hoverIcon(icon);
  hoverIcon(circle);
} else {
  scrollStickyNavMobile()
}

//sticky-nav addEventListener

let eeveeNavButton = document.getElementById("eevee-nav-button");
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

//some styling features to get backlines in document's specific places

document.getElementById("caracteristics-text").setAttribute('style', 'white-space: pre-line;');
document.getElementById("legend-text").setAttribute('style', 'white-space: pre-line;');
document.getElementById("localisation-text").setAttribute('style', 'white-space: pre-line;');
document.getElementById("little-description-text").setAttribute('style', 'white-space: pre-line;');