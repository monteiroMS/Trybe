import './App.css';

const compromissos = [
  'Arrumar a casa',
  'Limpar o banheiro',
  'Levar a vó no Jiu-Jitsu',
  'Dar banho no totó',
  'Fazer os pão da Susan'
]

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <ol>
        {compromissos.map((element) => Task(element))}
      </ol>
    </div>
  );
}

export default App;
