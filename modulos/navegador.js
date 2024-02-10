
/*NAVEGADOR */

export function toggleClass(elem, className) {
    if (elem.className.indexOf(className) !== -1) {
        elem.className = elem.className.replace(className, '');
    }
    else {
        elem.className = elem.className.replace(/\s+/g, ' ') + ' ' + className;
    }

    return elem;
}

export function toggleDisplay(elem) {
    const curDisplayStyle = elem.style.display;

    if (curDisplayStyle === 'none' || curDisplayStyle === '') {
        elem.style.display = 'block';
    }
    else {
        elem.style.display = 'none';
    }
}

export function invertirFlex(elemento) {
    if (elemento.style.flexDirection === 'row') {
        elemento.style.flexDirection = 'column';
    }
    else {
        elemento.style.flexDirection = 'row';
    }
}

export function toggleMenuDisplay(e) {
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


