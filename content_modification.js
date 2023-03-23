//import external values of modified content

import { legends } from "./legend_location_text_content.js";
import { locations } from "./legend_location_text_content.js";
import { caracteristics } from "./caracteristics.js";
import { littleDescription } from "./little-description.js";
import { attackSrc } from "./attacks_svg.js";
import { typesSrc } from "./types_svg.js";

// import { vaporeonAttacks } from "./attacks_svg.js";

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
    document.getElementById("header-type").textContent = `${this.pokemonType}`;
    document.getElementById("little-description-text").textContent = `${this.littleDescription}`;
    document.getElementById("hero-header-img").src = `${this.mainImgSrc}`;
    document.getElementById("legend-text").textContent = `${this.legend}`;
    document.getElementById("localisation-text").textContent = `${this.locationInstructions}`;
    // document.getElementById("map-image").src = `${this.mapImgSrc}`;
    document.getElementById("caracteristics-text").textContent = `${this.caracteristics}`;
    // // idem pour type, weakness, attacks, etc... mettre les bons IDs
    document.documentElement.style.setProperty('--main-color',`${this.mainColorVarName}`);
    document.documentElement.style.setProperty('--secondary-color',`${this.secondaryColorVarName}`);
    document.querySelector("#caracteristics-type").src = `${this.typeImgSrc}`
    document.querySelector("#caracteristics-weakness").src = `${this.weaknessImgSrc}`
    document.querySelector("#attack1").src = `${this.attack1Src}`
    document.querySelector("#attack2").src = `${this.attack2Src}`
    document.querySelector("#attack3").src = `${this.attack3Src}`
    document.querySelector("#attack4").src = `${this.attack4Src}`
}
}

// declaration of the four pokemon contents 


const eeveeContent = new PokemonContent("EVOLI","#3a3129","#c5915d","AQUALI","PYROLI","Normal",littleDescription.eeveeLittleDescription,"assets\\EeveePokeball-img.png",legends.eeveeLegend,locations.eeveeLocation,"assets\\aqua_nav.png", caracteristics.eeveeCaracteristics,typesSrc.eeveeType, typesSrc.eeveeWeakness,attackSrc.eeveeAttack1,attackSrc.eeveeAttack2,attackSrc.eeveeAttack3,attackSrc.eeveeAttack4);

const flareonContent = new PokemonContent("PYROLI","#ffa948","#fb7c26","EVOLI","VOLTALI","Feu",littleDescription.flareonLittleDescription,"assets\\Flareon_Pokeball.png",legends.flareonLegend,locations.flareonLocation,"assets\\aqua_nav.png", caracteristics.flareonCaracteristics,typesSrc.flareonType,typesSrc.flareonWeakness,attackSrc.flareonAttack1,attackSrc.flareonAttack2,attackSrc.flareonAttack3,attackSrc.flareonAttack4);

const jolteonContent = new PokemonContent("VOLTALI","#e9bc2e","#b9812b","PYROLI","AQUALI", "Electrique", littleDescription.jolteonLittleDescription,"assets\\Volteon_Pokeball.png",legends.jolteonLegend,locations.jolteonLocation,"assets\\aqua_nav.png", caracteristics.jolteonCaracteristics,typesSrc.jolteonType,typesSrc.jolteonWeakness,attackSrc.jolteonAttack1,attackSrc.jolteonAttack2,attackSrc.jolteonAttack3,attackSrc.jolteonAttack4);

const vaporeonContent = new PokemonContent("AQUALI","#879cc6","#3a5d83","VOLTALI","EVOLI","Eau",littleDescription.vaporeonLittleDescription,"assets\\Vaporeon_Pokeball.png",legends.vaporeonLegend,locations.vaporeonLocation,"assets\\aqua_nav.png", caracteristics.vaporeonCaracteristics,typesSrc.vaporeonType,typesSrc.vaporeonWeakness,attackSrc.vaporeonAttack1,attackSrc.vaporeonAttack2,attackSrc.vaporeonAttack3,attackSrc.vaporeonAttack4);


export let switchPokemon = {
    eeveeContent:eeveeContent,
    flareonContent:flareonContent,
    jolteonContent:jolteonContent,
    vaporeonContent:vaporeonContent,
    };