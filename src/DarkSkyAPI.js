const request = require('request');

const getWeatherForLatLng = (lat, lng) => {

    var options = {
        method: 'GET',
        json: true,
        url: `https://api.darksky.net/forecast/${process.env.DARKSKY_KEY}/${lat},${lng}`,
        qs: {
            exclude: 'hourly,daily,flags',
            lang: 'uk',
            units: 'si',
        }
    };

    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => !error 
            ? resolve(body.currently) 
            : reject(error)
        );
    });
};

module.exports = {
    getWeatherForLatLng,
}