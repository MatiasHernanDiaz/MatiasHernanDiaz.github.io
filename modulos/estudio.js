/*SECCION ESTUDIO*/

export function carga_estudio(estudios) {
    //recorre la lista estudio y los imprime en el html
    let lista_cursos = document.getElementById("lista_curso");
    for (const estudio of estudios) {
        lista_cursos.innerHTML += `<li>${estudio.nombreCurso} - ${estudio.entidad} - ${estudio.anio}</li>`;
    }
}