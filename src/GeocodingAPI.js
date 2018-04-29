const request = require('request');

const getLatLngForAddress = (address) => {

    var options = {
        method: 'GET',
        json: true,
        url: 'https://maps.googleapis.com/maps/api/geocode/json',
        qs: {
            address,
            key: process.env.GEOLOCATION_KEY
        },
    };
    
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {

            let strErr = error ? error : 
                body.status === 'ZERO_RESULTS' 
                    ? 'The city name was entered incorrectly' : '';
            
            return body.status !== 'ZERO_RESULTS' 
                        ? resolve(body.results[0].geometry.location) 
                        : reject(strErr)
        }
        );
    });
};

module.exports = {
    getLatLngForAddress,
}