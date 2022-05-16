const express = require('express');
const { readFile } = require('../services');
const middlewares = require('../middlewares/index');

const router = express.Router();

router.get('/:id', middlewares.validateRequestId, (_req, res) => res.status(200).json(res.talker));

router.get('/', (_req, res) => {
  const talkers = readFile('talker.json');
  if (!talkers || talkers === '') {
    return res.status(200).json([]);
  }
  return res.status(200).json(talkers);
});

router.use(middlewares.handleError);

module.exports = router;