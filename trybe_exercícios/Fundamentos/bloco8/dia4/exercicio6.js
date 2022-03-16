const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// { name: nome do aluno, average: media das notas }

function studentAverage(estudantes, notas) {
  return notas.map((aluno, index) => {
    return {
      name: estudantes[index],
      average: aluno.reduce((soma, nota) => soma + nota, 0) / aluno.length,
    }
  });
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

console.log(studentAverage(students, grades));