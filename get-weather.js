const yargs = require('yargs');
const { config } = require('dotenv');

const { getLatLngForAddress } = require('./src/GeocodingAPI');
const { getWeatherForLatLng } = require('./src/DarkSkyAPI');
const { printInFile } = require('./src/PrintInFiles');
const { nameFilesForWrite, strMessage } = require('./src/values');

config();
const { city } = yargs.argv;

if (city !== undefined) {
    async function weather() {
        const { lat, lng } = await getLatLngForAddress(city);
        const weatherCity = await getWeatherForLatLng(lat, lng);
        return weatherCity;
    };

    weather()
        .then(weatherCity => {
            console.log(strMessage.success);
            printInFile(weatherCity, undefined, nameFilesForWrite.success)
        })
        .catch(error => {
            console.log(strMessage.error);
            printInFile(undefined, error, nameFilesForWrite.error);
        });
} else {
    console.log(strMessage.error);
    printInFile(undefined, strMessage.notParam, nameFilesForWrite.error);
}