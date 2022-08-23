// Crear un array llamado misMascotas 
let misMascotas = [];
// crear 3 objetos para 3 mascotas diferentes 
// Cada objeto deberá tener: 
// nombre
// raza
// edad 
// sonido
// y un método que nos retorne ese sonido 2 veces
function repiteSonido() {
    return this.sonido + " " + this.sonido
}
// Agregar al array (misMascotas)
// Cuando esté listo, verificar por consola
let mascota1 = {
    nombre: "gorda",
    edad: 3,
    raza: "callejero",
    sonido: "guau",
    decirSonido: repiteSonido
}
let mascota2 = {
    nombre: "paula",
    edad: 6,
    raza: "del monte",
    sonido: "oink",
    decirSonido: repiteSonido
}
let mascota3 = {
    nombre: "alberto",
    edad: 12,
    raza: "siames",
    sonido: "miau",
    decirSonido: repiteSonido
}
// console.log(mascota1.decirSonido());
misMascotas.push(mascota1, mascota2, mascota3)
console.log(misMascotas[0].decirSonido());
// console.log(misMascotas);


// Deberemos crear una función que se llame aumentarEdad que aumente 
// la edad de cada animal en 1.
let aumentarEdad = arreglo => {
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i].edad++
    }
}
// aumentarEdad(misMascotas)
// console.log(misMascotas);

// Ahora debemos crear otra función, que se llame  aumentarEdad2, 
// que va a hacer un trabajo más fino:
// Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
// Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
// Si la mascota tiene más de 10 años,deberá sumarle la mitad de su edad
let aumentarEdad2 = arreglo => {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i].edad < 6) {
            arreglo[i].edad++
        } else if (arreglo[i].edad >= 6 && arreglo[i].edad <= 10) {
            arreglo[i].edad += 2
        } else {
            arreglo[i].edad = (arreglo[i].edad / 2) + arreglo[i].edad
        }
    }
}
aumentarEdad2(misMascotas)
// console.log(misMascotas);
// Ahora crearemos una función que va a generar un identificador (ID) 
// en cada objeto, que será secuencial y que empezará en 1.

let agregarId = arreglo => {
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i].id = i + 1
    }
}
// agregarId(misMascotas)
// console.log(misMascotas);

// Por último eliminaremos la propiedad ‘raza’ , 
// ya que para nosotros todos los animalitos son iguales
let eliminarRaza = arreglo => {
    for (let i = 0; i < arreglo.length; i++) {
        delete arreglo[i].raza
    }
}
// eliminarRaza(misMascotas)
// console.log(misMascotas);

// Deberás crear una función llamada loopDePares que reciba como parámetro un número
// y haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso
// de que el número de la iteración sumado con el número pasado por parámetro sea
//  par, mostrará en la consola: “El número X es par”.

let loopDePares = numero => {
    for (let i = 0; i <= 100; i++) {
        if ((i + numero) % 2 == 0) {
            console.log(`el numero ${i + numero} es par`);
        }

        else {
            console.log(i);
        }
    }
}
// loopDePares(23);

// Deberás crear una función llamada loopDeImpares que reciba como parámetro
// un número y una palabra, y haga un loop de 0 a 100 mostrando en la consola
// cada número del loop. Luego, modificar el código para que, en caso de que
// ese número sumado con el número pasado por parámetro sea impar, muestre
// en la consola la palabra pasada por parámetro.

let loopDeImpares = (numero, palabra) => {
    for (let i = 0; i <= 100; i++) {
        if ((i + numero) % 2 !== 0) {
            console.log(`la persona  ${palabra} es impar`);
        }

        else {
            console.log(i);
        }
    }
}
// loopDeImpares(23, "paula sos muy salame");

// Deberás crear una función llamada sumatoria que reciba un número
// como parámetro y que devuelva la sumatoria de todos sus números anteriores,
// incluso ese mismo. Ejemplo:
// sumatoria(3) debe retornar 6 porque hace (1+2+3)
// sumatoria(8) debe retornar 36
const sumatoria = (numero) => {
    let acc = 0
    for (let i = 1; i <= numero; i++) {
        acc = i + acc
    }
    return acc
}
// console.log(sumatoria(8));


// Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro
// y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. Ejemplo:
// nuevoArreglo(5) debe retornar [1,2,3,4,5]
// nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]

const nuevoArreglo = (numero) => {
    let arrayacc = []
    for (let i = 1; i <= numero; i++) {
        arrayacc.push(i)
    }
    return arrayacc
}
console.log(nuevoArreglo(5));

// Deberás crear una función llamada split que reciba un string y simule el
// comportamiento de la función original. Si no estás seguro de cómo funciona,
// Google puede ayudarte. Importante: no podés usar el String.split(). Ejemplo:
// split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
// split(“chau”) debe retornar [“c”,”h”,”a”,”u”]

const split = string => {
    let arrayacc = []
    for (let i = 0; i < string.length; i++) {
        arrayacc.push(string[i])
    }
    return arrayacc
}
// console.log(split("paula sos muy salame"));

// Deberás crear una función llamada arrayHandler que reciba dos arreglos de igual
// largo como parámetros y muestre en la consola “Soy {elemento de array 1}
// y yo soy {elemento de array 2}”. Ejemplo:
// arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar:
// Soy 1 y yo soy h
// Soy 2 y yo soy o
// Soy 3 y yo soy l
// Soy 4 y yo soy a
let ar1 = [1, 2, 3, 4]
let ar2 = ["f","e","o","s"]
const arrayHandler = (array1, array2) => {
    for (let i = 0; i < array1.length; i++) {
        console.log(`soy ${array1[i]} y oy soy ${array2[i]}`);
    }
}
arrayHandler(ar1, ar2)

// Deberás crear una función llamada palindromo que indique si una palabra es palíndroma
// o no. Debe retornar “true” en caso de que lo sea, y “false” en caso de que no. Ejemplo:
// palindromo(“anilina”) debe retornar true
// palindromo(“Ana”) debe retornar true
// palindromo(“Enrique”) debe retornar false

const palindromo = (palabra) => {
    let acc = "";
    for (let i = (palabra.length - 1); i >= 0; i--) {
        acc = acc + palabra[i]
    }
    if (acc === palabra) {
        return true
    }else {
        return false
    }
}
console.log(palindromo("ana"));


