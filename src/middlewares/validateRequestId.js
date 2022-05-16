const { getTalkerById } = require('../services'); 

function validateRequestId(req, res, next) {
const { id } = req.params;
console.log(id);
if (!getTalkerById(id)) {
  next({ statusCode: 404, message: 'Pessoa palestrante não encontrada' });
}

res.talker = getTalkerById(id);
next();
}

module.exports = validateRequestId;