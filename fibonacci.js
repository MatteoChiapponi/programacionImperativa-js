

    let num1 = null
    let num2 = 1
    for (let i = 1; i <= 11 ; i++) {
    let fibonacci = num1 + num2;
        num1 = num2
        num2 = fibonacci
        console.log(fibonacci);
    }
    let variable1 = "hola todo mal"

    let variable2 = variable1.replace("mal", "bien")
    console.log(variable2);
    
    
    let miArray = ["mateo", "paula", "ivo", "paulo"]
    let valoresMiArray
    let baul = []
    for (let i = 0; i < miArray.length * 2; i++) {
     miArray.pop();
    }
    console.log(miArray);

