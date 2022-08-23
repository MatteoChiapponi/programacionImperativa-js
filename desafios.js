const intrusos = ['0', '0', '0', '0', '0', 'O', '0', '0', '0']
// nuestro trabajo será desarrollar una función que lo detecte
// reemplazando por un “cero” y retorna él índice que se encontraba él
// intruso

const detectarIntruso = (array) => {
    let verificador = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== verificador){
            array[i] = "0"
            return i
        }
    }
}
console.log(detectarIntruso(intrusos));
console.log(intrusos);

// 2) Ahora tenemos un caso similar, solo que esta vez tenemos más de un
// intruso

const intrusos2 = ['0', '0', '0', '0', '0', 'O', '0', '0', 'O', '0', 'O']
arrayNuevo = []
const cambiarIntruso = (array) => {
    let verificador = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== verificador) {
            arrayNuevo.push(i)
            array[i] = "0"
        }
    }
}
cambiarIntruso(intrusos2)
console.log(intrusos2);
console.log(arrayNuevo);

// nuestro trabajo será crear una función que los reemplace por ceros y
// retorna un array con las posiciones que se encontraban estos