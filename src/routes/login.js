const express = require('express');
const crypto = require('crypto');
const middlewares = require('../middlewares');
const { RESPONSE_CODE } = require('../helpers/constants');

const router = express.Router();

router.post('/', middlewares.validateLogin, (_req, res) => {
  res.status(RESPONSE_CODE.OK).json({ token: crypto.randomBytes(8).toString('hex') });
});

module.exports = router;