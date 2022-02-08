// OBJETOS

// EXERCÍCIO 1

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

// console.log("Bem vinda, " + info.personagem);

// EXERCÍCIO 2

// info.recorrente = 'Sim'

// console.log(info);

// EXERCÍCIO 3

// for(let key in info) {
//     console.log(key);
// }

// EXERCÍCIO 4

// for(let key in info) {
//     console.log(info[key]);
// }

// EXERCÍCIO 5

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim'
//   };

// for(let key in info) {
//     for(let key2 in info2) {
//         if (info[key] === info2[key2]) {
//             console.log("Ambos recorrentes");
//         } else if (key === key2) {
//             console.log(info[key] + " e " + info2[key2]);
//         }
//     }
// }

// EXERCÍCIO 6 - feito com ajuda do gabarito do course

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };

//   console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + "'" + leitor['livrosFavoritos'][0]['titulo'] + "'");

// leitor['livrosFavoritos'].push(
//     {
//         titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//         autor: 'JK Rowling',
//         editora: 'Rocco'
//     }
// )

// console.log(leitor['livrosFavoritos'][1]);

// console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos");

// FUNÇÕES

// 1
// Resolvido após leitura dos artigos:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse


function verificaPalindromo(a) {
    let divided = a.split('');
    let reversed = divided.reverse();
    let b = reversed.join('');
    if (a === b) {
        resultado = true;
    } else {
        resultado = false;
    }

    return resultado;
}

console.log(verificaPalindromo('desenvolvimento'));