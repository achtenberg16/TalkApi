const express = require('express');
const { readFile, writeFile, filterTalkersByName } = require('../helpers');
const middlewares = require('../middlewares/index');
const { RESPONSE_CODE } = require('../helpers/constants');

const router = express.Router();

router.get('/search', middlewares.validateAuthorization, (req, res) => {
  const { q: query } = req.query;
  const talkers = readFile(); 
  if (!query) return res.status(RESPONSE_CODE.OK).json(talkers);
  const talkersFiltered = filterTalkersByName(talkers, query);
  res.status(RESPONSE_CODE.OK).json(talkersFiltered);
});

router.get('/:id', middlewares.validateRequestId, (_req, res) => (
  res.status(RESPONSE_CODE.OK).json(res.talker)));

router.get('/', (_req, res) => {
  const talkers = readFile();
  if (!talkers || talkers === '') {
    return res.status(RESPONSE_CODE.OK).json({});
  }
  return res.status(RESPONSE_CODE.OK).json(talkers);
});

router.use(middlewares.validateAuthorization);

router.post('/', middlewares.validatePostTalker, (req, res) => {
  const talkers = readFile();
  req.body.id = talkers.length + 1;
  talkers.push(req.body);
  writeFile(talkers);
  res.status(RESPONSE_CODE.CREATED).json(req.body);
});

router.put('/:id', middlewares.validatePostTalker, (req, res) => {
  const { id } = req.params;
  const talkers = readFile();
  req.body.id = +id;
  
  const newTalkers = talkers.map((talker) => (+talker.id === +id ? req.body : talker));
  writeFile(newTalkers);

  res.status(RESPONSE_CODE.OK).json(req.body);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const talkers = readFile();
  writeFile(talkers.filter((talker) => +talker.id !== +id));

  res.status(RESPONSE_CODE.NO_CONTENT).end();
});

module.exports = router;