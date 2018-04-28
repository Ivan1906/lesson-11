const yargs = require('yargs');
const { config } = require('dotenv');
const { getLatLngForAddress } = require('./src/GeocodingAPI');
const { getWeatherForLatLng } = require('./src/DarkSkyAPI');

config();
const { city = '' } = yargs.argv;

async function weather() {
    const { lat, lng } = await getLatLngForAddress(city);
    const arrayWeather = await getWeatherForLatLng(lat, lng);
    return arrayWeather;
};

weather()
    .then(arrayWeather => console.log(arrayWeather))
    .catch(error => console.log(error));