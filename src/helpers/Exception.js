function Exception(message, status) {
  this.message = message;
  this.statusCode = status || 400;
}

module.exports = Exception;
