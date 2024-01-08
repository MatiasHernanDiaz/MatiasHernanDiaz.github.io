
//USADA EN LA PRESENTACION
function tipear(cadena, ms) {
    //escribe letra por letra la cadena por cada milisegundo (ms)

    let hola = document.getElementById("hola");
    let index = 0;

    let intervalId = setInterval(function(){
        hola.innerHTML +=cadena[index++];
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
        elemento.innerHTML += `<li><a href=${red.link}> <img src=${red.imagen}/> </a></li>`;
    }
}

window.addEventListener('load', function () {
    
    let estudios = [
        {"nombreCurso" : "Introducción a Base de Datos y SQL", "entidad" : "EducaciónIT", "anio": "2023"},
        {"nombreCurso" : "Introducción a Java", "entidad" : "EducaciónIT", "anio": "2023"},
        {"nombreCurso" : "Desarrollo Web con HTML", "entidad" : "EducaciónIT", "anio": "2023"},
        {"nombreCurso" : "Introducción al paradigma de objetos", "entidad" : "EducaciónIT", "anio": "2023"},]

    let redes = [
        {"nombreRed" : "GMAIL", "link" : false, "imagen" : "img/iconos/gmail.png"},
        {"nombreRed" : "LinkedIn", "link" : "https://www.linkedin.com/in/matias-h-diaz-98a89123b/", "imagen" : "img/iconos/linkedin.png"},
        {"nombreRed" : "Github", "link" : "https://github.com/MatiasHernanDiaz", "imagen" : "img/iconos/github.png"},
        {"nombreRed" : "Discord", "link" : false, "imagen" : "img/iconos/discord.png"}]
    
    tipear("¡Hola! Soy MATIAS H. DIAZ", 200);
    
    carga_estudio(estudios, document.getElementById("lista_redes"));

    cargar_redes(redes);

});

