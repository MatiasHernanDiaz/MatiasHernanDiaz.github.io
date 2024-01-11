
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
                                        <img class="img_redes" src=${red.imagen} alt=${red.nombreRed} title=${red.nombreRed}>
                                        </a>
                                        <p class="noLink">${red.noLink}</p> 
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


function toggleClass(elem,className){
	if (elem.className.indexOf(className) !== -1){
		elem.className = elem.className.replace(className,'');
	}
	else{
		elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
	}
	
	return elem;
}

function toggleDisplay(elem){
	const curDisplayStyle = elem.style.display;			
				
	if (curDisplayStyle === 'none' || curDisplayStyle === ''){
		elem.style.display = 'block';
	}
	else{
		elem.style.display = 'none';
	}
}

function invertirFlex(elemento){
    if(elemento.style.flexDirection === 'row'){
        elemento.style.flexDirection = 'column';
    }
    else{
        elemento.style.flexDirection = 'row';
    }
}

function toggleMenuDisplay(e){
	const dropdown = e.currentTarget.parentNode;
	const menu = dropdown.querySelector('.menu');
	const icon = dropdown.querySelector('.fa-angle-right');
    const rayas = document.getElementById('rayas');

    if(dropdown.style.width === "auto"){
        dropdown.style.width = "5%";
        invertirFlex(rayas);
    }
    else{
        dropdown.style.width = "auto";
        invertirFlex(rayas);
    }
    
	toggleClass(menu,'hide');
	toggleClass(icon,'rotate-90');
}

window.addEventListener('load', function () {
    
    const estudios = [
        {'nombreCurso' : 'Introducción a Base de Datos y SQL', 'entidad' : 'EducaciónIT', 'anio': '2023'},
        {'nombreCurso' : 'Introducción a Java', 'entidad' : 'EducaciónIT', 'anio': '2023'},
        {'nombreCurso' : 'Desarrollo Web con HTML', 'entidad' : 'EducaciónIT', 'anio': '2023'},
        {'nombreCurso' : 'Introducción al paradigma de objetos', 'entidad' : 'EducaciónIT', 'anio': '2023'},]

    const redes = [
        {'nombreRed' : 'GMAIL', 'link' : 'mailto:diaz.matiash@gmail.com', 'imagen' : 'img/iconos/gmail.png', 'noLink' : 'diaz.matiash@gmail.com'},
        {'nombreRed' : 'LinkedIn', 'link' : 'https://www.linkedin.com/in/matias-h-diaz-98a89123b/', 'imagen' : 'img/iconos/linkedin.png', 'noLink': 'Matias Hernan Diaz'},
        {'nombreRed' : 'Github', 'link' : 'https://github.com/MatiasHernanDiaz', 'imagen' : 'img/iconos/github.png', 'noLink' : 'MatiasHernanDiaz'},
        {'nombreRed' : 'Discord', 'link' : false, 'imagen' : 'img/iconos/discord.png', 'noLink' : 'matiashdiaz'}]
    
    const herramientas = [
        {'python' : ['proyecto 1', 'proyecto 2'], 'link' : 'www.google.com'},
        {'JavaScrip' : ['procto js 1', 'proyecto js 2'], 'link' : 'www.facebook.com'}]

    tipear("¡Hola! Soy MATIAS H. DIAZ", 200);
    
    carga_estudio(estudios, document.getElementById("lista_redes"));

    cargar_redes(redes);

    //filtro_busqueda(herramientas, document.getElementById("id_busqueda_herramientas"));

    //obtiene elementos
    const dropdownTitle = document.querySelector('.dropdown .title');
    const dropdownOptions = document.querySelectorAll('.dropdown .option');

    //vincula listeners a estos elementos
    dropdownTitle.addEventListener('click', toggleMenuDisplay);


});

