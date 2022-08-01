function exercicio1(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if (
      typeof a !== 'number'
      || typeof b !== 'number'
      || typeof c !== 'number'
    ) reject(new Error('Informe apenas números'));

    const resultado = (a + b) * c;

    if (resultado < 50) reject(new Error('Valor muito baixo'));
    resolve(resultado)
  });

  return promise;
}

module.exports = exercicio1;
