const { question, questionInt } = require('readline-sync');

const startGame = () => {
  console.log('\nDuvido você adivinhar qual número entre 1 e 10 eu estou pensando...\n');

  const palpite = questionInt('Qual é o seu palpite? ');
  const random = parseInt(Math.random() * (10 - 1 + 1)) + 1;

  if (palpite === random) {
    console.log('Parabéns, número correto!\n');
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${random}\n`);
  }

  const startAgain = question('Deseja jogar novamente? (s/n) ');

  if (startAgain === 's') {
    startGame();
  }
};

startGame();



