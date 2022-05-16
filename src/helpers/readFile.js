const fs = require('fs');

function readFile() {
  return JSON.parse(fs.readFileSync('talker.json', 'utf8'));
}

module.exports = readFile;