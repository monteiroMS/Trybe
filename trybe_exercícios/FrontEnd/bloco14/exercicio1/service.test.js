const service = require('./service');
const dogApi = require('./dogApi');

describe('Testa a função getRandomInt', () => {

  it('Exercício 1.1', () => {
    expect(service.getRandomInt).toBeDefined();
    expect(typeof service.getRandomInt).toBe('function');
  });

  it('Exercício 1.2', () => {
    service.getRandomInt = jest.fn()
      .mockReturnValue(10);

    expect(typeof service.getRandomInt()).toBe('number');
    expect(service.getRandomInt(0, 100)).toBe(10);
    expect(service.getRandomInt).toHaveBeenCalled();
    expect(service.getRandomInt).toHaveBeenCalledTimes(2);
    service.getRandomInt.mockReset();
  });

  it('Exercício 2', () => {
    service.getRandomInt = jest.fn()
      .mockImplementationOnce((a, b) => a / b);
    
    expect(service.getRandomInt(10, 5)).toBe(2);
    expect(service.getRandomInt(10, 5)).toBeUndefined();
    service.getRandomInt.mockReset();
  });

  it('Exercício 3', () => {
    service.getRandomInt = jest.fn()
    .mockImplementationOnce((a, b, c) => a * b * c)
    .mockImplementationOnce((a) => a * 2)

    expect(service.getRandomInt(1, 2, 3)).toBe(6);
    expect(service.getRandomInt(1)).toBe(2);
    expect(service.getRandomInt).toHaveBeenCalledTimes(2);
  });

});

describe('Testa se a função turnsUpperCase', () => {

  it('retorna string em caixa baixa', () => {
    jest.spyOn(service, 'turnsUpperCase')
      .mockImplementationOnce((s) => s.toLowerCase());

    expect(service.turnsUpperCase('TEST')).toBe('test');
  });

});

describe('Testa se a função onlyFirstChar', () => {

  it('retorna a ultima letra de uma string', () => {
    service.onlyFirstChar = jest.fn()
      .mockImplementationOnce((s) => s[s.length - 1]);

    expect(service.onlyFirstChar('teste')).toBe('e');
  });

});

describe('Testa se a função concatStrings', () => {

  it('concatena três strings', () => {
    service.concatStrings = jest.fn()
      .mockImplementationOnce((s, t, r) => `${s}${t}${r}`);

    expect(service.concatStrings('a', 'b', 'c')).toBe('abc');
    expect(service.concatStrings('a', 'b', 'c')).not.toBe('abc');

    service.concatStrings.mockReset();
    expect(service.concatStrings('a', 'b', 'c')).toBeUndefined();
  });

});

describe('testa se a primeira função', () => {

  it('retorna uma string em caixa alta', () => {
    const result = service.turnsUpperCase('teste');
    expect(result).toBe('TESTE');
  });

});

describe('testa a função fetchDog', () => {

  dogApi.fetchDog = jest.fn();
  afterEach(dogApi.fetchDog.mockReset);

  it('caso a promise se resolva', () => {
    dogApi.fetchDog.mockResolvedValue('request success');

    dogApi.fetchDog();
    expect(dogApi.fetchDog).toHaveBeenCalled();
    expect(dogApi.fetchDog).toHaveBeenCalledTimes(1);
    expect(dogApi.fetchDog()).resolves.toBe('request success');
    expect(dogApi.fetchDog).toHaveBeenCalledTimes(2);
  });

  it('caso a promise não se resolva', () => {
    dogApi.fetchDog.mockRejectedValue('request failed');

    expect(dogApi.fetchDog()).rejects.toBe('request failed');
    expect(dogApi.fetchDog).toHaveBeenCalledTimes(1);
  });

});
