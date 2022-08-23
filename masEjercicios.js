const prompt = require("prompt-sync")({ sigint: true });

// Creá una función que reciba un parámetro numérico y verifique si el mismo es el
// número secreto. El número secreto deberá ser seleccionado de manera random de
// entre 1 y 10 —investigá qué hace la función Math.random()—. En caso de ser correcto,
// retorna un mensaje felicitando al usuario y, en caso de que no acierte, retorna un
// mensaje de aliento junto con el número ingresado y el secreto.

let numeroRandom = (numero) => {
    let numeroSecreto = Math.round(Math.random() * (10 - 1) + 1)
    if (numero === numeroSecreto) {
        return "felicitaciones capo la clavaste"
    } else {
        return "segui participando salame"
    }
}
// console.log(numeroRandom(7))

// abrirParacaidas()
// Crea una función llamada abrirParacaidas() que recibe dos parámetros: velocidad y
// altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo
// siguiente:
// ● La velocidad debe ser menor a 1000 km/h.
// ● La altura debe ser mayor o igual a 2000 m y menor a 3000 m.

let abrirParacaidas = (velocidad, altura) => {
    if (velocidad < 1000 && altura >= 2000 && altura < 3000) {
        return "abri el paracaidas capo que te moris"
    } else if (altura >= 0 && altura < 1500) {
        return "abrilo ya porque te moris de verdad"
    } else {
        return "no lo abras porque todavia estas lejos"
    }
}
// console.log(abrirParacaidas(300, 2000))

// Traductor condicional
// Usando la estructura switch, crea un programa en el que si un usuario ingresa "casa",
// "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
// inglés.
// En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
// informe que la palabra ingresada es incorrecta.

let traductorFuncion = (traductor) => {
    switch (traductor) {
        case "perro" :
            console.log("dog");
            break;
        case "pelota":
            console.log("ball");
            break;
        case "arbol":
            console.log("tree");
            break;
        case "genio":
            console.log("genius");
            break;
        case "mundo":
            console.log("world");
            break;
        case "pierna":
            console.log("leg");
            break;
    
        default:
            console.log("traduccion no encontrada");
            break;
    }
    
}
// traductorFuncion(prompt("ingresa la palabra que queres traducir: "));

// Valoración de películas
// Usando la estructura switch, pedirle al usuario que valore la película que acaba de ver
// según la siguiente escala:
// ● Muy mala.
// ● Mala.
// ● Mediocre.
// ● Buena.
// ● Muy buena.
// Acompaña cada valoración con un mensaje que indique si te lamentás o te alegrás
// por su valoración.
// Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamos mucho.".
// En caso de que ingresara un valor distinto, mostrarle el mensaje: "Ingresaste un valor
// inválido".
// Cuando el usuario haya valorado la película, agradecerle su visita.

let valoración = (valor) => {
    switch (valor) {
        case "muy mala" :
            console.log("Calificaste la película como Muy Mala. Lo lamentamos mucho.");
            break;
        case "mala":
            console.log("bueno veni graba vos la pelicula salame");
            break;
        case "mediocre":
            console.log("mediocre es tu vida capo");
            break;
        case "buena":
            console.log("anda ratton daba para un muy bueno");
            break;
        case "muy buena":
            console.log("tu señora esta muy buena capo");
            break;
        case "exelente":
            console.log("muchas gracias hno querido");
            break;
    
        default:
            console.log("valora la pelicula salame");
            break;
    }
    
}
// valoración(prompt("que tal estuvo la pelicula querido? "))

// Crear una función que pida un valor por parámetro y muestre los 10
// números siguientes.

const siguientes10 = (numero) => {
    for (let i = 0; i <= 10; i++) {
        console.log((numero + i))
    }
}
// siguientes10(4)

// Imprimir los números entre el 5 y el 20, saltando de tres en tres.


function entre2Numeros(num1, num2) {
    for (let i = num1; i < num2; i += 3) {
        console.log(i);
    }
}
// entre2Numeros(5, 20)

//Escribir un programa que muestre la sumatoria de todos los números
//entre el 0 y el 100

let sumatoria = 0
for (let i = 1; i <= 10; i++){
    sumatoria = sumatoria + i
    // console.log(sumatoria);
}

//Dado un número entero positivo, mostrar su factorial. El factorial de
//un número se obtiene multiplicando todos los números enteros
//positivos que hay entre el 1 y ese número.
let factorial = 1
function sacarFactor(numero) {
    for (let i = 1; i <= numero; i++){
         console.log(factorial = factorial * i)
    }  
}
// sacarFactor(10);

//Crear una función que muestre todos los números de la secuencia de
//fibonacci hasta el valor ingresado por parámetro.
let fibonacci = (lastNum) => {
    let acumulador = 0
    let var2 = 1
    let suma = null
    for(let i = 0; i <= lastNum; i++){
        acumulador = var2
        var2 = suma
        suma = acumulador + var2
        console.log(suma);
    }
}
// console.log(fibonacci(10));

// Escribí un programa que le pida al usuario ingresar una frase y
// la imprima en la consola.
// Recordá que para pedirle al usuario que escriba una frase
// debés utilizar el método prompt() y para escribir en la consola
// debés utilizar el método console.log().

let imprimirFrase = (frase) => {
    console.log(frase);
}
// imprimirFrase(prompt("escribi la frase que queres imprimir: "))

// Escribí un programa que le pregunte al usuario su nombre e
// imprima "Hola " seguido del nombre y un signo de
// exclamación.
// Por ejemplo, si el usuario ingresa "Pedro" el programa debe
// imprimir en la consola "Hola Pedro!".

let saludo = (nombre) => {
    console.log(`hola ${nombre} !!!!`);
}
// saludo(prompt ("ingresa tu nombre: "))

// Escribí un programa que le pida al usuario ingresar un número,
// luego le pida un segundo número, e imprima en la consola la
// suma de los dos números que ingresó el usuario.

let suma = (numero1, numero2) => {
    console.log(`el resultado de tu suma es  ${parseInt(numero1) + parseInt(numero2)}`);
}
// suma(prompt("ingresa el primer numero que queres sumar: "),prompt("ingresa el segundo numero que queres sumar: "))

// Escribí un programa que le pida al usuario su año de
// nacimiento e imprima su edad actual en la consola con la frase
// "Tienes X años" (siendo X la cantidad de años).
// Por ejemplo, asumiendo que el año actual es 2019 y el usuario
// ingresa 1999, el programa debe imprimir en la consola: “Tienes
// 20 años”.

const tuEdad = (fechaNacimiento) => {
let añoActual = 2022
    console.log(`tu edad es: ${añoActual - parseInt(fechaNacimiento)} años`);
}
// tuEdad(prompt("igresa tu fecha de nacimiento: "))

// Escribí un programa que piense un número de forma aleatoria
// del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el
// número es correcto debe imprimir en la consola "Felicitaciones,
// ese era!", de lo contrario, debe imprimir "Lo siento, intenta
// nuevamente!"


// Escribí un programa que imprima los números pares del 0 al
// 100.

console.log("--------------------------------------------");

// Escribí un programa que itere sobre el arreglo nombres e
// imprima cada uno en la consola: const nombres = ["Pedro",
// "Pablo", "Maria", "Juan", "Diana"];

console.log("--------------------------------------------");

// Construí un pseudocódigo que permita ingresar un número, si
// el número es mayor de 500, se debe calcular y mostrar en
// pantalla el 18% de este.

console.log("--------------------------------------------");

// Escribí una función llamada elemento que recibe un arreglo
// como parámetro. La función debe devolver el valor que se
// encuentra en la tercera posición. Si el arreglo no tiene al menos
// 3 elementos deberá retornar -1.

console.log("--------------------------------------------");

// Se ingresa por teclado un número natural de hasta 2 cifras, si
// tiene una cifra que muestre lo mínimo que le falta para ser un
// número de 2 cifras; de lo contrario, que muestre lo mínimo que
// le falta para ser un número de 3 cifras. Considerar que el
// usuario ingresa números de hasta dos cifras.

console.log("--------------------------------------------");

// Hacer un algoritmo que muestre el promedio de varias
// notas o de N notas ingresadas, se debe definir el valor de N
// para conocer la cantidad de notas a ingresar.

console.log("--------------------------------------------");

// Hacer un programa que calcule la suma de los N primeros
// números naturales, dónde N es el número límite ingresado por
// teclado.