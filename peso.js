function convertWeight() {
    const fromUnit = document.getElementById("fromWeight").value;
    const toUnit = document.getElementById("toWeight").value;
    const value = parseFloat(document.getElementById("weightValue").value);
    let result;

    if (isNaN(value)) {
        alert("Por favor, insira um valor numérico.");
        return;
    }

    const conversionFactors = {
        "quilogramas": 1,
        "gramas": 1000,
        "libras": 2.20462
    };

    result = value * conversionFactors[toUnit] / conversionFactors[fromUnit];
    document.getElementById("weightResult").value = result;
}