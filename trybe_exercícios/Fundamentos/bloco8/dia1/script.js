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

// console.log(amIrich(4));

// Exercício 3

// array de respostas corretas
// array de respostas recebidas
// função que filtra os valores que sao iguais entre array 1 e array 2
// o retorno deve ser a contagem de respostas corretas

const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostas = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const rightAnswers = (gabarito, respostas) => (
  respostas.filter((element, index) => element === gabarito[index])
);

const wrongAnswers = (gabarito, respostas) => (
  respostas.filter((element, index) => element !== gabarito[index]).filter((element) => element !== 'N.A')
);

const check = (gabarito, respostas, callback1, callback2) => {
  const right = callback1(gabarito, respostas).length;
  const wrong = callback2(gabarito, respostas).length / 2;
  return `A pontuação final é ${right - wrong}`;
}

console.log(check(gabarito, respostas, rightAnswers, wrongAnswers));
