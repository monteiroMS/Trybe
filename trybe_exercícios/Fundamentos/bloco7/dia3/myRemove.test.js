const myRemove = require('./myRemove');

describe('A função myRemove', () => {
    it('dados os parâmetros [1, 2, 3, 4] e 3, retornará o array [1, 2, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
    });

    it('dados os parâmetros [1, 2, 3, 4] e 3, não retornará o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
    });

    it('dados os parâmetros [1, 2, 3, 4] e 5, retornará o array [1, 2, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
    });
});