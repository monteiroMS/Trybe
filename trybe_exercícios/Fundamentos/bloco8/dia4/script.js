// const numbers = [50, 85, -30, 3, 15];

// let biggerNumber = numbers[0];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (biggerNumber < numbers[i]) {
//     biggerNumber = numbers[i];
//   }
// }

// console.log(biggerNumber);

// const verifiesBigger = (acc, element) => acc < element ? element : acc;

// console.log(numbers.reduce(verifiesBigger));

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const sum = (acc, element) => acc + element;

// const sumEven = (array, callback) => (
//   array.filter((element) => element % 2 === 0).reduce(callback)
// );

// console.log(sumEven(numbers, sum));

// const verifiesEven = (acc, element) => element % 2 === 0 ? acc + element : acc;

// const sumEvenOnlyReduce = (array, callback) => array.reduce(callback);

// console.log(sumEvenOnlyReduce(numbers, verifiesEven));

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const studentBest = (array) => (
  array.map((aluno) => (
    { 
      name: aluno.nome, 
      materia: aluno.materias.reduce((retornoDaFuncao, proximoObj) => retornoDaFuncao.nota > proximoObj.nota ? retornoDaFuncao : proximoObj).name 
    }
  ))
);

console.log(studentBest(estudantes));