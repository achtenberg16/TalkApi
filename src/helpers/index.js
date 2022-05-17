const { readFile, writeFile } = require('./handleFile');
const { getTalkerById } = require('./auxiliaryFuncitons');
const Exception = require('./Exception');

module.exports = {
  readFile,
  getTalkerById,
  writeFile,
  Exception,
};