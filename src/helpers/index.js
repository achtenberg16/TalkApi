const readFile = require('./readFile');
const { getTalkerById } = require('./auxiliaryFuncitons');
const writeFile = require('./writeFile');
const Exception = require('./Exception');

module.exports = {
  readFile,
  getTalkerById,
  writeFile,
  Exception,
};