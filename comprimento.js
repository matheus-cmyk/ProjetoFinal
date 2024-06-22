function convertLength() {
    const fromUnit = document.getElementById("fromLength").value;
    const toUnit = document.getElementById("toLength").value;
    const value = parseFloat(document.getElementById("lengthValue").value);
    let result;

    if (isNaN(value)) {
        alert("Por favor, insira um valor numérico.");
        return;
    }

    const conversionFactors = {
        "metros": 1,
        "centímetros": 100,
        "milímetros": 1000,
        "polegadas": 39.3701
    };

    result = value * conversionFactors[toUnit] / conversionFactors[fromUnit];
    document.getElementById("lengthResult").value = result;
}