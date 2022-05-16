const fs = require('fs');

function readFile(path) {
  return fs.readFileSync(path, 'utf8');
}

console.log(readFile('talker.json'));

module.exports = readFile;