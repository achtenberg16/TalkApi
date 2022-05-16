const express = require('express');
const { readFile } = require('../services');

const router = express.Router();

router.get('/', (_req, res) => {
  const talkers = JSON.parse((readFile('talker.json')));
  if (!talkers || talkers === '') {
    return res.status(200).json([]);
  }
  return res.status(200).json(talkers);
});

module.exports = router;