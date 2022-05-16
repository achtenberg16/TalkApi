const fs = require('fs');

function writeFile(text) {
fs.writeFileSync('talker.json', JSON.stringify(text));
}

module.exports = writeFile;