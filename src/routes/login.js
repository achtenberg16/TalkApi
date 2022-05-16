const express = require('express');

const crypto = require('crypto');

const router = express.Router();

router.post('/', (_req, res) => {
  res.status(200).json({ token: crypto.randomBytes(8).toString('hex') });
});

module.exports = router;