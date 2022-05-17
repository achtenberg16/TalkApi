const { Exception } = require('../helpers');
const { MESSAGES } = require('../helpers/constants');

function validateAuthorization(req, _res, next) {
  const { authorization } = req.headers;
  if (!authorization) throw new Exception(MESSAGES.tokenNotFound, 401);
  if (authorization.length !== 16) throw new Exception(MESSAGES.tokenIsInvalid, 401);
  next();
}

module.exports = validateAuthorization;