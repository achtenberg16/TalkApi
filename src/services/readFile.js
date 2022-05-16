const fs = require('fs');

function readFile(path) {
  return JSON.parse(fs.readFileSync(path, 'utf8'));
}

module.exports = readFile;