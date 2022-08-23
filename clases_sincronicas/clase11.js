// 2. Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una
// propiedad llamada “clientes” que estará compuesta de la lista de objetos
// obtenidos en el punto anterior.


let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

// 3. Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
// nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
// objeto cliente que corresponda con ese nombre ingresado.
// Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);

// 4. Crear otro método llamado depósito que recibirá dos parámetros: el titular de
// cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
// correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
// Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
// nuevo saldo es: XXXX”.

// 5. Crear un último método llamado extracción que recibirá también dos parámetros:
// el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
// correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
// menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
// De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
// saldo es: XXXX”.
// Si llegaste hasta acá, felicidades, el equipo de desarrollo y el tech leader están
// impresionados con tu trabajo.

let banco = {
  clientes: arrayCuentas,
  consultarCliente: function (titular) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (titular == this.clientes[i].titularCuenta) {
        return this.clientes[i]
      }
    }
  },
  deposito: function (titular, cantidadDeposito) {
    let saldoTotal = this.consultarCliente(titular).saldoEnPesos + cantidadDeposito
    console.log(`el saldo total es de ${saldoTotal}`);
  },
  extraccion: function (titular, montoExtraccion) {
    let saldoTotal = this.consultarCliente(titular).saldoEnPesos - montoExtraccion
    if (saldoTotal < 0) {
      console.log("tu saldo es insuficiente anda a laburar pelotudo");
    } else {
      console.log(`tu operacion fue realizada con exito y tu nuevo saldo es ${saldoTotal}`);
    }
  }
}
// console.log(banco.consultarCliente("Ansel Ardley"));
// banco.extraccion("Ansel Ardley", 200000)

// BONUSSSSS

// Crear una función llamada propiedadUnica que reciba un arreglo de objetos como
// parámetro y un string. Esta deberá retornar un nuevo arreglo de objetos, teniendo como
// parámetro la propiedad que fue pasada como string.
// Ejemplo:
// let array = [ { nombre: “Lean”, edad: 27 }, { nombre: “Eze”, edad: 49} ]
// propiedadUnica(array, “edad”) debe retornar [ { edad: 27 }, { edad: 49 } ]
// propiedadUnica(array, “nombre”) debe retornar [ { nombre: “Lean”}, { nombre: “Eze” } ]
let compañeros = [
  {
    nombre: "Lean",
    edad: 27
  },
  {
    nombre: "Eze",
    edad: 49
  }
]

const propiedadUnica = (arregloDobjetos, string) => {
  let acc = []
  let valores = 0;
  for (let i = 0; i < arregloDobjetos.length; i++) {
    // string.substr(1)
    // string.slice(0, -1)
    valores = arregloDobjetos[i].string
    acc.push(valores)
  }
  console.log(string);
  return acc
}
// console.log(propiedadUnica(compañeros, 'edad'))


// Crear el objeto “alumno”, el cual va a consistir de las siguientes propiedades básicas:
// ● Nombre
// ● Número de legajo
// ● Lista de notas
// Nos gustaría calcular el promedio del alumno y si el mismo está aprobado, basado en una
// nota de aprobación que le va a ser dada. Para este ejercicio, vamos a dejar que pienses
// todos los métodos y propiedades que puedan hacer falta para que el programa funcione
// correctamente de la manera solicitada.

let alumno = {
  nombre: "paula",
  numeroLegajo: 4564537,
  materias: [
    biologia = {
      notas: [9, 9, 6]
    },
    matematica = {
      notas: [4, 4, 4]
    },
    historia = {
      notas: [6, 7, 8]
    },
    geografia = {
      notas: [7, 8, 9]
    }
  ],
  materiasAprobadas: [],
  materiasDesaprobadas: [],
  promedio: function (notaAprobado) {
    let acc = 0;
    let promedio = 0;
    for (let i = 0; i < this.materias[i].notas.length; i++) {
      acc += this.materias[i].notas[i]
    }
    console.log(promedio = acc / 3)
    for (let i = 0; i < this.materias.length; i++) {
      if (promedio >= notaAprobado) {
        this.materiasAprobadas.push(this.materias[i])
      }
      else {
        this.materiasDesaprobadas.push(this.materias[i])
      }
    }
  }
}
alumno.promedio(6)
// console.log(alumno.materiasAprobadas);
// console.log(alumno.materiasDesaprobadas);