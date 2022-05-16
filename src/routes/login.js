const express = require('express');
const crypto = require('crypto');
const middlewares = require('../middlewares');

const router = express.Router();

router.post('/', middlewares.validateLogin, (_req, res) => {
  res.status(200).json({ token: crypto.randomBytes(8).toString('hex') });
});

module.exports = router;