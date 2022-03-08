const {
    generatePhoneNumber,
    hydrate,
    triangleCheck,
    calcArea,
    catAndMouse,
    compareTrue,
    concatName,
    decode,
    encode,
    fizzBuzz,
    footballPoints,
    highestCount,
    splitSentence,
    techList,
  } = require('./playgroundFunctions');

describe('As funções encode e decode', () => {
    it('estão definidas', () => {
        expect(encode).toBeDefined();
        expect(decode).toBeDefined();
    });

    it('para encode, dado "aeiou" como parâmetro, retornará "12345"', () => {
        expect(encode('aeiou')).toBe('12345');
    });

    it('para decode, dado "12345" como parâmetro, retornará "aeiou"', () => {
        expect(decode('12345')).toBe('aeiou');
    });

    it('dados os parâmetros invertidos, retornam o mesmo sem alteração', () => { 
        expect(encode('12345')).toBe('12345');
        expect(decode('aeiou')).toBe('aeiou');
    });

    it('retornam uma string com o mesmo tamanho do parâmetro', () => {
        expect(encode('12345')).toHaveLength(5);
        expect(decode('aeiou')).toHaveLength(5);
    });
});
