const express = require('express');
const { generateToken } = require('../middlewares/helpers');
const registrationValidator = require('../middlewares/signUpValidator');

const router = express.Router();

router.post('/', registrationValidator, (_req, res) => {
  return res
    .status(200)
    .json({ message: generateToken() });
});

module.exports = router;
