function kindOf(number) {
  if (typeof number !== 'number') throw new Error('Insira apenas um número');
  if (number > 0) return 'positivo';
  if (number < 0) return 'negativo';
  return 'neutro';
}

try {
  console.log(kindOf('test'));
} catch (err) {
  console.log(err.message);
}

module.exports = kindOf;
