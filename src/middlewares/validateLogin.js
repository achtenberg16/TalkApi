const { Exception } = require('../helpers');
const { MESSAGES } = require('../helpers/constants');

const EMAIL_REGEX = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
);

function validatePassword(password) {
  if (!password) throw new Exception(MESSAGES.passwordIsRequired);
  if (password.length < 6) throw new Exception(MESSAGES.passwordIsInvalid); 
}

function validateEmail(email) {
  if (!email) throw new Exception(MESSAGES.emailIsRequired); 
  if (!(EMAIL_REGEX.test(email))) {
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