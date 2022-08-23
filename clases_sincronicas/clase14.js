const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

// 1 Obtener en un nuevo array las edades menores a 18.
// 2 Obtener en un nuevo array las edades mayor o igual a 18.
// 3 Obtener en un nuevo array las edades igual a 18.
let ArregloMayor18 = []
let ArregloIgual18 = []
let ArregloMenor18 = []
const menorEdad = (arreglo) => {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] < 18) {
            ArregloMenor18.push(arreglo[i])
        } else if (arreglo[i] > 18) {
            ArregloMayor18.push(arreglo[i])
        } else if (arreglo[i] === 18) {
            ArregloIgual18.push(arreglo[i])
        }
    }
}


// 4 Obtener el menor.
const obtenerMenor = (arreglo) => {
    let menor = arreglo[0]
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] < menor) {
            menor = arreglo[i]
        }
    }
    return menor
}
// console.log(obtenerMenor(edades))

// 5 Obtener el mayor. 
const obtenerMayor = (arreglo) => {
    let mayor = arreglo[0]
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i]
        }
    }
    return mayor
}
obtenerMayor(edades)

// 6 Obtener el promedio de edades.
const obtenerPromedio = (arreglo) => {
    let acc = 0
    for (let i = 0; i < arreglo.length; i++) {
        acc += arreglo[i]
    }
    return `tu promedio final es de ${(acc / arreglo.length)} y omar sos un salame ${obtenerMayor(edades)}`
}
// console.log(obtenerPromedio(edades));

// 7 Incrementar en 1 todas las edades.

const aumentarEdad = (arreglo) => {
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i] = (arreglo[i] + 1)
    }
}
// aumentarEdad(edades)
// console.log(edades);

const arrayCuentas = [
    {
        titular: "Arlene Barr",
        estaHabilitada: false,
        saldo: "$3,253.40",
        edadTitular: 33,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Roslyn Torres",
        estaHabilitada: false,
        saldo: "$3,229.45",
        edadTitular: 27,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Cleo Lopez",
        estaHabilitada: true,
        saldo: "$1,360.19",
        edadTitular: 34,
        tipoCuenta: "corriente"
    },
    {
        titular: "Daniel Malone",
        estaHabilitada: false,
        saldo: "$3,627.12",
        edadTitular: 30,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Ethel Leon",
        estaHabilitada: true,
        saldo: "$1,616.52",
        edadTitular: 34,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Harding Mitchell",
        estaHabilitada: true,
        saldo: "$1,408.68",
        edadTitular: 25,
        tipoCuenta: "corriente"
    }
];

// Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
// Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
// Obtener un nuevo array de cuentas cuyas edades sean igual a 30.

let arrayMenores30 = []
let arrayMayores30 = []
let arrayIguales30 = []
const distribucionCuentas = (arreglo) => {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i].edadTitular < 30) {
            arrayMenores30.push(arreglo[i])
        } else if (arreglo[i].edadTitular > 30) {
            arrayMayores30.push(arreglo[i])
        } else if (arreglo[i].edadTitular === 30) {
            arrayIguales30.push(arreglo[i])
        }

    }
}
// distribucionCuentas(arrayCuentas)
// console.log(arrayMenores30);
// console.log("----------------");
// console.log(arrayMayores30);
// console.log("----------------");
// console.log(arrayIguales30);

// Obtener la cuenta con el titular de la misma más joven.

const masJoven = (arreglo) => {
    let masChico = arreglo[0]
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i].edadTitular < masChico.edadTitular) {
            masChico = arreglo[i]
        }
    }
    return masChico
}
// console.log(masJoven(arrayCuentas))
// Obtener un nuevo array por cada tipo de cuenta.
let tipoSueldo = []
let tipoCorriente = []
const arrayTipoCuenta = (arreglo) => {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i].tipoCuenta === "sueldo") {
            tipoSueldo.push(arreglo[i])
        }else{
            tipoCorriente.push(arreglo[i])
        }
    }
}
// arrayTipoCuenta(arrayCuentas)
// console.log("corriente",tipoCorriente);
// console.log("----------------");
// console.log("sueldo",tipoSueldo);
// Obtener un nuevo array con las cuentas habilitadas.
// Obtener un nuevo array con las cuentas deshabilitadas.
let cuentasHabilitadas = []
let cuentasDeshabilitadas = []
const estadoCuenta = (arreglo) => {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i].estaHabilitada === true) {
            cuentasHabilitada.push(arreglo[i])
        }else{
            cuentasDeshabilitadas.push(arreglo[i])
        }
    }
}
// estadoCuenta(arrayCuentas)
// console.log("habilitadas", cuentasHabilitadas);
// console.log("deshabilitas", cuentasDeshabilitadas);

parseInt(arrayCuentas.saldo)

// Obtener la cuenta con el menor saldo.
const menorSaldo = (arreglo) => {
    let saldoMenor = arreglo[0]
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i].saldo < saldoMenor.saldo) {
            saldoMenor = arreglo[i]
        }
    }
    return saldoMenor
}
console.log(menorSaldo(arrayCuentas));

// Obtener la cuenta con el mayor saldo.
const mayorSaldo = (arreglo) => {
    let saldoMayor = arreglo[0]
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i].saldo > saldoMayor.saldo) {
            saldoMayor = arreglo[i]
        }
    }
    return saldoMayor
}
console.log(mayorSaldo(arrayCuentas));
