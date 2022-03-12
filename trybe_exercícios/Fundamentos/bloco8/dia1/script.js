// Exercício 1

const createEmail = (name) => {
  const emailName = name.toLowerCase().split(' ').join('_');
  return `${emailName}@trybe.com`;
}

const newEmployees = () => {
  const employees = {
    id1: createEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: createEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: createEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// console.log(newEmployees());

// Exercício 2

const verifiesNumber = (number, otherNumber) => (
  number === otherNumber ? 'Parabéns, você ganhou!' : 'Tente Novamente'
);

const amIrich = (number) => {
  const numeroSorteado = Math.floor(Math.random() * 5) + 1;
  console.log(numeroSorteado);
  return verifiesNumber(number, numeroSorteado);
};

console.log(amIrich(4));