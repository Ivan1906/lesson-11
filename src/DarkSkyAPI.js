const request = require('request');

const getWeatherForLatLng = (lat, lng) => {

    var options = {
        method: 'GET',
        json: true,
        url: `https://api.darksky.net/forecast/${process.env.DARKSKY_KEY}/${lat},${lng}`,
        qs: {
            exclude: 'currently',
            lang: 'uk',
            units: 'si',
        }
    };

    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            console.log(body);
        });
    });
};

module.exports = {
    getWeatherForLatLng,
}