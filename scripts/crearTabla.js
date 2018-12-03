function CrearTabla() {
    let tabla = document.createElement('table');
    tabla.setAttribute('id', 'miTabla');
    for (let f = 0; f < 5; f++) {
        let tr = document.createElement('tr');
        for (let c = 0; c < 5; c++) {
            let td = document.createElement('td');
            let texto = document.createTextNode(`posicion ${ f }. ${ c }`);
            let entrada = document.createElement('input');
            entrada.setAttribute('type', 'number');
            td.appendChild(entrada);
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
    document.body.appendChild(tabla);
}