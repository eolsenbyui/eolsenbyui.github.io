'use strict';

const fs = require('fs');
const words = require("profane-words/words.json");

let encoded = [];

for (let word of words) {
    let b64 = new Buffer.from(word).toString('base64');
    encoded.push(b64);
}

let output = JSON.stringify(encoded, null, 2);

fs.writeFileSync('./offensive-encoded.json', output);
