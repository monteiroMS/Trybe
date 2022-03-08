const sum = require('./sum');

describe('A função sum', () => {
  it('Dados os parâmetros 4 e 5, retorna 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Dados os parâmetros 0 e 0, retorna 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Dados os parâmetros 4 e "5", lança um erro', () => {
    expect(() => {sum(4, '5')}).toThrow();
  });

  it('Dados os parâmetros 4 e "5", lança um erro com a mensagem "parameters must be numbers"', () => {
    expect(sum).toThrowError(new Error('parameters must be numbers'));
  });
});
