const { getTalkerById } = require('../services'); 

function validateRequestId(req, res, next) {
const { id } = req.params;
console.log(id);
if (!getTalkerById(id)) {
  return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
}

res.talker = getTalkerById(id);
next();
}

module.exports = validateRequestId;