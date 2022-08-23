// Ejercicios
// 1. Crear una función que imprima todos los dígitos decimales, del 0 al 9,
// usando un ciclo For.
const decimales = () => {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 1; j++) {

            console.log(i / 10);
        }

    }
}
// decimales()
// 2. Crear una función que imprima los números entre el 5 y el 20, saltando de
// tres en tres. 

const numeros = () => {
    for (let i = 5; i <= 20; i += 3) {

        console.log(i);

    }
}
// numeros()

// 3. Crear una función que imprima la sumatoria de todos los números entre el
// 0 y el 100.

const sumatoria = () => {
    let acc = 0;
    for (let i = 0; i < 100; i++) {

        console.log(acc = acc + i)

    }
}
// sumatoria()

// 4. Crear una función que reciba un string y luego imprimir la cantidad de
// vocales que se encuentran en dicha frase.

const vocales = (string) => {
    let acc = 0
    for (let i = 0; i < string.length; i++) {

        if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {

            acc += 1

        }
    }
    return acc
}
// console.log(vocales("hola"))

// 5. Realizar una función que, dada una lista, devuelva una nueva lista cuyo
// contenido sea igual a la original pero invertida.

let lista = [12, 23, 5, 6, 10] // 10, 6, 5, 23, 12
const listaNueva = (array) => {
    let arraynuevo = [];
    for (let i = array.length - 1; i >= 0; i--) {
        arraynuevo.push(array[i])
    }
    return arraynuevo
}
// console.log(listaNueva(lista))

// 6. Realizar una función que escriba una pirámide del 1 al 30 de la siguiente
// forma :
// 1
// 22
// 333
// 4444
// 55555
// 666666
const piramide = () => {
    let acc = ""
    for (let i = 1; i <= 30; i++) {
        for (let j = 1; j <= i; j++) {

            acc += i
        }
        console.log(acc)
        acc = ""
    }
}
// piramide()
let arreglo1 = [1, 2, 3, 9, 7, 9]

// Escribir una función que reciba un array de elementos e indique si se encuentran ordenados
// de menor a mayor o no.
const comparadora = array => {
    let acc = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < array[i + 1])

            acc = 0

        else
            return "no esta ordenado"
    }

    if (acc === 0)

        return "si esta ordenado"

}
console.log(comparadora(arreglo1))


// Escribir una función que reciba un array con nombres, y para cada nombre imprima el mensaje
// Estimado (nombre) , vote por mí.
let nombres = ["paula", "julia", "julio", "mateo"]

const vitaPorMi = (array) => {
    for (let i = 0; i < array.length; i++) {

        console.log(`estimado ${array[i]}, vota por mi`)

    }
}
vitaPorMi(nombres)
// Implementar un algoritmo que imprima por consola una pirámide inversa de los números del 1 al
// número que indique el usuario de la siguiente forma: (suponiendo que indica 6). 
// 666666 
// 55555 
// 4444 
// 333 
// 22 
// 1 

const piramideInvertida = () => {
    let aux = "";
    for (let i = 6; i >= 1; i--) {

        for (let j = 0; j < i; j++) {

            aux += i

        }
        console.log(aux);
        aux = "";

    }

}
piramideInvertida()

// Teniendo 3 arrays:
fila1 = [4, 9, 2]
fila2 = [3, 5, 7]
fila3 = [8, 1, 6]

// Realiza las siguientes tareas:
// Crea una matriz con esta forma:
// [
// [4,9,2],
// [3,5,7],
// [8,1,6]
// ]
// Luego, a partir de esta matriz, realiza lo siguiente:

// -Imprimir la suma de cada fila,
// -Imprimir la multiplicación de cada columna (es decir, los 3 valores multiplicados entre sí) sólo si el resultado es par.
// - Imprimir la suma de ambas diagonales por separado

// 1) Escribir un programa que muestre en pantalla los números del 1 al 100,
// sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por
// “buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—,
// por la palabra “fizzbuzz”. Visiten este sandbox

const del1Al100 = () => {
    for (let i = 1; i < 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("es modulo de 3 y de 5");
        }
        else if (i % 3 === 0) {
            console.log("es modulo de 3");
        } else if (i % 5 === 0) {
            console.log("es modulo de 5");
        } else {
            console.log(i);
        }
    }
}
del1Al100()

// 2) Escriban una función que reciba dos parámetros: un array y un índice. La
// función deberá de mostrar por consola el valor del elemento según el
// índice dado. Por ejemplo, dada la siguiente array e índice, la función
// imprimirá '6'. 
let arreglo = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];

const valorIndice = (array, indice) => {

    console.log(array[indice]);

}
valorIndice(arreglo, 1)

// 3) Escribir una función que, dado un número de mes, devuelva la cantidad
// de días de ese mes —suponiendo que no es un año bisiesto—.

const cantidadDias = (nroMes) => {

    switch (nroMes) {

        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
        case 11:
        console.log(31);
        break;

        case 4:
        case 6:
        case 8:
        case 10:
        case 12:
        console.log(30);
        break;

        default:
        console.log(28);
        break;

    }
}
cantidadDias(11)

// 4) Escribir una función de JavaScript que invierta un número. Por ejemplo,
// si x = 32443, la salida debería ser 34423.

const inverso = numero => {

    let conversor = numero.toString()
    let acc = ""

    for (let i = conversor.length - 1; i >= 0; i--) {
        
     acc +=  conversor[i]

    }
    return acc

}
console.log(inverso(1234))


// 5) Escribir una función que reciba una array y solo imprima los valores que
// se repiten. Por ejemplo, dada la siguiente array e índice, la función
// imprimirá '6,23,33,100'. 

let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

const buscadorDeIguales = array => {
    
let acc = ""

    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array.length; j++) {


            if (array[i] === array[j] && i !== j){

                acc += `${array[i]}, `

            }
            
        }
    }
    return acc

}
console.log(buscadorDeIguales(array));