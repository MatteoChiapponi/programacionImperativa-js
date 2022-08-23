// Ejercicio 1
// En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
// likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
// los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
// obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
// que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.

let usuarios = [
    {
        nombre: "ale salame",
        cantidadLikes: 12
    },
    {
        nombre: "paulo",
        cantidadLikes: 2231
    },
    {
        nombre: "ivo",
        cantidadLikes: 122
    },
    {
        nombre: "maria",
        cantidadLikes: 121
    },
    {
        nombre: "sofia",
        cantidadLikes: 126
    },

    {
        nombre: "carlso",
        cantidadLikes: 127
    },
    {
        nombre: "lucas",
        cantidadLikes: 129
    },
    {
        nombre: "ricardo",
        cantidadLikes: 122
    },
    {
        nombre: "lola",
        cantidadLikes: 111
    },
    {
        nombre: "eva",
        cantidadLikes: 11212
    },
    {
        nombre: "martin",
        cantidadLikes: 100
    },
    {
        nombre: "nidia",
        cantidadLikes: 19
    },
    {
        nombre: "ale",
        cantidadLikes: 18
    },
    {
        nombre: "jesus",
        cantidadLikes: 109
    },
    {
        nombre: "mateo crack",
        cantidadLikes: 1123131
    }

]

const ganadores = arr => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j].cantidadLikes < arr[j + 1].cantidadLikes) {
          let aux = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = aux;
        }
      }
    }
    return arr;
  }
// ganadores(usuarios)
// console.log(usuarios);

// Ejercicio 2
// El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
// objeto temperatura donde registra día —valor numérico del día—, mes —valor
// numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
// día. Las temperaturas —objeto temperatura— están cargados en un array.
// a) Ordenar por temperatura mínima de menor a mayor.
// b) Ordenar por temperatura máxima de mayor a menor.

let temperaturas = [
    {
        dia: 5,
        mes: 6,
        temMax: 20,
        temMin: 9
    },
    {
        dia: 23,
        mes: 8,
        temMax: 12,
        temMin: 2
    },
    {
        dia: 1,
        mes: 2,
        temMax: 37,
        temMin: 20
    },
    {
        dia: 12,
        mes: 12,
        temMax: 30,
        temMin: 10
    },
    {
        dia: 2,
        mes: 2,
        temMax: 10,
        temMin: 1
    },
    {
        dia: 23,
        mes: 1,
        temMax: 23,
        temMin: 5
    },
    {
        dia: 9,
        mes: 9,
        temMax: 30,
        temMin: 13
    }
]
const registroTemp = (arr, modo) => {
    let aux;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j].temMax < arr[j + 1].temMax && modo === "temperatura maxima") {
            aux = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = aux;
        }
        else if (arr[j].temMin > arr[j + 1].temMin && modo === "temperatura minima") {
          aux = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = aux;
        }
      }
    }
  }
registroTemp(temperaturas, "temperatura maxima")
console.log(temperaturas);

