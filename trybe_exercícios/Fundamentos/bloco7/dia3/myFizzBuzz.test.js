const myFizzBuzz = require('./myFizzBuzz');

describe('A função myFizzBuzz', () => {
    it('dado o parâmetro 15, retornará "fizzbuzz"', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });

    it('dado o parâmetro 3, retornará "fizz"', () => {
        expect(myFizzBuzz(3)).toBe('fizz');
    });

    it('dado o parâmetro 5, retornará "buzz"', () => {
        expect(myFizzBuzz(5)).toBe('buzz');
    });

    it('dado o parâmetro 5, retornará "buzz"', () => {
        expect(myFizzBuzz(5)).toBe('buzz');
    });

    it('dado o parâmetro 2, retornará "O número inserido não é divisível por 3 ou 5"', () => {
        expect(myFizzBuzz(2)).toStrictEqual('O número inserido não é divisível por 3 ou 5');
    });

    it('dado o parâmetro "0", retornará false', () => {
        expect(myFizzBuzz('0')).toBe(false);
    });
});