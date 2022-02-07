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

let palavra = 'tryber';
let array = palavra.split('');
let letter;

for(let index = 0; index < array.length / 2; index += 1) {
    letter = array[index];
    array[index] = array[(array.length - 1) - index];
    array[(array.length - 1) - index] = letter;
}

console.log(array);
 