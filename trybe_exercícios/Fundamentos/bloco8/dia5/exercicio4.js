const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo

const filterPeople = (array) => {
  return array.filter((element) => {
    const { bornIn: nascidoEm, nationality: nacionalidade } = element;
    console.log(nascidoEm, nacionalidade);
    return nacionalidade === 'Australian' && nascidoEm < 2001;
  });
} 

console.log(filterPeople(people));