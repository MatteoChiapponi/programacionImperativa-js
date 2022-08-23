//Declarar 3 arrays de edades por ejemplo -> [10, 9, 8, 22, 55, 80, 5, 63, 29, 9]


//Funcion que reciba un array de edades y retorne el menor elemento // 5
let edades = [10, 9, 8, 22, 55, 80, 5, 63, 29, 9, 4]
let longitud = edades.length
const elMenorNro = (arreglo) => {
    let inicio = arreglo[0];
    for (let i = 0; i < longitud; i++) {
        if (inicio < arreglo[i]) {
            arreglo[i] = inicio
            inicio = arreglo[i];
        } else {
            inicio = arreglo[i];
        }
    }
    return inicio
}
console.log(elMenorNro(edades));
//1 - Funcion que reciba un array de edades y retorne el promedio 
let edades2 = [10, 9, 8, 22, 55, 80, 5, 63, 29]

const promedioArray = (arreglo) => {
    let resultado = null
    promedio = null
    for (let i = 0; i < arreglo.length; i++) {
        resultado = resultado + edades2[i]
    }
    console.log(resultado / arreglo.length)
}
promedioArray(edades2)

 let edades3 = [10, 9, 8, 22, 55, 80, 5, 63, 29, 9, 4]
 let longitud2 = edades.length
 const elMayorNro = (arreglo) => {
     let inicio = arreglo[0];
     for (let i = 0; i > longitud2; i++) {
         if (inicio > arreglo[i]) {
             arreglo[i] = inicio
             inicio = arreglo[i];
         } else {
             inicio = arreglo[i];
         }
     }
     return inicio
 }
 console.log(elMayorNro(edades));
 menorEdad(edades)


