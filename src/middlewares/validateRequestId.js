const { getTalkerById } = require('../helpers'); 
const { Exception } = require('../helpers');
const { MESSAGES } = require('../helpers/constants');

function validateRequestId(req, res, next) {
const { id } = req.params;
if (!getTalkerById(id)) {
  throw new Exception(MESSAGES.talkerNotFound, 404);
}
res.talker = getTalkerById(id);
next();
}

module.exports = validateRequestId;