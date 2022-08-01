const { expect } = require('chai');
const kindOf = require('./exercicio3');

describe('A função "kindOf"', () => {
  describe('ao colocar um número positivo', () => {
    const received = kindOf(1);
    it('retorna uma string', () => {
      expect(received).to.be.a('string');
    });
    
    it('a string é a palavra "positivo"', () => {
      expect(received).to.equal('positivo');
    });
  });

  describe('ao colocar um número negativo', () => {
    const received = kindOf(-1);
    it('retorna uma string', () => {
      expect(received).to.be.a('string');
    });

    it('a string é a palavra "negativo"', () => {
      expect(received).to.equal('negativo');
    });
  });

  describe('ao colocar um número neutro', () => {
    const received = kindOf(0);
    it('retorna uma string', () => {
      expect(received).to.be.a('string');
    });

    it('a string é a palavra "neutro"', () => {
      expect(received).to.equal('neutro');
    });
  });

  describe('ao colocar uma string', () => {
    it('lança um erro', () => {
      expect(kindOf).to.throw();
    });

    it('a mensagem de erro pede para inserir apenas um número', () => {
      try {
        kindOf('string');
      } catch (err) {
        expect(err.message).to.equal('Insira apenas um número');
      }
    });
  });
});
