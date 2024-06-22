function converterTemperatura() {
    const de = document.getElementById('de-temperatura').value;
    const para = document.getElementById('para-temperatura').value;
    const valor = parseFloat(document.getElementById('valor-temperatura').value);
    let resultado = 0;

    if (de === 'celsius') {
        if (para === 'fahrenheit') {
            resultado = (valor * 9/5) + 32;
        } else if (para === 'kelvin') {
            resultado = valor + 273.15;
        } else {
            resultado = valor;
        }
    } else if (de === 'fahrenheit') {
        if (para === 'celsius') {
            resultado = (valor - 32) * 5/9;
        } else if (para === 'kelvin') {
            resultado = (valor - 32) * 5/9 + 273.15;
        } else {
            resultado = valor;
        }
    } else if (de === 'kelvin') {
        if (para === 'celsius') {
            resultado = valor - 273.15;
        } else if (para === 'fahrenheit') {
            resultado = (valor - 273.15) * 9/5 + 32;
        } else {
            resultado = valor;
        }
    }

    document.getElementById('resultado-temperatura').value = resultado;
}