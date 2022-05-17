const { RESPONSE_CODE } = require('./constants');

function Exception(message, status) {
  this.message = message;
  this.statusCode = status || RESPONSE_CODE.BAD_REQUEST;
}

module.exports = Exception;
