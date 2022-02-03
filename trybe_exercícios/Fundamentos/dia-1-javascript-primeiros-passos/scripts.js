// 1

// const a = 5;
// const b = 10;

// adição
// console.log(a + b);

// subtração
// console.log(a - b);

// multiplicação
// console.log(a * b);

// divisão
// console.log(a / b);

// módulo
// console.log(a % b);

// 2

// const a = 35;
// const b = 108;

// if (a > b) {
//    console.log(a);
// } else {
//    console.log(b);
// }

// 3

// const a = 1002;
// const b = 895;
// const c = 890;

// if (a > b && a > c) {
//   console.log(a);
// } else if (b > a && b > c) {
//   console.log(b);
// } else {
//    console.log(c);
// }

// 4

/* const number = 0;

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
} */

// 5

/* const um = 62;
const dois = 60;
const tres = 60;
const somaDosAngulos = um + dois + tres;

if (um > 0 && dois > 0 && tres > 0 && somaDosAngulos === 180) {
    console.log(true);
} else if (um > 0 && dois > 0 && tres > 0 && somaDosAngulos !== 180) {
    console.log(false);
} else {
    console.log("ERRO");
} */

// 6

// let peça = "Bispo";
// let peças = peça.toLowerCase();

// switch (peças) {

//     case "torre":
//     console.log("Move para frente, trás, direita e esquerda, quantas casas forem possíveis");
//     break
    
//     case "cavalo":
//         console.log("Apenas movimentos em L de três casas, para a direção que for possível");
//     break

//     case "bispo":
//         console.log("Apenas nas diagonais, quantas casas forem possíveis, respeitando a cor da casa incial");
//     break

//     case "rainha":
//         console.log("Quaisquer direções possíveis, quantas casas forem possíveis");
//     break

//     case "rei":
//         console.log("Quaisquer direções possíveis, apenas uma casa");
//     break
    
//     case "peão":
//         console.log("Apenas para frente, apenas uma casa. Mata necessariamente na diagonal");
//     break

//     default:
//         console.log("Isso não é uma peça de xadrez");
// }

// 7

// let nota = 0.85;
// let notaPorcentagem = nota * 100;

// if (notaPorcentagem < 0 || notaPorcentagem > 100) {
//     console.log("ERROR");
// }else if (notaPorcentagem >= 90) {
//     console.log("A");
// } else if (notaPorcentagem < 90 && notaPorcentagem >= 80) {
//     console.log("B");
// } else if (notaPorcentagem < 80 && notaPorcentagem >= 70) {
//     console.log("C");
// } else if (notaPorcentagem < 70 && notaPorcentagem >= 60) {
//     console.log("D");
// } else if (notaPorcentagem < 60 && notaPorcentagem >= 50) {
//     console.log("E");
// } else if (notaPorcentagem < 50) {
//     console.log("F");
// }

// 8

// const um = (Math.floor(Math.random() * 10 + 1));
// const dois = (Math.floor(Math.random() * 10 + 1));
// const tres = (Math.floor(Math.random() * 10 + 1));

// if (um % 2 === 0 || dois % 2 === 0 || tres % 2 === 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// console.log(um);
// console.log(dois);
// console.log(tres);

// 9

const um = (Math.floor(Math.random() * 10 + 1));
const dois = (Math.floor(Math.random() * 10 + 1));
const tres = (Math.floor(Math.random() * 10 + 1));

if (um % 2 !== 0 || dois % 2 !== 0 || tres % 2 !== 0) {
    console.log(true);
} else {
    console.log(false);
}

console.log(um);
console.log(dois);
console.log(tres);