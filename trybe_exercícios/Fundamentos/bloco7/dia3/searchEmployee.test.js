const searchEmployee = require('./searchEmployee');

describe('Função searchEmployee', () => {
    it('existe', () => {
        expect(searchEmployee).toBeDefined();
    });

    it(`retorna um nome quando o segundo parâmetro for "firstName"`, () => {
        expect(searchEmployee('4678-2', 'firstName')).toBe("Paul");
    });

    it(`retorna um último nome quando o segundo parâmetro for "lastName"`, () => {
        expect(searchEmployee('1256-4', 'lastName')).toBe("Bezos");
    });

    it(`retorna uma string contendo as habilidades quando o segundo parâmetro for "specialities"`, () => {
        expect(searchEmployee('4456-4', 'specialities')).toStrictEqual(["Context API", "RTL", "Bootstrap"]);
    });

    it('lança o erro "ID não identificada"', () => {
        expect(() => {searchEmployee('111', 'specialities')}).toThrow('ID não identificada');
    });

    it('lança o erro "Informação indisponível"', () => {
        expect(() => {searchEmployee('4456-4', 'teste')}).toThrow('Informação indisponível');
    });
});