const fs = require("fs");
const request = require("request");

module.exports = (keyword, resources) => {
    let count = 0;
    resources.forEach(res => {
        let country;
        switch (count) {
            case 0:
                country = "-us";
                break;
            case 1:
                country = "-uk";
                break;
            case 2:
                country = "-au";
                break;
        }

        const temporaryFile = fs.createWriteStream(`C:/Users/Enes/Documents/tureng/${keyword}${country}.mp3`);
        const req = request(res);
        req.on('data', chunk => {
            temporaryFile.write(chunk);
        })
        count++;
    })
}
