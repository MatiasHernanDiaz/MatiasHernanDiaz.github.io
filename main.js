import { escribirCadena, variasMaquinas } from "./modulos/title.js";
import { carga_estudio } from "./modulos/estudio.js";
import { cargar_redes } from "./modulos/contacto.js";
import { toggleMenuDisplay } from "./modulos/navegador.js";
import { cargarHerramientas, filtro } from "./modulos/herramientas.js";



window.addEventListener('load', function () {

    ////////////////////////////////////////////////////////////////////////////////////////
    //COD A BORRAR CUANDO SE TERMINE PAG

    const seccion = this.document.querySelector('#sec_presentacion');
    const contenedorConstruccion = this.document.createElement('div');
    const imgConstruccion = this.document.createElement('img');
    const botonCerrar = this.document.createElement('button');

    contenedorConstruccion.className = 'contenedorConstrucion';
    imgConstruccion.src = './img/varios/pag_construccion.png';
    imgConstruccion.className = 'imgConstruccion';

    botonCerrar.textContent = 'X';
    botonCerrar.className = 'botonCerrar';
    contenedorConstruccion.appendChild(imgConstruccion);
    contenedorConstruccion.appendChild(botonCerrar);

    
    botonCerrar.addEventListener('click', () =>{
        contenedorConstruccion.classList.add('cerrar');
    })


    /////////////////////////////////////////////////////////////////////////////////////////////



    seccion.appendChild(contenedorConstruccion);

    const estudios = [
        { 'nombreCurso': 'Introducción a Base de Datos y SQL', 'entidad': 'EducaciónIT', 'anio': '2023' },
        { 'nombreCurso': 'Introducción a Java', 'entidad': 'EducaciónIT', 'anio': '2023' },
        { 'nombreCurso': 'Desarrollo Web con HTML', 'entidad': 'EducaciónIT', 'anio': '2023' },
        { 'nombreCurso': 'Introducción al paradigma de objetos', 'entidad': 'EducaciónIT', 'anio': '2023' },
        { 'nombreCurso': 'Javascript desde cero', 'entidad': 'EducaciónIT', 'anio': '2024' }]

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
    const profesion = ['Telecomunicaciones', 'Desarrollador'];
    const tiempoTipeo = 150;
    const dropdownTitle = document.querySelector('.dropdown .title');

    //NAVEGADOR
    dropdownTitle.addEventListener('click', toggleMenuDisplay);

    //SECCION PRESENTACION
    
    escribirCadena(presentacion, elem, tiempoTipeo, true);

    this.setTimeout(() => {
        variasMaquinas(profesion, elemProfesiones, tiempoTipeo);
    }, presentacion.length * tiempoTipeo); //es el tiempo que tarda en escribir la presentacion

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
    const lista_redes = document.getElementById("lista_redes");
    carga_estudio(estudios, lista_redes);

    //CONTACTO
    cargar_redes(redes);

});

