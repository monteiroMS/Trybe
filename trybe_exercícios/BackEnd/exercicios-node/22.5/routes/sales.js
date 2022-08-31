const express = require('express');
const { productNameValidator, infoValidator } = require('../middlewares/saleValidator');

const validators = [productNameValidator, infoValidator];

const router = express.Router();

router.post('/', validators, (_req, res) => {
  res.status(201).json({ message: 'Venda cadastrada com sucesso' });
});

module.exports = router;