const { readFile } = require('./handleFile');

function getTalkerById(id) {
  const talkers = readFile('talker.json');
  return talkers.find((talker) => +talker.id === +id);
}

module.exports = {
  getTalkerById,
};