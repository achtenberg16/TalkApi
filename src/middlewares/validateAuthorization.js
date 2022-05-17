const { Exception } = require('../helpers');
const { MESSAGES, RESPONSE_CODE } = require('../helpers/constants');

function validateAuthorization(req, _res, next) {
  const { authorization } = req.headers;
  if (!authorization) throw new Exception(MESSAGES.tokenNotFound, RESPONSE_CODE.UNAUTHORIZED);
  if (authorization.length !== 16) { 
    throw new Exception(MESSAGES.tokenIsInvalid, RESPONSE_CODE.UNAUTHORIZED); 
}
  next();
}

module.exports = validateAuthorization;