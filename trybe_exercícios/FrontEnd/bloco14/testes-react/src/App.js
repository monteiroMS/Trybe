import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
        <input id="id-email" type="email" />
        <input type="button" data-testid="id-send" value="Enviar" />
        <input id="btn-back" type="button" value="Voltar" />
      </label>
    </div>
  );
}

export default App;
