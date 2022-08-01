const { question, questionFloat } = require('readline-sync');
const imcSituation = require('./imcSituation');

const name = question('Qual é o seu nome? ');
const height = questionFloat('Qual é a sua altura? ');
const weight = questionFloat('Qual é o seu peso? ');

const imc = (w, h) => (w / Math.pow(h, 2)).toFixed(2);

console.log(`${name}, o seu IMC é ${imc(weight, height)}.
Seu IMC se enquadra em: ${imcSituation(imc(weight, height))}`);