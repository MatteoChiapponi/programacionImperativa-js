const prompt = require("prompt-sync")({ sigint: true });

/*
  SUMA
 let resultado;

 function sumar(a, b) {
     return resultado = parseInt(a) + parseInt(b)
 }
 console.log(sumar(prompt("ingresar el primer numero para sumar: "), prompt("ingresar el segundo numero: ")));
 console.log(resultado);

  RESTA

 function restar(a, b) {
     return parseInt(a) - parseInt(b)
 }
 console.log(restar(prompt("ingresar el primer numero para restar: "), prompt("ingresar el segundo numero: ")));

  MULTIPLICACION

 function multiplicacion(a, b) {
     return parseInt(a) * parseInt(b)
 }
 console.log(multiplicacion(prompt("ingresar el primer numero para multiplicar: "), prompt("ingresar el segundo numero: ")));

  DIVICION

 function divicion(a, b) {
     return parseInt(a) / parseInt(b)
 }
 console.log(divicion(prompt("ingresar el primer numero para dividir: "), prompt("ingresar el segundo numero: ")));

  CUADRADO

 function cuadradoDeUnNumero(numero) {
     return parseInt(numero) * parseInt(numero)
 }
 console.log(cuadradoDeUnNumero(prompt("ingrese el numero que quiere elevar al cuadrado: ")));

  CUBO

 function cuboDeUnNumero(numero) {
     return parseInt(numero) * parseInt(numero) * parseInt(numero)
 }
 console.log(cuboDeUnNumero(prompt("ingrese el numero que quiere elevar al cubo: ")));

  PROMEDIO DE 3 NUMEROS

 function promedio3Numeros(a, b, c) {
     return (parseInt(a) + parseInt(b) + parseInt(c)) / 3
 }
 console.log(promedio3Numeros(prompt("ingrese el primer parametro: "), prompt("ingrese el segundo parametro: "), prompt("ingrese el tercer parametro parametro: ")));

  PORCENTAJE

 function calcularPorcentaje(a, b) {
     return (a * b) / 100
 }
 console.log(calcularPorcentaje(prompt("ingresar el porcentaje del numero que quiero obtener: "), prompt("ingresar el numero del cual quiero sacar el porcentaje: ")));

  GENERADOR DE PORCENTAJE

 function generadorPorcentaje(valor1, valor2) {
     return (valor1 * 100) / valor2
 }
 console.log(generadorPorcentaje(prompt("ingrese el porcentaje que quiero generar: "), prompt("ingrese el numero que quiero generar elporcentaje: ")));

 */
function calculadoraPiola(a, b) {
    let tipoDeOperacion = prompt("que operacion queres hacer? suma / resta / multiplicacion / divicion / cuadrado / cubo / sacar porcentaje: ")
    let valorA = prompt("ingresa el primer valor: ")
     let valorB = prompt("ingresa el segundo valor: ")
    if (tipoDeOperacion === "suma"){
        let valorB = prompt("ingresa el segundo valor: ")
        return console.log(`el resultado de tu suma es ${parseInt(valorA) + parseInt(valorB)}.`);
    }
    else if (tipoDeOperacion === "resta") {
        let valorB = prompt("ingresa el segundo valor: ")
        return console.log(`el resultado de tu resta es ${parseInt(valorA) - parseInt(valorB)}.`);
    }
    else if (tipoDeOperacion === "multiplicacion") {
        let valorB = prompt("ingresa el segundo valor: ")
        return console.log(`el resultado de tu multiplicacion es ${parseInt(valorA) * parseInt(valorB)}.`);
    }
    else if (tipoDeOperacion === "divicion") {
        let valorB = prompt("ingresa el segundo valor: ")
        return console.log(`el resultado de tu divicion es ${parseInt(valorA) / parseInt(valorB)}.`);
    }
    else if (tipoDeOperacion === "cuadrado") {
        return console.log(`el resultado del cuadrado es ${parseInt(valorA) * parseInt(valorA)}.`);
    }
    else if (tipoDeOperacion === "cubo") {
        return console.log(`el resultado del cubo es ${parseInt(valorA) * parseInt(valorA ) * parseInt(valorA)}.`);
    }
    else if (tipoDeOperacion === "sacar porcentaje") {
        let valorB = prompt("ingresa el segundo valor: ")
        return console.log(`el resultado del porcentaje es ${parseInt(valorA) * parseInt(valorB ) / 100 }.`);
    }
    else{
        return console.log("el tipo de operacion no esta disponible en estos momentos, por favor intentelo nuevamente.");
    }
}
calculadoraPiola()