
//USADA EN LA PRESENTACION

function escribirCadena(cadena, elem, tiempo, terminacion = false) {
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


/*SECCION ESTUDIO*/

function carga_estudio(estudios) {
    //recorre la lista estudio y los imprime en el html
    let lista_cursos = document.getElementById("lista_curso");
    for (estudio of estudios) {
        lista_cursos.innerHTML += `<li>${estudio.nombreCurso} - ${estudio.entidad} - ${estudio.anio}</li>`;
    }
}


/*SECCION CONTACTO */

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

/*NAVEGADOR */

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




/*SECCION HERRAMIENTAS */

function cargarHerramientas(lista, elemento) {
    for (const herramienta of lista) {
        elemento.innerHTML += `<li class='item_lista'>
                                    <div class="logo_tec"> <img class="logo" src=${herramienta.logo}> </div>
                                    <div class="lenguaje"> ${herramienta.lenguaje} </div> 
                                    <div> ${herramienta.tecnologia}</div>
                                    <div> <p>${herramienta.resumen}</p> </div>
                                    <div> ${ herramienta.proyecto ? `<a href= ${herramienta.proyecto} target="_blank"> link </a>` : ''} </div>
                                    <div> ${cargarImagenes(herramienta.imagenes)}</div>
                                    <div> <img src="img/varios/separador.png" class="separador"> <div>
                                </li>`
    };
};


function cargarImagenes(listaImg){
    //restorna con comillas magicas un texto HTML con las imagenes
    let imagenes = '';
    if(listaImg){
        for(const img of listaImg){
                imagenes += `<div class="contenedor_img">
                                <img class="img_proyecto" src=${img}>
                            </div>`
        }
    }
    return imagenes
}


function subFiltro(listaHerramientas, valor, total, orden) {
    //recorre la lista de herramientas
    //cada herramienta crea una lista de 3 chidren.
    //el 0 es lenguaje, 1 tecnologia, 2 proyecto
    //dependiendo el orden elegido machea y muestra. si no oculta los los negativos
    for (const herramienta of listaHerramientas) {
        const hijos = herramienta.children;
        
        if (hijos[orden].textContent.toLowerCase().includes(valor) && (valor !== '')) {
            herramienta.style.display = 'list-item';
        }
        else {
            herramienta.style.color = 'black';
            herramienta.style.display = 'none';
        }
    }
    for (let i of listaHerramientas) {
        if (i.style.display !== 'none') {
            total++;
        }
    }
    return total;
}

function filtro(event, listaHerramientas) {
    //tomando el valor del input recorre la lista de herramientas y se fija con cual coincide
    //y la imprime en una lista.
    const elemento = event.currentTarget;
    const radios = document.querySelectorAll('input[name="tipo_busqueda"]');
    let valor = elemento.value;
    let total = 0;
    valor = valor.toLowerCase();

    if (radios.length > 0) {
        //selecciono una opcion
        if (radios[0].checked) {
            total = subFiltro(listaHerramientas, valor, total, 1);
        }
        else if (radios[1].checked) {
            total = subFiltro(listaHerramientas, valor, total, 2);
        }
        else {
            total = subFiltro(listaHerramientas, valor, total, 3);
        }
    }

    if (valor === '') {
        for (const herramienta of listaHerramientas) {
            herramienta.style.color = 'black';
            herramienta.style.display = 'none';
            if (total > 0) {
                total--;
            }
        }
    }
    console.log(total);
};

function todos(event) {
    /* ESTA FUNCION ESTA REPETIDO, REFACTORIZAR */
    const boton = event.currentTarget;
    const herramientas = document.getElementsByClassName('item_lista');
    if (boton.checked) {
        for (const herramienta of herramientas) {
            const hijos = herramienta.children;
            herramienta.style.display = 'list-item';
        }
    }
    else {
        herramienta.style.color = 'black';
        herramienta.style.display = 'none';
    }
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
        { 'lenguaje': 'Python', 'tecnologia': 'Vanilla', 'proyecto': 'https://github.com/MatiasHernanDiaz/Analisis_de_datos_Walmark-csv', 'resumen':'Analisis de datos de Walmark', 'imagenes': ['/img/proyectos/img_proyecto_python_analisis.png'], 'logo' : '/img/iconos/python.png' },
        { 'lenguaje': 'Javascript', 'tecnologia': 'Vanilla', 'proyecto': false, 'resumen' : 'Web CV implementacion de HTML, CSS y JS', 'imagenes':false, 'logo' : '/img/iconos/js_html_css.png'},
        { 'lenguaje': 'C', 'tecnologia': 'Vanilla', 'proyecto': 'https://github.com/MatiasHernanDiaz/CRUD-ANSI-C', 'resumen' : 'CRUD de corredores', 'imagenes' : ['/img/proyectos/c_1.jpg','/img/proyectos/c_2.jpg','/img/proyectos/c_3.jpg'], 'logo' : '/img/iconos/logo_c.png' },
        { 'lenguaje': 'Assembly', 'tecnologia': 'Vanilla', 'proyecto': 'https://github.com/MatiasHernanDiaz/game-x', 'resumen' : 'Juego', 'imagenes' : ['/img/proyectos/assembly_1.jpg','/img/proyectos/assembly_2.jpg'], 'logo' : '/img/iconos/logo_ASM.png'},
        { 'lenguaje': 'Wollok', 'tecnologia': 'Framework Java', 'proyecto': 'https://github.com/MatiasHernanDiaz/TuboAlgo', 'resumen' : 'Juego POO', 'imagenes' : ['/img/proyectos/wollok_0.png','/img/proyectos/wollok_1.png','/img/proyectos/wollok_2.png','/img/proyectos/wollok_3.png'], 'logo' : '/img/iconos/logo_wollok.png'}];


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
    this.setTimeout(() => {
        variasMaquinas(profesion, elemProfesiones, tiempoTipeo);
    }, presentacion.length * tiempoTipeo); //es el tiempo que tarda en escribir la presentacion


    //SEC HERRAMIENTA
    //cargar_herramientas(herramientas);    
    //const buscador = document.getElementById('id_buscador_herramientas');
    //buscador.addEventListener('keyup', buscar);


    const elemento = document.getElementById('lista_herramientas');
    const input = document.getElementById('buscador');
    const listaHerramientas = document.getElementsByClassName('item_lista');
    const radioTodos = document.getElementById('todos');

    cargarHerramientas(herramientas, elemento);


    input.addEventListener('keyup', function (event) {
        filtro(event, listaHerramientas);
    });

    radioTodos.addEventListener('click', todos);



    //SEC ESTUDIOS
    carga_estudio(estudios, document.getElementById("lista_redes"));


    //CONTACTO
    cargar_redes(redes);



});

