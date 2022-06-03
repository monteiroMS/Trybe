const ESTADO_INICIAL_1 = {
  name: 'Rodrigo',
  lastName: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  name: 'Bruna',
  lastName: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const CHANGE_ONE = 'CHANGE_ONE';
const CHANGE_TWO = 'CHANGE_TWO';

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case CHANGE_ONE:
      return {
        ...state,
        name: action.name,
        lastName: action.lastName,
        address: action.address,
        city: action.city,
      }
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case CHANGE_TWO:
      return {
        ...state,
        name: action.name,
        lastName: action.lastName,
        address: action.address,
        city: action.city,
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  meuPrimeiroReducer,
  meuSegundoReducer,
});

const store = Redux.createStore(rootReducer);

const changeState = (type, name, lastName, address, city,) => (
  { type, name, lastName, address, city });

window.onload = () => {
  setTimeout(() => {
    store.dispatch(changeState(CHANGE_ONE, 'Matheus', 'Monteiro Schran', 'Rua Paulo Schneider, 305', 'Joinville'));
    store.dispatch(changeState(CHANGE_TWO, 'Paula', 'Ettel Pereira', 'Rua Paulo Schneider, 305', 'Joinville'));
  }, 5000);
};

store.subscribe(() => {
  const { meuPrimeiroReducer, meuSegundoReducer } = store.getState();

  document.getElementById('nome-1').innerHTML = meuPrimeiroReducer.name;
  document.getElementById('sobrenome-1').innerHTML = meuPrimeiroReducer.lastName;
  document.getElementById('endereco-1').innerHTML = meuPrimeiroReducer.address;
  document.getElementById('cidade-1').innerHTML = meuPrimeiroReducer.city;

  document.getElementById('nome-2').innerHTML = meuSegundoReducer.name;
  document.getElementById('sobrenome-2').innerHTML = meuSegundoReducer.lastName;
  document.getElementById('endereco-2').innerHTML = meuPrimeiroReducer.address;
  document.getElementById('cidade-2').innerHTML = meuPrimeiroReducer.city;
});
