require('dotenv').config();
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getWeather(city) {
    const apiKey = process.env.WEATHER_API_KEY;
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (e) {
        throw e;
    }
}

async function main() {
    rl.question('Masukkan nama kota: ', async (city) => {
        try {
            console.log(`Mengambil data cuaca untuk kota: ${city}...`);
            const weatherData = await getWeather(city);
            const temperatue = weatherData.current.temp_c;
    
            console.log(`Cuaca di ${city}: ${temperatue}°C`);
        } catch (e) {
            console.error(`Terjadi kesalahan: ${e.message}`);
        } finally {
            console.log('Program selesai dijalankan.')
        }
    });
}

main();