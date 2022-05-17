const fs = require('fs');

function readFile() {
  return JSON.parse(fs.readFileSync('talker.json', 'utf8'));
}

function writeFile(text) {
fs.writeFileSync('talker.json', JSON.stringify(text));
}

module.exports = {
  writeFile, readFile,
};
