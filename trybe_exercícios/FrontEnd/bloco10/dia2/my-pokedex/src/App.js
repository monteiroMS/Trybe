import './App.css';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className='App'>
      <h1>Seja Bem Vindo à POKEDEX</h1>
      <h3>Conheça mais sobre os Pokemons</h3>
      <Pokedex />
      <footer>
        <p>Exercício de React do curso de Desenvolvimento Web da Trybe - Matheus Monteiro</p>
      </footer>
    </div>
  );
}

export default App;
