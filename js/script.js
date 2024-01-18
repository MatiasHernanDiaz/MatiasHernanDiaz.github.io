
//USADA EN LA PRESENTACION

function escribirCadena(cadena, elem, tiempo, terminacion = false) {
    //escibre una cadena imitando maquina de escribir. el tiempo es entre caracteres
    //si terminacion es true no termina con la |
    for (let i = 0; i < cadena.length; i++) {
        setTimeout(() => {
            elem.innerHTML = cadena.substring(0, i + 1) + '|';
            
            if(i === (cadena.length - 1) && terminacion){
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
function variasMaquinas(cadenas, elem, tiempo) {
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

function carga_estudio(estudios) {
    //recorre la lista estudio y los imprime en el html
    let lista_cursos = document.getElementById("lista_curso");
    for (estudio of estudios) {
        lista_cursos.innerHTML += `<li>${estudio.nombreCurso} - ${estudio.entidad} - ${estudio.anio}</li>`;
    }
}

function cargar_redes(redes, elemento = document.getElementById("lista_redes")) {
    //recorre la lista de redes y los imprime en el html
    //puede recibir un elemento al cual se insertará o puede tener por defecto la lista de redes
    for (red of redes) {
        elemento.innerHTML += `<li class="item_redes">
                                    <a href=${red.link ? red.link : '#sec_contacto'} target="_blank" > 
                                        <img class="img_redes" src=${red.imagen} alt=${red.nombreRed} title=${red.nombreRed}>
                                    </a>
                                </li>`;
    }
}



function toggleClass(elem, className) {
    if (elem.className.indexOf(className) !== -1) {
        elem.className = elem.className.replace(className, '');
    }
    else {
        elem.className = elem.className.replace(/\s+/g, ' ') + ' ' + className;
    }

    return elem;
}

function toggleDisplay(elem) {
    const curDisplayStyle = elem.style.display;

    if (curDisplayStyle === 'none' || curDisplayStyle === '') {
        elem.style.display = 'block';
    }
    else {
        elem.style.display = 'none';
    }
}

function invertirFlex(elemento) {
    if (elemento.style.flexDirection === 'row') {
        elemento.style.flexDirection = 'column';
    }
    else {
        elemento.style.flexDirection = 'row';
    }
}

function toggleMenuDisplay(e) {
    const dropdown = e.currentTarget.parentNode;
    const menu = dropdown.querySelector('.menu');
    const icon = dropdown.querySelector('.fa-angle-right');
    const rayas = document.getElementById('rayas');

    if (dropdown.style.width === "auto") {
        dropdown.style.width = "50px";
        invertirFlex(rayas);
    }
    else {
        dropdown.style.width = "auto";
        invertirFlex(rayas);
    }

    toggleClass(menu, 'hide');
    toggleClass(icon, 'rotate-90');
}

/*
function cargar_herramientas(herramientas){
    pizarra = document.getElementById('lista_resultado');
    
    alert( herramientas[0].lenguaje);
    for(const herramienta of herramientas){
        pizarra.innerHTML += `<li class='items_resultado'> ${herramienta.lenguaje}</li>`
    }
}
*/


function buscar(event) {
    let pizarra = document.getElementById('lista_resultado');
    let input = event.currentTarget;
    let cantidad = document.getElementById('checking_resultado_herramienta');
    valor = input.value.toLowerCase();
    let contador = 0;

    const herramientas = [
        { 'lenguaje': 'python', 'proyecto': [1, 2] },
        { 'lenguaje': 'javascript', 'proyecto': [3, 4] },
        { 'lenguaje': 'HTML', 'proyecto': [3, 4] },
        { 'lenguaje': 'CSS', 'proyecto': [3, 4] },
        { 'lenguaje': 'java', 'proyecto': [3, 4] },
        { 'lenguaje': 'C', 'proyecto': [3, 4] },
        { 'lenguaje': 'C++', 'proyecto': [3, 4] }]


    for (const herramienta of herramientas) {
        if (herramienta.lenguaje.toLowerCase().includes(valor) && (valor !== '')) {
            contador++;
            pizarra.innerHTML += `<li class='lista_herramienta'>${herramienta.lenguaje}</li>`

        }
        else {
            //pizarra.innerHTML = ``;
        }


    }
    cantidad.innerHTML = `${contador}`;

}


window.addEventListener('load', function () {

    const estudios = [
        { 'nombreCurso': 'Introducción a Base de Datos y SQL', 'entidad': 'EducaciónIT', 'anio': '2023' },
        { 'nombreCurso': 'Introducción a Java', 'entidad': 'EducaciónIT', 'anio': '2023' },
        { 'nombreCurso': 'Desarrollo Web con HTML', 'entidad': 'EducaciónIT', 'anio': '2023' },
        { 'nombreCurso': 'Introducción al paradigma de objetos', 'entidad': 'EducaciónIT', 'anio': '2023' },]

    const redes = [
        { 'nombreRed': 'GMAIL', 'link': 'mailto:diaz.matiash@gmail.com', 'imagen': 'img/iconos/gmail.png', 'noLink': 'diaz.matiash@gmail.com' },
        { 'nombreRed': 'LinkedIn', 'link': 'https://www.linkedin.com/in/matias-h-diaz-98a89123b/', 'imagen': 'img/iconos/linkedin.png', 'noLink': 'Matias Hernan Diaz' },
        { 'nombreRed': 'Github', 'link': 'https://github.com/MatiasHernanDiaz', 'imagen': 'img/iconos/github.png', 'noLink': 'MatiasHernanDiaz' },
        { 'nombreRed': 'Discord', 'link': false, 'imagen': 'img/iconos/discord.png', 'noLink': 'matiashdiaz' }]

    const herramientas = [
        { 'lenguaje': 'python', 'proyecto': [1, 2] },
        { 'lenguaje': 'javascript', 'proyecto': [3, 4] },
        { 'lenguaje': 'HTML', 'proyecto': [3, 4] },
        { 'lenguaje': 'CSS', 'proyecto': [3, 4] },
        { 'lenguaje': 'java', 'proyecto': [3, 4] },
        { 'lenguaje': 'C', 'proyecto': [3, 4] },
        { 'lenguaje': 'C++', 'proyecto': [3, 4] }]


    const elem = document.getElementById('hola');
    const elemProfesiones = document.getElementById('profesion');
    const presentacion = '¡Hola! Soy Matias H. Diaz'
    const profesion = ['Tec en Telecomunicaciones', 'Desarrollador'];
    const tiempoTipeo = 150;
    const dropdownTitle = document.querySelector('.dropdown .title');
    const dropdownOptions = document.querySelectorAll('.dropdown .option');
    
    //NAVEGADOR
    dropdownTitle.addEventListener('click', toggleMenuDisplay);
    
    //SECCION PRESENTACION
    escribirCadena(presentacion, elem, tiempoTipeo, terminacion = true);
    this.setTimeout(()=>{
        variasMaquinas(profesion, elemProfesiones, tiempoTipeo);
    },presentacion.length * tiempoTipeo); //es el tiempo que tarda en escribir la presentacion

    
    //SEC HERRAMIENTA
    //cargar_herramientas(herramientas);    
    const buscador = document.getElementById('id_buscador_herramientas');
    buscador.addEventListener('keyup', buscar);
    
    //SEC ESTUDIOS
    carga_estudio(estudios, document.getElementById("lista_redes"));
    
    
    //CONTACTO
    cargar_redes(redes);


});

