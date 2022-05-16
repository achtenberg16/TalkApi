const validateDataFormat = /^\d{2}\/\d{2}\/\d{4}$/; 

function validateToken(token) {
if (!token) return ({ statusCode: 401, message: 'Token não encontrado' });
if (token.length !== 16) return ({ statusCode: 401, message: 'Token inválido' });
}

function validateName(name) {
if (!name) return ({ message: 'O campo "name" é obrigatório' });
if (name.length < 3) return ({ message: 'O "name" deve ter pelo menos 3 caracteres' });
}

function validateAge(age) {
if (!age) return ({ message: 'O campo "age" é obrigatório' });
if (age < 18) return ({ message: 'A pessoa palestrante deve ser maior de idade' });
}

function validateRate(rate) {
  const maxRate = 5;
  if (rate < 1 || rate > maxRate) {
 return ({
    message: 'O campo "rate" deve ser um inteiro de 1 à 5',
  }); 
}
}

function validateTalk(talk) {
  if (!talk || !talk.watchedAt || !talk.rate) {
 return (
    { message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' }); 
}
  if (!validateDataFormat.test(talk.watchedAt)) {
  return ({
    message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
  });
}
}

function validateConditions(authorization, req) {
const conditions = validateToken(authorization)
 || validateName(req.body.name) || validateAge(req.body.age) 
 || validateTalk(req.body.talk) || validateRate(req.body.talk.rate);
 return conditions;
}

function validatePostTalker(req, res, next) {
const { authorization } = req.headers;
const formIsInvalid = validateConditions(authorization, req);
if (formIsInvalid) return next(formIsInvalid);
next();
}

module.exports = validatePostTalker;