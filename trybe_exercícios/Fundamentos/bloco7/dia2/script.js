// // PARTE 1

// function verifiesInput(valor1, valor2) {
//   if (isNaN(valor1) || isNaN(valor2)) {
//     throw new Error('Por favor, insira apenas valores numéricos');
//   }
//   if (!valor1 || !valor2) {
//     throw new Error('Por favor, insira dois valores para realizar a soma');
//   }
// }

// function sum() {
//   try {
//     const value1 = document.getElementById('value1').value;
//     const value2 = document.getElementById('value2').value;
//     verifiesInput(value1, value2);
//     const result = parseInt(value1) + parseInt(value2);
//     document.getElementById('result').innerHTML = `Resultado: ${result}`;
//   } catch(err) {
//     alert(err.message);
//     document.getElementById('result').innerHTML = '';
//   } finally {
//     document.getElementById('value1').value = '';
//     document.getElementById('value2').value = '';
//   }
// }

// window.onload = () => {
//   const button = document.getElementById('button');
//   button.addEventListener('click', sum);
// }

// PARTE 2

// const orderResume = {
//   name: 'Rafael Andrade',
//   phoneNumber: '11-98763-1416',
//   address: {
//     street: 'Rua das Flores',
//     number: '389',
//     apartment: '701',
//   },
//   order: {
//     pizza: {
//       marguerita: {
//         amount: 1,
//         price: 25,
//       },
//       pepperoni: {
//         amount: 1,
//         price: 20,
//       }
//     },
//     drinks: {
//       coke: {
//         type: 'Coca-Cola Zero',
//         price: 10,
//         amount: 1,
//       }
//     },
//     delivery: {
//       deliveryPerson: 'Ana Silveira',
//       price: 5,
//     }
//   },
//   payment: {
//     total: 60,
//   },
// };

// const customerInfo = (obj) => {
//   const pessoaRecebedora = obj.order.delivery.deliveryPerson;
//   const nomePedido = obj.name;
//   const tel = obj.phoneNumber;
//   const rua = obj.address.street;
//   const numeroCasa = obj.address.number;
//   const apto = obj.address.apartment;

//   return `Olá ${pessoaRecebedora}, entrega para: ${nomePedido}, Telefone: ${tel}, R. ${rua}, Nº: ${numeroCasa}, AP: ${apto}`;
// }

// console.log(customerInfo(orderResume));

// const orderModifier = (obj) => {
//   obj.name = 'Luiz Silva';
//   obj.payment.total = '50';
//   const sabor1 = Object.keys(obj.order.pizza)[0];
//   const sabor2 = Object.keys(obj.order.pizza)[1];
//   const bebida = obj.order.drinks.coke.type;
//   const valor = obj.payment.total;

//   return `Olá ${obj.name}, o total do seu pedido de ${sabor1}, ${sabor2} e ${bebida} é R$ ${valor},00.`
// }

// console.log(orderModifier(orderResume));

// PARTE 3

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1
// const objAdd = (obj, key, value) => obj[key] = value;
// objAdd(lesson2, 'turno', 'Noite');
// console.log(lesson2);

// 2
// const objKeys = obj => Object.keys(obj);
// console.log(objKeys(lesson2));

// 3
// const objLength = obj => Object.keys(obj).length;
// console.log(objLength(lesson2));

// 4
// const objValues = obj => Object.values(obj);
// console.log(objValues(lesson2));

// 5
const allLessons = {};
Object.assign(allLessons, { lesson1, lesson2, lesson3 });
// console.log(allLessons);

// 6
const totalStudents = (obj) => {
  let soma = 0;
  const array = Object.keys(obj);
  for (let index in array) {
    soma += obj[array[index]]['numeroEstudantes'];
  }
  return soma;
}
// console.log(totalStudents(allLessons));

// 7

const getValueByIndex = (obj, index) => Object.values(obj)[index];
console.log(getValueByIndex(lesson1, 0));