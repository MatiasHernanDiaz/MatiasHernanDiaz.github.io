
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
    let lista_cursos = document.getElementById("lista_curso");
    for (estudio of estudios){
        lista_cursos.innerHTML += `<li>${estudio.nombreCurso} - ${estudio.entidad} - ${estudio.anio}</li>`;
    }
}

window.addEventListener('load', function () {
    
    let estudios = [
        {"nombreCurso" : "Introducción a Base de Datos y SQL", "entidad" : "EducaciónIT", "anio": "2023"},
        {"nombreCurso" : "Introducción a Java", "entidad" : "EducaciónIT", "anio": "2023"},
        {"nombreCurso" : "Desarrollo Web con HTML", "entidad" : "EducaciónIT", "anio": "2023"},
        {"nombreCurso" : "Introducción al paradigma de objetos", "entidad" : "EducaciónIT", "anio": "2023"},]
    
    tipear("¡Hola! Soy MATIAS H. DIAZ", 200);
    
    carga_estudio(estudios);

});

