const readFile = require('./readFile');

function getTalkerById(id) {
  const talkers = readFile('talker.json');
  return talkers.find((talker) => +talker.id === +id);
}

module.exports = {
  getTalkerById,
};