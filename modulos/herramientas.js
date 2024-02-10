/*SECCION HERRAMIENTAS */

export function cargarHerramientas(lista, elemento) {
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


export function cargarImagenes(listaImg){
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


export function subFiltro(listaHerramientas, valor, total, orden) {
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

export function filtro(event, listaHerramientas) {
    //tomando el valor del input recorre la lista de herramientas y se fija con cual coincide
    //y la imprime en una lista.
    const elemento = event.currentTarget;
    const radios = document.querySelectorAll('input[name="tipo_busqueda"]');
    const cantidad = document.querySelector('#checking_resultado_herramienta');
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
    cantidad.textContent = `Resultados: ${total}`;
};

export function todos(event) {
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