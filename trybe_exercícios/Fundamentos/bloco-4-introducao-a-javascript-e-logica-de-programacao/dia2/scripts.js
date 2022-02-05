let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercicio 1

// console.log(numbers);

// exercicio 2

// let soma = 0;

// for(index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index];
// }

// console.log(soma);

// exercicio 3

// let soma = 0;

// for(index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index];
// }

// let media = soma / numbers.length;
// console.log(media);

// exercicio 4

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

// exercicio 5 - realizado com ajuda do site https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array

// let maior = 0;

// for(index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] > maior) {
//         maior = numbers[index];
//     }
// }

// console.log(maior);

// exercicio 6

// let impar = 0;

// for(index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 !== 0) {
//         impar += + 1;
//     }
// }

// console.log(impar);

// if (impar === 0) {
//     console.log("Nenhum valor ímpar encontrado!");
// }

// exercicio 7

let menor = numbers[0];

for(index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < menor) {
        menor = numbers[index];
    }
}

console.log(menor);