const MESSAGES = {
  emailIsRequired: 'O campo "email" é obrigatório',
  emailIsInvalid: 'O "email" deve ter o formato "email@email.com"',
  passwordIsRequired: 'O campo "password" é obrigatório',
  passwordIsInvalid: 'O "password" deve ter pelo menos 6 caracteres',
  nameIsRequired: 'O campo "name" é obrigatório',
  nameIsInvalid: 'O "name" deve ter pelo menos 3 caracteres',
  ageIsRequired: 'O campo "age" é obrigatório',
  ageIsInvalid: 'A pessoa palestrante deve ser maior de idade',
  rateIsInvalid: 'O campo "rate" deve ser um inteiro de 1 à 5',
  talkIsInvalid: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
  watchedAtIsInvalid: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
  talkerNotFound: 'Pessoa palestrante não encontrada',
  tokenNotFound: 'Token não encontrado',
  tokenIsInvalid: 'Token inválido',
};

const REGEX_EXPRESSION = {
  email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  data: /^\d{2}\/\d{2}\/\d{4}$/,
};

const RESPONSE_CODE = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
};

module.exports = { MESSAGES, REGEX_EXPRESSION, RESPONSE_CODE };