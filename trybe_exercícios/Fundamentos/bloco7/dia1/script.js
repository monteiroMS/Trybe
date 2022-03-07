// PARTE 1
// EXERCÍCIO 1

// const testingScope = escopo => {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//   }

//   testingScope(false);

// EXERCÍCIO 2

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const compare = (a, b) => a - b;
// oddsAndEvens.sort(compare);

// console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

// PARTE 2
// EXERCÍCIO 1

// const retornaFatorial = n => {
//   if (n <= 1) {
//     let result = 1;
//     return result;
//   } else {
//     let fatorial = n * (n - 1);
//     for (let i = 2; i < n; i += 1) {
//       fatorial *= (n - i);
//     }
//     return fatorial;
//   }
// };
// console.log(retornaFatorial(6));

// EXERCÍCIO 2
// const maiorPalavra = text => {
//   const array = text.split(' ');
//   let maxLength = 0;
//   let result = '';
//   for (let word of array) {
//     if (word.length > maxLength) {
//       maxLength = word.length;
//       result = word;
//     }
//   }
//   return result;
// }

// console.log(maiorPalavra('hey a'));

// EXERCÍCIO 3
const exercicio3 = () => {
  let clickCount = 0;
  let textCount = document.getElementById('clickCount');
  const button = document.getElementById('button');
  button.addEventListener('click', () => {
    clickCount += 1;
    textCount.innerText = clickCount;
  });
}
exercicio3();

