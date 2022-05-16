const express = require('express');
const { readFile, writeFile } = require('../services');
const middlewares = require('../middlewares/index');

const router = express.Router();

router.get('/:id', middlewares.validateRequestId, (_req, res) => res.status(200).json(res.talker));

router.get('/', (_req, res) => {
  const talkers = readFile('talker.json');
  if (!talkers || talkers === '') {
    return res.status(200).json({});
  }
  return res.status(200).json(talkers);
});

router.post('/', middlewares.validatePostTalker, (req, res) => {
  const talkers = readFile('talker.json');
  req.body.id = talkers.length + 1;
  talkers.push(req.body);
  writeFile(talkers);
  console.log(readFile('talker.json'));
  res.status(201).json(req.body);
});

module.exports = router;