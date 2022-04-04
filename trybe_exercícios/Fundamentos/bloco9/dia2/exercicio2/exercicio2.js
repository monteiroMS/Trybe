const coinCap = `https://api.coincap.io/v2/assets`;
const currencyRates = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json`

const dollarToBRL = async () => {
  const responseRates = await fetch(currencyRates);
  const data = await responseRates.json();
  const { brl } = data.usd;
  const brlValue = parseFloat(brl.toFixed(2));
  return brlValue;
}

const addLi = async (name, symbol, priceUsd) => {
  priceUsd = parseFloat(parseFloat(priceUsd).toFixed(2));
  const lista = document.getElementById('crypto-list');
  const moeda = document.createElement('li');
  const real = await dollarToBRL();
  const conversao = parseFloat((priceUsd * real).toFixed(2));
  moeda.innerText = `${name} (${symbol}):\n$ ${priceUsd}\nR$ ${conversao}`;
  lista.appendChild(moeda);
}

const getCoins = async (input) => {
  const response = await fetch(coinCap);
  const { data: allCoins } = await response.json();
  if (typeof input === 'string') {
    const { name, symbol, priceUsd } = allCoins.find(({ name }) => name === input);
    addLi(name, symbol, priceUsd);
  }
  if (typeof input === 'number') {
    allCoins.forEach(({ name, symbol, priceUsd }, index) => {
      if (index < input) addLi(name, symbol, priceUsd);
    });
  }
  if (!input) {
    allCoins.forEach(({ name, symbol, priceUsd }) => addLi(name, symbol, priceUsd));
  }
}

const inputNumber = document.getElementById('number-input');
const buttonNumber = document.getElementById('button-number');
buttonNumber.addEventListener('click', () => {
  const lista = document.getElementById('crypto-list');
  lista.innerHTML = '';
  getCoins(parseInt(inputNumber.value, 10));
  inputNumber.value = '';
})

const inputString = document.getElementById('string-input');
const buttonString = document.getElementById('button-string');
buttonString.addEventListener('click', () => {
  const lista = document.getElementById('crypto-list');
  lista.innerHTML = '';
  getCoins(inputString.value);
  inputString.value = '';
})

const buttonClear = document.getElementById('button-clear');
buttonClear.addEventListener('click', () => {
  const lista = document.getElementById('crypto-list');
  lista.innerHTML = '';
})
