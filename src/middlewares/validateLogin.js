const { Exception } = require('../helpers');
const { MESSAGES, REGEX_EXPRESSION } = require('../helpers/constants');

function validatePassword(password) {
  if (!password) throw new Exception(MESSAGES.passwordIsRequired);
  if (password.length < 6) throw new Exception(MESSAGES.passwordIsInvalid); 
}

function validateEmail(email) {
  if (!email) throw new Exception(MESSAGES.emailIsRequired); 
  if (!(REGEX_EXPRESSION.email.test(email))) {
    throw new Exception(MESSAGES.emailIsInvalid); 
} 
}

function validateLogin(req, _res, next) {
const { email, password } = req.body;
validateEmail(email);
validatePassword(password);
next();
}

module.exports = validateLogin;