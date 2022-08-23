const prompt = require("prompt-sync")({ sigint: true });
// 1. Crear una función que convierta pulgadas en centímetros.
// Recibe por parámetro pulgadas y retorna su equivalente en centímetros.
let pulgadaCentimetro = centimetros => {
    return `serian ${centimetros * 2.54} centimetros`
}
console.log(pulgadaCentimetro(prompt("calculadora de pulgada a centimetros ")))

// 2. Crear una función que recibe un string y lo convierte en una URL.
// Ej: “pepito” es devuelto como “http://www.pepito.com”

let convertidorAurl = (string) => {
    return `http://www.${string}.com`
}
convertidorAurl("hola")
// 3. Crear una función que recibe un string y devuelve la misma frase pero con
// admiración.

let agregarAdmiracion = (string) => {
    return `¡¡¡¡¡${string}!!!!!`
}
agregarAdmiracion("tanto tiempo")

// 4. Crear una función que calcule la edad de los perros, considerando que 1 año
// para nosotros son 7 de ellos.

let edadPerro = tuEdad => {
    if (tuEdad > 17) {
        return `tu perro tiene ${a * 7}` + " seguramente esta muerto"
    }
    else {
        return `tu perro tiene ${tuEdad * 7}` + " todavia si no se enfermo esta vivo"
    }
}
console.log(edadPerro(prompt("ingrese la edad que quiere comparar con la de tu perro ")));

// 5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
// sueldo mensual como parámetro.
// PD: considerá que tu mes de trabajo tiene 40 horas.

let horaMensual = pagaMensual => {
    return `cobras por hora ${pagaMensual / 40}\$`
}
console.log(horaMensual(prompt("ingresa tu paga mensual ")));

// 6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en
// kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
// probando diferentes valores.

function calculadorIMC(peso, altura){
    let resultado = peso / altura;
    return (peso / altura) * resultado
}
console.log(calculadorIMC(prompt("ingrese su peso "),prompt("ingrese su altura ")));

// 7. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas
// y lo retorne.
let textUppercase;
 let convertidorUppercase = (textLowercase) => {
     return textUppercase = textLowercase.toUpperCase()
 }
console.log(convertidorUppercase(prompt("ingresa un texto ")));
console.log(textUppercase);
// 8. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
// parámetro.
// Pista: te servirá revisar qué hace la palabra reservada typeof.
let tipoDato = texto => {
    return `${texto}it´s a ${typeof (texto)}`
}
console.log(tipoDato("paula me tenes cansado "));
