let fossilArray = ["claw-fossil", "helix-fossil", "old-amber", "dome-fossil", "root-fossil"];
let pkmnArray = ["dwebble", "baltoy", "sandshrew", "sandile", "trapinch"];
let resetFossils = [];
let resetPkmn = [];

function dayCardCycle() {
  if (fossilArray.length > 0) {
    let image = document.querySelectorAll(".card-image")[0];
    image.src = "images/" + fossilArray[0] + ".png";
    let removedItem = fossilArray.splice(0, 1);
    resetFossils.push(removedItem[0]);
  } else {
    fossilArray = resetFossils;
    resetFossils = [];
  }
}

function nightCardCycle() {
  if (pkmnArray.length > 0) {
    let image = document.querySelectorAll(".card-image")[1];
    image.src = "images/" + pkmnArray[0] + ".png";
    let removedItem = pkmnArray.splice(0, 1);
    resetPkmn.push(removedItem[0]);
  } else {
    pkmnArray = resetPkmn;
    resetPkmn = [];
  }
} 
  
setInterval(dayCardCycle, 4000);
setInterval(nightCardCycle, 4000);








