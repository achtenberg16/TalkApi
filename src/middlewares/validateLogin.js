const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
);

function validateFormatEmail(email) {
return emailRegex.test(email);
}

function validatePassword(password) {
  if (!password) return ({ message: 'O campo "password" é obrigatório' });
  if (password.length < 6) return ({ message: 'O "password" deve ter pelo menos 6 caracteres' }); 
}

function validateEmail(email) {
  if (!email) return ({ message: 'O campo "email" é obrigatório' }); 
if (!(validateFormatEmail(email))) {
 return ({
  message: 'O "email" deve ter o formato "email@email.com"',
}); 
} 
}

function validateLogin(req, _res, next) {
const { email, password } = req.body;
const EmailIsInvalid = validateEmail(email);
const passwordIsInvalid = validatePassword(password);
if (EmailIsInvalid) next(EmailIsInvalid);
if (passwordIsInvalid) next(passwordIsInvalid);
next();
}

module.exports = validateLogin;