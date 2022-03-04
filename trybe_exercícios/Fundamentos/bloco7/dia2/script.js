function verifiesInput(valor1, valor2) {
  if (isNaN(valor1) || isNaN(valor2)) {
    throw new Error('Por favor, insira apenas valores numéricos');
  }
  if (!valor1 || !valor2) {
    throw new Error('Por favor, insira dois valores para realizar a soma');
  }
}

function sum() {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    verifiesInput(value1, value2);
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch(err) {
    alert(err.message);
    document.getElementById('result').innerHTML = '';
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}
