const doMath = require('./exercicio1');

const getRandomNumber = () => Math.floor(Math.random() * 100 + 1);

const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);

console.log(randomNumbers);

// doMath(...randomNumbers)
//   .then((resolve) => console.log(resolve))
//   .catch((err) => console.log(err.message));

module.exports = randomNumbers;