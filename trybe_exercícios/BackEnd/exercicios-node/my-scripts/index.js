const { questionInt } = require('readline-sync');

const wichOne = questionInt(
  `Qual dos scripts você deseja executar? 

    1 - Cálculo de IMC
    2 - Cálculo de velocidade em metros por segundo
    3 - Jogo de adivinha.
  
  -->  `
);

const execute = (what) => {
  switch (what) {
    case 1:
      require('./imc');
      break;
    case 2:
      require('./velocidade');
      break;
    case 3:
      require('./sorteio')
    default:
      console.log('\nOpção inválida. Saindo...\n')
      break;
  }
}; 

execute(wichOne);

