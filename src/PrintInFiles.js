const fs = require('fs');

const printInFile = (data, error, filename) => {
    let writeStream = fs.createWriteStream(`${filename}.txt`);

    if (data !== undefined)
        Object.entries(data).map(weather => 
            writeStream.write(`${weather[0]} — ${weather[1]}\n`)
        );

    if (error !== undefined)
        writeStream.write(error);
    
    writeStream.end();
}

module.exports = {
    printInFile,
}