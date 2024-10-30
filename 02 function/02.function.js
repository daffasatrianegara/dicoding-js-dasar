// handler undefined value 1
function convertCelciusToFahrenheit(temperature) {
    if(temperature !== undefined) {
        const temperatureInFahrenheit = (9 / 5) * temperature + 32;

        console.log("Hasil konversi:", temperatureInFahrenheit + "F");
    }
}

convertCelciusToFahrenheit(50)

// handler undefined value 2
function convertCelciusToFahrenheit2(temperature = 50) {
    const temperatureInFahrenheit = (9 / 5) * temperature + 32;

    console.log("Hasil konversi:", temperatureInFahrenheit + "F");
}

convertCelciusToFahrenheit2()