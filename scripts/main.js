function limpiar() {
    let main = document.getElementById('main');
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

function gaussSeidelBoton() {
    limpiar();
    const main = document.getElementById('main');
    const titulo = document.createElement('h2');
    const texto = document.createElement('p');
    const entrada = document.createElement('input');
    const boton = document.createElement('button');

    titulo.setAttribute('class', 'titulo');
    titulo.textContent = 'Gauss Seidel';

    texto.textContent = 'En análisis numérico el método de Gauss-Seidel es un método iterativo utilizado para resolver sistemas de ecuaciones lineales. El método se llama así en honor a los matemáticos alemanes Carl Friedrich Gauss y Philipp Ludwig von Seidel y es similar al método de Jacobi.';

    entrada.setAttribute('type', 'number');
    entrada.setAttribute('id', 'entradaGauss');

    boton.setAttribute('class', 'boton');
    boton.setAttribute('onclick', 'crearMatriz("entradaGauss")');
    boton.textContent = 'Crear Matriz';

    main.appendChild(titulo);
    main.appendChild(texto);
    main.appendChild(entrada);
    main.appendChild(boton);
}

function crearMatriz(id) {
    const tablaPrevia = document.getElementById('Tabla');
    if (tablaPrevia) {
        tablaPrevia.remove();
    }

    const orden = document.getElementById(id);
    const o = parseInt(orden.value);
    const main = document.getElementById('main');
    const tabla = document.createElement('table');
    tabla.setAttribute('id', 'Tabla');

    for (let f = 0; f < o; f++) {
        const tr = document.createElement('tr');
        for (let c = 0; c < o; c++) {
            const td = document.createElement('td');
            const texto = document.createTextNode(`posicion ${ f }. ${ c }`);
            const entrada = document.createElement('input');
            entrada.setAttribute('type', 'number');
            td.appendChild(entrada);
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
    main.appendChild(tabla);
}

function ejemplo() {
    let a = document.getElementById("main");
    let b = document.createElement('h2');
    b.setAttribute('class', 'titulo');
    let c = document.createElement('p');
    b.textContent = "ajaaaaaaaaaaa";
    c.textContent = 'un ejemplo para ver si funciona insertar varias capas a la vez';
    a.appendChild(b);
    a.appendChild(c);
}