const { checarData, checarGarantia } = require('./helpers');

const productNameValidator = (req, res, next) => {
  const { productName } = req.body;

  if (!productName) {
    return res
      .status(400)
      .json({ message: 'O campo productName é obrigatório' });
  }

  if (productName.length < 4) {
    return res
      .status(400)
      .json({ message: 'O campo productName deve possuir 4 ou mais caracteres' });
  }

  next();
};

const infoValidator = (req, res, next) => {
  const { infos } = req.body;

  if (!infos) {
    return res
      .status(400)
      .json({ message: 'O campo infos é obrigatório' });
  }

  if (!infos.saleDate) {
    return res
    .status(400)
    .json({ message: 'O campo saleDate é obrigatório' });
  }

  if (!checarData(infos.saleDate)) {
    return res
    .status(400)
    .json({ message: 'O campo saleDate não é uma data válida' });
  }

  if (!infos.warrantyPeriod) {
    return res
    .status(400)
    .json({ message: 'O campo warrantyPeriod é obrigatório' });
  }

  if (!checarGarantia(infos.warrantyPeriod)) {
    return res
    .status(400)
    .json({ message: 'O campo warrantyPeriod precisa estar entre 1 e 3' });
  }

  next();
};

module.exports = {
  productNameValidator,
  infoValidator,
};