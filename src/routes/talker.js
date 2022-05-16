const express = require('express');
const { readFile } = require('../services');
const { validateRequestId } = require('../middlewares/index');

const router = express.Router();

router.get('/:id', validateRequestId, (_req, res) => res.status(200).json(res.talker));

router.get('/', (_req, res) => {
  const talkers = readFile('talker.json');
  if (!talkers || talkers === '') {
    return res.status(200).json([]);
  }
  return res.status(200).json(talkers);
});

module.exports = router;