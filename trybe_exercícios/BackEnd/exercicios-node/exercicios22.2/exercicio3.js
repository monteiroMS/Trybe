const doMath = require('./exercicio1');
const randomNumbers = require('./exercicio2');

console.log(randomNumbers);

async function main() {
  try {
    const resolve = await doMath(...randomNumbers);
    console.log(resolve);
  } catch (error) {
    console.log(error.message);
  }
}

main();
