const { readFile, writeFile } = require('./handleFile');
const { getTalkerById, filterTalkersByName } = require('./auxiliaryFuncitons');
const Exception = require('./Exception');

module.exports = {
  readFile,
  getTalkerById,
  writeFile,
  Exception,
  filterTalkersByName,
};