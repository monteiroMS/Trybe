// MINHA SOLUÇÃO ------------------------------------------

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(array) {
  const newArray = array.map((element) => element.toLowerCase());
  return newArray.reduce((acc, element) => {
    for (let i = 0; i < element.length; i += 1) {
      acc = element[i] === 'a' ? acc + 1 : acc;
    }
    return acc;
  }, 0);
}

console.log(`Minha solução: ${containsA(names)}`);

// SOLUÇÃO DA TRYBE ------------------------------------------

const names2 = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function D() {
  return names2.reduce((acc, curr) =>
     acc + curr.split('').reduce((acumulator, current) => {
        if (current === 'a' || current === 'A') return acumulator + 1;
        return acumulator;
     }, 0), 0);
}

console.log(`Solução da Trybe: ${D()}`);
