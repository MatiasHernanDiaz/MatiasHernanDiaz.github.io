/*SECCION CONTACTO */

export function cargar_redes(redes, elemento = document.getElementById("lista_redes")) {
    //recorre la lista de redes y los imprime en el html
    //puede recibir un elemento al cual se insertará o puede tener por defecto la lista de redes
    for (const red of redes) {
        elemento.innerHTML += `<li class="item_redes">
                                    <a href=${red.link ? red.link : '#sec_contacto'} target="_blank" > 
                                        <img class="img_redes" src=${red.imagen} alt=${red.nombreRed} title=${red.nombreRed}>
                                    </a>
                                </li>`;
    }
}