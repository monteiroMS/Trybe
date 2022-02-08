// EXERCÍCIO 1

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

// console.log("Bem vinda, " + info.personagem);

// EXERCÍCIO 2

info.recorrente = 'Sim'

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

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

for(let key in info) {
    for(let key2 in info2) {
        if (info[key] === info2[key2]) {
            console.log("Ambos recorrentes");
        } else if (key === key2) {
            console.log(info[key] + " e " + info2[key2]);
        }
    }
}

