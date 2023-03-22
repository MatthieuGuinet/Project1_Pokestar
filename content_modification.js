// constructor taking into account every text content, url and colors that we want to change 

class PokemonContent {
    constructor(pokemonNameCapitalCase, mainColorVarName, secondaryColorVarName, headerLeftName, headerRightName, pokemonType, littleDescription, mainImgSrc, legend, locationInstructions, mapImgSrc, caracteristics, typeImgSrc, weaknessImgSrc,attack1Src, attack2Src, attack3Src, attack4Src){
        //pokemon name
    this.pokemonNameCapitalCase=pokemonNameCapitalCase;
        //main and secondary color styles
    this.mainColorVarName=mainColorVarName;
    this.secondaryColorVarName=secondaryColorVarName;
        //main title Header
    this.headerLeftName=headerLeftName;
    this.headerRightName=headerRightName;      
    this.pokemonType=pokemonType;
    this.littleDescription=littleDescription;
    this.mainImgSrc=mainImgSrc;
        //legend section
    this.legend=legend;
        //location section
    this.locationInstructions=locationInstructions;
    this.mapImgSrc=mapImgSrc;
        //caracteristics section
    this.caracteristics=caracteristics;
    this.typeImgSrc=typeImgSrc;
    this.weaknessImgSrc=weaknessImgSrc;
    this.attack1Src=attack1Src;
    this.attack2Src=attack2Src;
    this.attack3Src=attack3Src;
    this.attack4Src=attack4Src;
}
replaceContent(){
    document.getElementsByClassName("pokemon-name-mobile")[0].textContent = `${this.pokemonNameCapitalCase}`;
    document.getElementsByClassName("pokemon-name")[0].textContent = `${this.pokemonNameCapitalCase}`;
    document.getElementById("pokemon_left").textContent = `${this.headerLeftName}`;
    document.getElementById("pokemon_right").textContent = `${this.headerRightName}`;  
    // document.getElementById("header-type").textContent = `${this.pokemonType}`;
    // document.getElementById("little-description").textContent = `${this.littleDescription}`;
    document.getElementById("hero-header-img").src = `${this.mainImgSrc}`;
    // document.getElementById("legend-text").textContent = `${this.legend}`;
    // document.getElementById("localisation-text").textContent = `${this.locationInstructions}`;
    // document.getElementById("map-image").src = `${this.mapImgSrc}`;
    // document.getElementById("caracteristics-text").textContent = `${this.caracteristics}`;
    // // idem pour type, weakness, attacks, etc... mettre les bons IDs
    // document.querySelector("header").style.backgroundColor = `${this.mainColorVarName}`;
    // document.getElementById("hero").style.backgroundColor = `${this.mainColorVarName}`;
    document.documentElement.style.setProperty('--main-color',`${this.mainColorVarName}`);
    document.documentElement.style.setProperty('--secondary-color',`${this.secondaryColorVarName}`);
}
}

// declaration of the four pokemon contents 

const eeveeContent = new PokemonContent("EVOLI","#3a3129","#c5915d","AQUALI","PYROLI","FEU","Roux, les yeux bleus, pour 0.58m de brasier","assets\\EeveePokeball-img.png","C'est un grand grand guerrier de l'apocalypse","Tu le trouveras en cherchant bien","assets\\aqua_nav.png", "Il a plein de caractéristiques super chouettes","assets\\pins map.png", "blabla","blabla","blabla","blabla","blabla");
const flareonContent = new PokemonContent("PYROLI","#ffa948","#fb7c26","EVOLI","VOLTALI","FEU","Roux, les yeux bleus, pour 0.58m de brasier","assets\\Flareon_Pokeball.png","C'est un grand grand guerrier de l'apocalypse","Tu le trouveras en cherchant bien","assets\\aqua_nav.png", "Il a plein de caractéristiques super chouettes","assets\\pins map.png", "blabla","blabla","blabla","blabla","blabla");
const jolteonContent = new PokemonContent("VOLTALI","#e9bc2e","#b9812b","PYROLI","AQUALI","ELECTRIQUE","Roux, les yeux bleus, pour 0.58m de brasier","assets\\Volteon_Pokeball.png","C'est un grand grand guerrier de l'apocalypse","Tu le trouveras en cherchant bien","assets\\aqua_nav.png", "Il a plein de caractéristiques super chouettes","assets\\pins map.png", "blabla","blabla","blabla","blabla","blabla");
const vaporeonContent = new PokemonContent("AQUALI","#879cc6","#3a5d83","VOLTALI","EVOLI","EAU","Roux, les yeux bleus, pour 0.58m de brasier","assets\\Vaporeon_Pokeball.png","C'est un grand grand guerrier de l'apocalypse","Tu le trouveras en cherchant bien","assets\\aqua_nav.png", "Il a plein de caractéristiques super chouettes","assets\\pins map.png", "blabla","blabla","blabla","blabla","blabla");


export let switchPokemon = {
    eeveeContent:eeveeContent,
    flareonContent:flareonContent,
    jolteonContent:jolteonContent,
    vaporeonContent:vaporeonContent,
    };