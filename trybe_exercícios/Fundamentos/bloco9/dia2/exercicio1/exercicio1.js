// apiScript.js
const url = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const specs = {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  };

  fetch(url, specs)
  .then((response) => response.json())
  .then(({ joke }) => {
    const container = document.getElementById('jokeContainer');
    container.innerText = joke;
  });
};

window.onload = () => fetchJoke();