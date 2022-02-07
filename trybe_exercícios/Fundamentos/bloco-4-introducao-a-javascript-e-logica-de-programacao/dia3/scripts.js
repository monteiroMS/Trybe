// EXERCÍCIO 1

// const numero = 4;
// let fatorial = 0;

// for(let index = 1; index <= numero - 1; index += 1) {
//     if(index !== 1) {
//         fatorial = fatorial * (numero - index);
//     } else {
//         fatorial = numero * (numero - index);
//     }
// }

// console.log(fatorial);

// EXERCÍCIO 2
// Realizado a partir da leitura da página https://pt.stackoverflow.com/questions/172749/como-transformar-string-em-array-de-caracteres

// let palavra = 'tryber';
// let array = palavra.split('');
// let letter;

// for(let index = 0; index < array.length / 2; index += 1) {
//     letter = array[index];
//     array[index] = array[(array.length - 1) - index];
//     array[(array.length - 1) - index] = letter;
// }

// console.log(array);

// EXERCÍCIO 3

// Realizado a partir da leitura da página https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/length 
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max 
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// Para entender o por quê de se usar "...", li o artigo https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// retorna a maior palavra

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let arraySizes = [];

// for(index = 0; index < array.length; index += 1) {
//     arraySizes.push(array[index].length);
// }

// maiorDoArray = Math.max(...arraySizes);
// let biggerWord = arraySizes.indexOf(maiorDoArray);
// console.log("A maior palavra é " + array[biggerWord] + "!!!");

// // retorna a menor palavra

// let arraySizes2 = [];

// for(index = 0; index < array.length; index += 1) {
//     arraySizes2.push(array[index].length);
// }

// menorDoArray = Math.min(...arraySizes2);
// let smallestWord = arraySizes2.indexOf(menorDoArray);
// console.log("A menor palavra é " + array[smallestWord] + "!!!");

// EXERCÍCIO 4
// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

// referências para realizar o exercicio
// https://educacao.uol.com.br/disciplinas/matematica/numeros-primos-veja-algoritmo-para-encontra-los.htm#:~:text=Um%20n%C3%BAmero%20natural%20%C3%A9%20primo,ele%20mesmo%2C%20e%20por%201.
// https://www.delftstack.com/pt/howto/javascript/javascript-remove-index-from-an-array/#:~:text=array%20em%20JavaScript.-,Use%20a%20fun%C3%A7%C3%A3o%20splice()%20para%20remover%20um%20elemento%20espec%C3%ADfico,do%20array%20adicionando%2Fremovendo%20elementos.

// // preciso de um array que vá de 2 a 50 já que 1 não é primo

// let numeros = [];

// for(index = 2; index <= 50; index += 1) {
//     numeros.push(index);
// }

// console.log(numeros);

// // preciso remover os divisiveis por 2 sem tirar o 2

// for(index = 0; index < numeros.length; index += 1) {
//     if (numeros[index] % 2 === 0 && numeros[index] !== 2) {
//         numeros.splice(index, 1);
//     }
// }

// console.log(numeros);

// // preciso remover os multiplos de 3 sem tirar o 3

// for(index = 0; index < numeros.length; index += 1) {
//     if (numeros[index] % 3 === 0 && numeros[index] !== 3) {
//         numeros.splice(index, 1);
//     }
// }

// console.log(numeros);

// // preciso remover os multiplos de 5 sem tirar o 5

// for(index = 0; index < numeros.length; index += 1) {
//     if (numeros[index] % 5 === 0 && numeros[index] !== 5) {
//         numeros.splice(index, 1);
//     }
// }

// console.log(numeros);

// // preciso remover os multiplos de 7 sem tirar o 7

// for(index = 0; index < numeros.length; index += 1) {
//     if (numeros[index] % 7 === 0 && numeros[index] !== 7) {
//         numeros.splice(index, 1);
//     }
// }

// console.log(numeros);

// // cheguei no final da lista de checagem dos primos e terminei de tirar todos os não primos da lista. Agora preciso checar qual o maior dessa lista

// console.log("O maior número primo entre 0 e 50 é " + Math.max(...numeros));

// BONUS

let n = 5;
let line = [];

// for(let index = 1; index <= 5; index += 1) {
//     line.push('*');
// }
// for(let index = 1; index <= 5; index += 1) {
//     console.log(line);
// }

for(let index = 1; index <= 5; index += 1) {
    line.push('*');
    console.log(line);
}

