const prompt = require("prompt-sync")({ sigint: true });
let edad = 21
if (edad < 0) {
    console.log("edad invalida");
}
if (edad % 2 == !0) {
    console.log("tu edad es impar");
}
if (edad >= 21) {
    console.log("felicitaciones capo sos mayor de edad y podes pasar y tomar alcohol");
}
if (edad < 18) {
    console.log("no podes pasar al bar");
} else if (edad < 21) {
    console.log("podes entrar al bar pero no tomar acohol");



    let ventaDeSandwiches = (sandwichBase, agregados) => {
        sandwichBase = prompt;
        agregados = prompt;
        if (sandwichBase === "pollo" && agregados === "extra pollo") {
            precioFinal = sandwichPollo + extraPollo;
            return precioFinal;
        }
        if (sandwichBase === "carne" && agregados === "extra carne") {
            precioFinal = sandwichCarne + extraCarne;
            return precioFinal;
        }
        if (sandwichBase === "pollo" && agregados === "extra verdura") {
            preciofinal = sandwichPollo + extraVerdura;
            return precioFinal;
        }
        if (sandwichBase === "carne" && agregados === "extra verdura") {
            preciofinal = sandwichPollo + extraVerdura;
            return precioFinal;
        }
        else {
            return "no tenemos disponible lo que solicitas comprar";
        }
    }
}

 const totalAPagar = function (vehiculo, litrosConsumidos){
     if (vehiculo == "coche" && litrosConsumidos < 25){
         return "el total es 136"
     }
     else if (vehiculo == "coche" && litrosConsumidos > 25) {
         return "el total es 101"
     }
      if (vehiculo == "moto" && litrosConsumidos < 25) {
         return "el total es 120"
     }
     else if (vehiculo == "moto" && litrosConsumidos > 25) {
         return "el total es 95"
     }
     if (vehiculo == "autobus" && litrosConsumidos < 25) {
         return "el total es 105"
     }
     else if (vehiculo == "autobus" && litrosConsumidos > 25) {
         return "el total es 80"
     }
 }
 console.log(totalAPagar("moto", 26));