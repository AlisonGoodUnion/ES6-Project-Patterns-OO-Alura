var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

var tbody = document.querySelector('table tbody');

//submit do botao include
document.querySelector('.form').addEventListener('submit', function (event) {

    //quando recarregamos a página, perdemos a tr, com o preventDefault...
    //indicaremos ao js para não submeter o form e evitar o refresh na page.
    event.preventDefault();

    var tr = document.createElement('tr');

    campos.forEach(function (campo) {
        var td = document.createElement('td');
            td.textContent = campo.value;
        tr.appendChild(td);
    });

    var tdVolume = document.createElement('td');
        tdVolume.textContent = multiplicacao(campos[1].value, campos[2].value);
    tr.appendChild(tdVolume);

    tbody.appendChild(tr);
});

/**
 *
 * Sample Multiplication
 * @param number1
 * @param number2
 * @returns {number} result of multiplication
 * */
function multiplicacao(number1, number2) {
    return number1 * number2;
}

console.log(campos);
