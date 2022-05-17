const { readFile } = require('./handleFile');

function getTalkerById(id) {
  const talkers = readFile('talker.json');
  return talkers.find((talker) => +talker.id === +id);
}

function filterTalkersByName(talkers, query) {
 return talkers.filter((talker) => talker.name.toLowerCase()
.includes(query.toLowerCase()));
}

module.exports = {
  getTalkerById,
  filterTalkersByName,
};