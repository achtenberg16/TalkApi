const { RESPONSE_CODE } = require('./constants');

class Exception extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode || RESPONSE_CODE.BAD_REQUEST;
  }
}

module.exports = Exception;
