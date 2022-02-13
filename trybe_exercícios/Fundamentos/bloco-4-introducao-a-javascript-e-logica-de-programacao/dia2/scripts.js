// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// EXERCÍCIO 1

// console.log(numbers);

// EXERCÍCIO 2

// let soma = 0;

// for(index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index];
// }

// console.log(soma);

// EXERCÍCIO 3

// let soma = 0;

// for(index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index];
// }

// let media = soma / numbers.length;
// console.log(media);

// EXERCÍCIO 4

// let soma = 0;

// for(index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index];
// }

// let media = soma / numbers.length;

// console.log(media);

// if (media > 20) {
//     console.log("Valor maior que 20");
// } else {
//     console.log("Valor menor ou igual a 20");
// }

// EXERCÍCIO 5 - realizado com ajuda do site https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array

// let maior = 0;

// for(index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] > maior) {
//         maior = numbers[index];
//     }
// }

// console.log(maior);

// EXERCÍCIO 6

// let impar = 0;

// for(index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 !== 0) {
//         impar += 1;
//     }
// }

// console.log(impar);

// if (impar === 0) {
//     console.log("Nenhum valor ímpar encontrado!");
// }

// EXERCÍCIO 7

// let menor = numbers[0];

// for(index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] < menor) {
//         menor = numbers[index];
//     }
// }

// console.log(menor);

// EXERCÍCIO 8

// let numeros = [];

// for(index = 1; index <= 25; index += 1) {
//     numeros.push(index);
// }

// console.log(numeros);

// EXERCÍCIO 9

// let numeros = [];

// for(index = 1; index <= 25; index += 1) {
//     numeros.push(index);
// }

// for(index = 0; index < numeros.length; index += 1) {
//     console.log(numeros[index] / 2);
// }


// ORDENADOR CRESCENTE

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] < numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }

// console.log(numbers);

// ORDENADOR DECRESCENTE

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] > numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }

// console.log(numbers);

// CRIAR NOVO ARRAY MULTIPLICANDO O ANTERIOR

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];

for(index = 0; index < numbers.length; index += 1) {
    if (index <= numbers.length - 2) {
        newNumbers.push(numbers[index] * numbers[index + 1]);
    } else {
        newNumbers.push(numbers[index] * 2);
    }
}

console.log(newNumbers);