const express = require('express');
const { readFile, writeFile } = require('../services');
const middlewares = require('../middlewares/index');

const router = express.Router();

router.get('/search', middlewares.validateAuthorization, (req, res) => {
  const { q: query } = req.query;
  console.log('roduo');
  const talkers = readFile(); 
  if (!query) return res.status(200).json(talkers);
  const talkersFiltered = talkers.filter((talker) => talker.name.toLowerCase()
  .includes(query.toLowerCase()));
  res.status(200).json(talkersFiltered);
});

router.get('/:id', middlewares.validateRequestId, (_req, res) => res.status(200).json(res.talker));

router.get('/', (req, res) => {
  const talkers = readFile();
  if (!talkers || talkers === '') {
    return res.status(200).json({});
  }
  return res.status(200).json(talkers);
});

router.use(middlewares.validateAuthorization);

router.post('/', middlewares.validatePostTalker, (req, res) => {
  const talkers = readFile();
  req.body.id = talkers.length + 1;
  talkers.push(req.body);
  writeFile(talkers);
  res.status(201).json(req.body);
});

router.put('/:id', middlewares.validatePostTalker, (req, res) => {
  const { id } = req.params;
  const talkers = readFile();
  req.body.id = +id;
  const newTalkers = talkers.map((talker) => (+talker.id === +id ? req.body : talker));
  writeFile(newTalkers);
  res.status(200).json(req.body);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const talkers = readFile();

  writeFile(talkers.filter((talker) => +talker.id !== +id));
  res.status(204).end();
});

module.exports = router;