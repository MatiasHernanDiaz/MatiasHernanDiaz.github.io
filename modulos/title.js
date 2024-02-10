//USADA EN LA PRESENTACION

export function escribirCadena(cadena, elem, tiempo, terminacion = false) {
    //escibre una cadena imitando maquina de escribir. el tiempo es entre caracteres
    //si terminacion es true no termina con la |
    for (let i = 0; i < cadena.length; i++) {
        setTimeout(() => {
            elem.innerHTML = cadena.substring(0, i + 1) + '|';

            if (i === (cadena.length - 1) && terminacion) {
                elem.innerHTML = cadena;
            }

        }, tiempo * i);
    }

}

function escribirCadena2(cadena, elem, tiempo) {
    //escribe una cadena en el elemento (elem) con un intervalo entre
    //caracter de tiempo (tiempo)
    //agrega ademas el caracter especial |
    let i = 0;
    const terminacion = '|'
    const idIntervaloEscribir = setInterval(function () {
        elem.innerHTML = cadena.substring(0, i) + terminacion;
        if (i >= cadena.length) {
            clearInterval(idIntervaloEscribir);
        }
        else {
            i++;
        }
    }, tiempo);
}

function borrarCadena(elem, tiempo) {
    //borra una cadena que obtiene como valor del elemento (elem)
    //cada caracter lo borra con un intervalo de tiempo (tiempo)
    let i = elem.textContent.length;
    const idIntervaloBorrar = setInterval(function () {
        elem.innerHTML = elem.textContent.substring(0, i - 1) + '|';
        if (i <= 0) {
            clearInterval(idIntervaloBorrar);
        }
        else {
            i--;
        }
    }, tiempo);
}

function maquina(cadena, elem, tiempo) {
    //escribe y borra una cadena con un intervalo de tiempo
    escribirCadena2(cadena, elem, tiempo);

    setTimeout(() => {
        borrarCadena(elem, tiempo);
    }, (tiempo * cadena.length) + 1000);

}

export function variasMaquinas(cadenas, elem, tiempo) {
    //acepta un array de dos cadenas las cual alterna para escribirlas y borrarlas

    const periodo = ((cadenas[0].length + 1) * tiempo * 2) + 1000;
    const periodoNuevo = ((cadenas[1].length + 1) * tiempo * 2) + 1000;

    maquina(cadenas[1], elem, tiempo);

    setTimeout(() => {
        maquina(cadenas[0], elem, tiempo);
    }, periodoNuevo);

    setInterval(function () {
        maquina(cadenas[1], elem, tiempo);
    }, periodo + periodoNuevo);

    setTimeout(() => {
        setInterval(function () {
            maquina(cadenas[0], elem, tiempo);
        }, periodo + periodoNuevo);
    }, periodoNuevo)
}
