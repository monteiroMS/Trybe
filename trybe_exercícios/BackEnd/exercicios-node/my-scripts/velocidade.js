const { questionInt } = require('readline-sync');

const distancia = questionInt('Qual foi a distância (em metros) percorrida? ');
const tempo = questionInt('Em quantos segundos o carro percorreu esta distância? ');

const velocidade = (d, t) => `A velocidade foi de ${(d / t).toFixed(2)} m/s.`;

console.log(velocidade(distancia, tempo));