const { Exception } = require('../helpers');
const { MESSAGES, REGEX_EXPRESSION } = require('../helpers/constants');

function validatePersonInfo(age, name) {
  if (!name) throw new Exception(MESSAGES.nameIsRequired);
  if (name.length < 3) throw new Exception(MESSAGES.nameIsInvalid);
  if (!age) throw new Exception(MESSAGES.ageIsRequired);
  if (age < 18) throw new Exception(MESSAGES.ageIsInvalid);
}

function validateRate(rate) {
  const MAX_RATE = 5;
  if (rate < 1 || rate > MAX_RATE) throw new Exception(MESSAGES.rateIsInvalid);
}

function validateTalk(talk) {
  if (!talk || !talk.watchedAt || talk.rate === undefined) {
   throw new Exception(MESSAGES.talkIsInvalid); 
}
  if (!REGEX_EXPRESSION.data.test(talk.watchedAt)) throw new Exception(MESSAGES.watchedAtIsInvalid);
}

function validatePostTalker(req, _res, next) {
validatePersonInfo(req.body.age, req.body.name);
validateTalk(req.body.talk);
validateRate(req.body.talk.rate);
next();
}

module.exports = validatePostTalker;