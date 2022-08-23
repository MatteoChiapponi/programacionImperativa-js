const prompt = require("prompt-sync")({ sigint: true });

//  codigo para guardar los datos obtenidos de un prompt en una variable

let valorPrompt;

function savePromptValue() {
    return valorPrompt = prompt("asigna el valor que queres guardar en una variable  ")
}
console.log(savePromptValue());
console.log(valorPrompt)

// (primer clase) codigo para intercambiar el valor entre 2 variables

 let pantalones = "remeras1, remeras2, remeras3" 
 let remeras = "pantalon1, pantalon2, pantalon3"
 let auxiliar = null

 auxiliar = pantalones
 pantalones = remeras
 remeras = auxiliar

 console.log(pantalones, remeras)



