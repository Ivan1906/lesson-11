const argv = require('yargs').argv;

const { config } = require('dotenv');
config();

const PORT = process.env.PORT || 3000;

console.log("ivan");

console.log(argv.city);