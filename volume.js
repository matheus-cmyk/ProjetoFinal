function converterVolume() {
    const de = document.getElementById('de-volume').value;
    const para = document.getElementById('para-volume').value;
    const valor = parseFloat(document.getElementById('valor-volume').value);
    let resultado = 0;

    if (de === 'litros') {
        if (para === 'mililitros') {
            resultado = valor * 1000;
        } else if (para === 'galoes') {
            resultado = valor * 0.264172;
        } else {
            resultado = valor;
        }
    } else if (de === 'mililitros') {
        if (para === 'litros') {
            resultado = valor / 1000;
        } else if (para === 'galoes') {
            resultado = valor * 0.000264172;
        } else {
            resultado = valor;
        }
    } else if (de === 'galoes') {
        if (para === 'litros') {
            resultado = valor / 0.264172;
        } else if (para === 'mililitros') {
            resultado = valor * 3785.41;
        } else {
            resultado = valor;
        }
    }

    document.getElementById('resultado-volume').value = resultado;
}