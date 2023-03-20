// déclaration des variables contenant les coordonnées de départ. On utilise "let" car les coordonnées vont être amenées à changer 
let startX = 0;
let startY = 0;
let scrollTop = 0;
let scrollLeft = 0;

// déclaration des variables contenant la carte et son conteneur
const scrollableMap = document.getElementById("scrollable_map");
const wrapper = document.getElementById("map_wrapper");

// fonction contenant l'ensemble des fonctions et instructions permettant le scroll
function scrollTheMap(){

// méthode 'onmousedown' crée une interaction lorsque le clic gauche est maintenu;

// le paramètre event est un objet "natif" de JS contenant diverses données : par exemple "event.clientX" donne la coordonnée sur l'axe X du pointeur de la souris
scrollableMap.onmousedown = function mouseDown(event){
    startX = event.clientX;
    startY = event.clientY;
    scrollTop = wrapper.scrollTop;
    scrollLeft = wrapper.scrollLeft;
}
// méthode 'onmousemove' crée une interaction lorsque l'on bouge le curseur avec le clic gauche enfoncé

// on donne les instructions afin que le scroll suive le curseur
scrollableMap.onmousemove = function mouseMove(event){
    wrapper.scrollTo({
        left: scrollLeft + (startX - event.clientX),
        top: scrollTop + (startY - event.clientY)
    })
}

// méthode 'onmouseup' crée une interaction lorsque l'on relâche le clic gauche

// on veut que le scroll s'arrête
scrollableMap.onmouseup = function mouseUp() {
    scrollableMap.onmousemove = null
}
}

// création d'un 'addeventlistener' appelant la fonction principale lorsque le clic gauche est enfoncé
scrollableMap.addEventListener("mousedown",scrollTheMap)

