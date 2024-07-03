function celsiusAfahrenheit (celsius) {
    return (celsius * 1.8) + 32;
} 

function fahrenheitAcelsius (fahrenheit) {
    return (fahrenheit - 32) * 0.555;
} 

function operacion () {
    
    let opciones = prompt(`¿Qué quieres hacer? \n 1): Pasar de Celsius a Fahrenheit \n 2): Pasar de Fahrenheit a Celsius \n 3): Esplicacion de los calculos`)

    if (opciones === '1') {
        let celsius = prompt(`ingrese su temperatura en Celsius:`)

        if (isNaN(celsius)) {
            alert(`Por favor ingrese una temperatura valida`);
        } else {
            let fahrenheit = celsiusAfahrenheit (celsius);
            alert (`El resultado de la operacion ${celsius} grados celsius a fahrenheit es igual a: \n ${fahrenheit} grados fahrenheit`);
        }
    }  else if (opciones === '2') {
        let fahrenheit = prompt(`ingrese su temperatura en Fahrenheit`)
    
        if (isNaN(fahrenheit)) {
            alert(`Por favor ingrese una temperatura valida`);
        } else {
            let celsius = fahrenheitAcelsius (fahrenheit);
            alert (`El resultado de la operacion ${fahrenheit} grados fahrenheit a celsius es igual a: \n ${celsius} grados celsuis`);
        } 
    }  else if (opciones === '3') {
        alert (`Los calculos para realizar estas operaciones son: \n Celsius a Fahrenheit: (Grados Celsius x 1.8) + 32  \n Fahrenheit a Celsius: (Grados Fahrenheit - 32) x 0.555`)
    } else {
        alert (`La opcion que ingresaste no es valida, volve a intentalo`);
    }
    
    
} 

operacion ();