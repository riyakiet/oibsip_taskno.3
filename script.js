document.getElementById('convertButton').addEventListener('click', function() {
    const temperature = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.getElementById('unitSelect').value;
    let result = '';

    if (isNaN(temperature)) {
        result = 'Please enter a valid number';
    } else {
        if (unit === 'celsius') {
            result = `${temperature}°C = ${(temperature * 9/5) + 32}°F = ${(temperature + 273.15)}K`;
        } else if (unit === 'fahrenheit') {
            result = `${temperature}°F = ${((temperature - 32) * 5/9)}°C = ${((temperature - 32) * 5/9 + 273.15)}K`;
        } else if (unit === 'kelvin') {
            result = `${temperature}K = ${(temperature - 273.15)}°C = ${(temperature * 9/5 - 459.67)}°F`;
        }
    }

    document.getElementById('result').innerText = result;
    document.getElementById('resultArea').style.display = 'block';
});
