
//USADA EN LA PRESENTACION
function tipear(cadena, ms, elemento = document.getElementById("hola")) {
    //escribe letra por letra la cadena por cada milisegundo (ms), el elemento es donde se va a imprimir la cadena

    //MEJORAR: QUE APAREZCA LA BARRA DE TIPEO
    let aux = cadena;
    let index = 0;
    const barra = "|";

    let intervalId = setInterval(function(){
        
        elemento.innerHTML += cadena[index++];
        //elemento.innerHTML = aux.substring(0, index);
        if (index === cadena.length) {
          clearInterval(intervalId);
        }
      }, ms);
}


function carga_estudio(estudios){
    //recorre la lista estudio y los imprime en el html
    let lista_cursos = document.getElementById("lista_curso");
    for (estudio of estudios){
        lista_cursos.innerHTML += `<li>${estudio.nombreCurso} - ${estudio.entidad} - ${estudio.anio}</li>`;
    }
}

function cargar_redes(redes, elemento = document.getElementById("lista_redes")){
    //recorre la lista de redes y los imprime en el html
    //puede recibir un elemento al cual se insertará o puede tener por defecto la lista de redes
    for (red of redes){
        elemento.innerHTML += `<li class="item_redes">
                                    <a href=${red.link} target="_blank" > 
                                        <img src=${red.imagen} alt=${red.nombreRed} title=${red.nombreRed}>  
                                    </a>
                                </li>`;
    }
}

function filtro_busqueda(lista, barraBusqueda = document.getElementById("id_buscador_herramientas")){

    //TRABAJAR EN LA BARRA DE BUSQUEDA 
    
    let resultado = document.getElementById('resultado');
    let busqueda = barraBusqueda.value;
    
    for(tecnologia of [...lista]){
        let claves = Object.keys(tecnologia);
        for(clave in claves){
            if(clave.includes(busqueda)){
                resultado.innerHTML += clave;
            }
        }
    }
    
}

window.addEventListener('load', function () {
    
    const estudios = [
        {'nombreCurso' : 'Introducción a Base de Datos y SQL', 'entidad' : 'EducaciónIT', 'anio': '2023'},
        {'nombreCurso' : 'Introducción a Java', 'entidad' : 'EducaciónIT', 'anio': '2023'},
        {'nombreCurso' : 'Desarrollo Web con HTML', 'entidad' : 'EducaciónIT', 'anio': '2023'},
        {'nombreCurso' : 'Introducción al paradigma de objetos', 'entidad' : 'EducaciónIT', 'anio': '2023'},]

    const redes = [
        {'nombreRed' : 'GMAIL', 'link' : 'mailto:diaz.matiash@gmail.com', 'imagen' : 'img/iconos/gmail.png'},
        {'nombreRed' : 'LinkedIn', 'link' : 'https://www.linkedin.com/in/matias-h-diaz-98a89123b/', 'imagen' : 'img/iconos/linkedin.png'},
        {'nombreRed' : 'Github', 'link' : 'https://github.com/MatiasHernanDiaz', 'imagen' : 'img/iconos/github.png'},
        {'nombreRed' : 'Discord', 'link' : false, 'imagen' : 'img/iconos/discord.png'}]
    
    const herramientas = [
        {'python' : ['proyecto 1', 'proyecto 2'], 'link' : 'www.google.com'},
        {'JavaScrip' : ['procto js 1', 'proyecto js 2'], 'link' : 'www.facebook.com'}]

    tipear("¡Hola! Soy MATIAS H. DIAZ", 200);
    
    carga_estudio(estudios, document.getElementById("lista_redes"));

    cargar_redes(redes);

    filtro_busqueda(herramientas, document.getElementById("id_busqueda_herramientas"));

});

