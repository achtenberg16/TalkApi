const { getTalkerById } = require('../helpers'); 
const { Exception } = require('../helpers');
const { MESSAGES, RESPONSE_CODE } = require('../helpers/constants');

function validateRequestId(req, res, next) {
const { id } = req.params;
if (!getTalkerById(id)) {
  throw new Exception(MESSAGES.talkerNotFound, RESPONSE_CODE.NOT_FOUND);
}
res.talker = getTalkerById(id);
next();
}

module.exports = validateRequestId;