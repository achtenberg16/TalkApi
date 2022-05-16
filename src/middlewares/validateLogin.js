const { Exception } = require('../services');

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
);

function validatePassword(password) {
  if (!password) throw new Exception('O campo "password" é obrigatório');
  if (password.length < 6) throw new Exception('O "password" deve ter pelo menos 6 caracteres'); 
}

function validateEmail(email) {
  if (!email) throw new Exception('O campo "email" é obrigatório'); 
  if (!(emailRegex.test(email))) {
    throw new Exception(
    'O "email" deve ter o formato "email@email.com"',
  ); 
} 
}

function validateLogin(req, _res, next) {
const { email, password } = req.body;
validateEmail(email);
validatePassword(password);
next();
}

module.exports = validateLogin;