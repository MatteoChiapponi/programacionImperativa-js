

let ecommerce = [
    {
        nombre: "Samsung TV",
        precio: 6000,
        cantidad: 10
    },
    {
        nombre: "DELL notebook",
        precio: 4000,
        cantidad: 30
    },
    {
        nombre:"Auriculares Sony",
        precio: 1500,
        cantidad: 15
    },
    {
        nombre:"Monitor Philips",
        precio:12000,
        cantidad: 20
    },
    {
        nombre:"Teclado logitech",
        precio: 3000,
        cantidad: 5
    }
]
// Crear una función que reciba por parámetro un arreglo y lo manipule agregando en cada objeto una propiedad nueva 
// llamada total, y su valor sea el total de lo que
// recaudaría si se vendieran todo el stock de cada producto. Por ejemplo, los primeros 2 objetos quedarían así:

const precioXcantidad = (array) => {

    for (let i = 0; i < array.length; i++) {
        
        array[i].total = (array[i].precio * array[i].cantidad)
        
    }

}
// precioXcantidad(ecommerce)
// console.log(ecommerce);

let numerosReales = [10, 20, 30 , -1, 2, 4, 9, 9]

const intervalo = array => {

    let acc = 0;

    for (let i = 0; i < array.length; i++) {
        
        if (array[i] < 10 && array[i] > 1) {
            
            acc +=1

        }
        
    }

    return acc

}

// console.log(intervalo(numerosReales));


