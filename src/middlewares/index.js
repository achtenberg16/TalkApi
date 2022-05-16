const validateRequestId = require('./validateRequestId');
const handleError = require('./handleError');
const validateLogin = require('./validateLogin');
const validatePostTalker = require('./validatePostTalker');
const validateAuthorization = require('./validateAuthorization');

module.exports = {
  validateRequestId,
  handleError,
  validateLogin,
  validatePostTalker,
  validateAuthorization,
};