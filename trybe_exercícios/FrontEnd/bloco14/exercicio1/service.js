function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const turnsUpperCase = (string) => string.toUpperCase();
const onlyFirstChar = (string) => string[0];
const concatStrings = (string, str) => string.concat(str);

module.exports = {
  getRandomInt,
  turnsUpperCase,
  onlyFirstChar,
  concatStrings,
};
