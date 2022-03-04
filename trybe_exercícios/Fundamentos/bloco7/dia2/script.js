function verifiesIfIsNumber(valor1, valor2) {
  if (!valor1 || !valor2) {
    throw new Error('Por favor, insira dois valores para realizar a soma');
  }
}

function sum() {
  try {
    const value1 = parseInt(document.getElementById('value1').value);
    const value2 = parseInt(document.getElementById('value2').value);
    verifiesIfIsNumber(value1, value2);
    const result = value1 + value2;
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch(err) {
    alert(err.message);
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}