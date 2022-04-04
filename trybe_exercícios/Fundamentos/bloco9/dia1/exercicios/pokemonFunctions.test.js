const { getPokemonDetails } = require('./pokemonFunctions');

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expected = new Error('Não temos esse pokémon para você :(');
    
    function callback(error, result) {
      expect(error).toEqual(expected);
      done();
    }

    getPokemonDetails('notPokemon', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expected = 'Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun';
    
    function callback(error, result) {
      expect(result).toEqual(expected);
      done();
    }

    getPokemonDetails('Squirtle', callback);
  });
});
