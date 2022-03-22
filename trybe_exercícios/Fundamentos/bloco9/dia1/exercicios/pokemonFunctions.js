const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

// MINHA RESOLUÇÃO:

function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (pokemons.find(({ name }) => name === filter) === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    const pokemon = pokemons.find(({ name }) => name === filter);

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

getPokemonDetails('Squirtle', (onError, onSuccess) => { 
  try {
    if (onError) {
      throw onError;
    }
  } catch (error) {
    console.log(error);
  }
  if (onSuccess) {
    console.log(onSuccess);
  } 
});

// RESOLUÇÃO DA TRYBE: 

// function getPokemonDetails(filter, callback) {
//   setTimeout(() => {
//     if (pokemons.find(filter) === undefined) {
//       return callback(new Error('Não temos esse pokemon para você :('), null);
//     }
//     const pokemon = pokemons.find(filter);

//     const { name, type, ability } = pokemon;

//     const messageFromProfOak = `Olá, seu pokemon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

//     callback(null, messageFromProfOak);
//   }, 2000);
// }

// getPokemonDetails(
//   (pokemon) => pokemon.name === 'Bulbasaur',
//   (error, message) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(message);
//     }
//   }
// );

module.exports = {
  getPokemonDetails,
};