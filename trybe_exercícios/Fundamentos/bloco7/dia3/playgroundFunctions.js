// Desafio 1
function compareTrue(valor1, valor2) {
    if (valor1 === true && valor2 === true) {
      return true;
    } else {
      return false;
    }
  }
  
  // Desafio 2
  function calcArea(base, altura) {
    let area = (base * altura) / 2;
    return area;
  }
  
  // Desafio 3
  function splitSentence(sentence) {
    let arr = sentence.split(' ');
    return arr;
  }
  
  // Desafio 4
  function concatName(nomes) {
    let nomesReorganizados = [nomes[nomes.length - 1], [nomes[0]]];
    let nomesString = nomesReorganizados.join(', ');
    return nomesString;
  }
  
  // Desafio 5
  function footballPoints(wins, ties) {
    let winsPoints = wins * 3;
    let totalPoints = winsPoints + ties;
    return totalPoints;
  }
  
  // Desafio 6
  // Usei como referencia para resolver este desafio a resolucao do exercicio 2 da Parte II - Funcoes, disponivel em https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-objetos-e-funcoes-gabarito/solutions/ef3e9fa4-a8e5-44e9-95be-02c46ad7ddd7/conteudos/722331e5-1456-4228-be11-ae909862d5a5?use_case=calendar
  // o artigo https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  // e também usei como referência a página https://pt.stackoverflow.com/questions/459413/verificar-quantas-vezes-um-n%C3%BAmero-aparece-no-array
  
  function highestCount(numeros) {
    let maiorNumero = Math.max(...numeros);
    let contagem = 0;
    for (let numero of numeros) {
      if (numero === maiorNumero) {
        contagem += 1;
      }
    }
    return contagem;
  }
  
  // Desafio 7
  function catAndMouse(mouse, cat1, cat2) {
    let cat1distance = 0;
    let cat2distance = 0;
    if (mouse > cat1 && mouse > cat2) {
      cat1distance = mouse - cat1;
      cat2distance = mouse - cat2;
    } else if (mouse < cat1 && mouse < cat2) {
      cat1distance = cat1 - mouse;
      cat2distance = cat2 - mouse;
    } else if (mouse > cat1 && mouse < cat2) {
      cat1distance = mouse - cat1;
      cat2distance = cat2 - mouse;
    } else if (mouse < cat1 && mouse > cat2) {
      cat1distance = cat1 - mouse;
      cat2distance = mouse - cat2;
    }
    let result = '';
    if (cat1distance === cat2distance) {
      result = 'os gatos trombam e o rato foge';
    } else if (cat1distance > cat2distance) {
      result = 'cat2';
    } else {
      result = 'cat1';
    }
    return result;
  }
  
  // Desafio 8
  function fizzBuzz(numeros) {
    let words = [];
    for (let index in numeros) {
      if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
        words.push('fizzBuzz');
      } else if (numeros[index] % 3 === 0) {
        words.push('fizz');
      } else if (numeros[index] % 5 === 0) {
        words.push('buzz');
      } else {
        words.push('bug!');
      }
    }
    return words;
  }
  
  // Desafio 9
  // resolvido após leitura do artigo https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  // com ajuda da página https://www.javascriptprogressivo.net/2018/08/Vogal-Consoante-JavaScript-exercicio.html
  // e da página https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  
  function encode(string) {
    let stringArr = string.split('');
    for (let index in stringArr) {
      if (stringArr[index] === 'a') {
        stringArr[index] = 1;
      } else if (stringArr[index] === 'e') {
        stringArr[index] = 2;
      } else if (stringArr[index] === 'i') {
        stringArr[index] = 3;
      } else if (stringArr[index] === 'o') {
        stringArr[index] = 4;
      } else if (stringArr[index] === 'u') {
        stringArr[index] = 5;
      }
    }
    let stringCodificada = stringArr.join('');
    return stringCodificada;
  }
  
  function decode(stringCodificada) {
    let stringArr = stringCodificada.split('');
    for (let index in stringArr) {
      if (stringArr[index] === '1') {
        stringArr[index] = 'a';
      } else if (stringArr[index] === '2') {
        stringArr[index] = 'e';
      } else if (stringArr[index] === '3') {
        stringArr[index] = 'i';
      } else if (stringArr[index] === '4') {
        stringArr[index] = 'o';
      } else if (stringArr[index] === '5') {
        stringArr[index] = 'u';
      }
    }
    let stringDescodificada = stringArr.join('');
    return stringDescodificada;
  }

  // Desafio 10
  // resolvido com ajuda do artigo https://www.edsonemiliano.com.br/blog/como-ordenar-uma-array-de-objetos-com-javascript-sort/#:~:text=Caso%20voc%C3%AA%20tenha%20um%20array,usar%20o%20m%C3%A9todo%20sort().&text=return%20(a.,nome)%20%3F
  
  function techList(array, name) {
    array.sort();
    let objects = [];
    if (array.length !== 0) {
      for (let index in array) {
        objects.push({
          tech: array[index],
          name: name,
        });
      }
    } else {
      objects = 'Vazio!';
    }
    return objects;
  }
  
  // Desafio 11
// consultei o site para saber mais sobre operadores ternários https://www.alura.com.br/artigos/o-que-e-o-operador-ternario?gclid=Cj0KCQiAxoiQBhCRARIsAPsvo-xUXQsAZZ2ij0KFOK16a3Jqmd0syEe33l5359YGCECA19iRoeDHZokaAvxKEALw_wcB
// foi usado como base para resolução dos requisitos os códigos da páginahttps://pt.stackoverflow.com/questions/459413/verificar-quantas-vezes-um-n%C3%BAmero-aparece-no-array

function generatePhoneNumber(array) {

    function verifiesThree(foneNumberArray) {
      let contadorDeNumeros = Object.create(null);
      for (let number of foneNumberArray) {
        if (contadorDeNumeros[number] === undefined) {
          contadorDeNumeros[number] = 1;
        } else {
          contadorDeNumeros[number] += 1;
        }
      }
      return contadorDeNumeros;
    }
  
    function verifiesIfThreePlus(functionBehind) {
      let resultado;
      for (let key in functionBehind) {
        if (functionBehind[key] >= 3) {
          resultado = true;
          break
        } else if (functionBehind[key] < 3) {
          resultado = false;
        }
      }
      return resultado;
    }
  
    function ifDecisionTrueOrFalse() {
      let decision;
      for (let index in array) {
        if (array[index] < 0 || array[index] > 9) {
          decision = true;
          break
        } else {
          decision = false;
        }
      }
      return decision;
    }
  
    let string;
    if (array.length < 11 || array.length > 11) {
      string = 'Array com tamanho incorreto.';
    } else if (ifDecisionTrueOrFalse() === true || verifiesIfThreePlus(verifiesThree(array)) === true) {
      string = 'não é possível gerar um número de telefone com esses valores';
    } else if (array.length === 11 && ifDecisionTrueOrFalse() === false || verifiesIfThreePlus(verifiesThree(array)) === false || decision === false){
      string = '(' + array[0] + array[1] + ')' + ' ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10]; 
    }
    return string;
  }
  
  // Desafio 12
  function triangleCheck(lineA, lineB, lineC) {
   
    function verificaLadosSoma() {
  
      let medidas = [];
      medidas.push(lineA, lineB, lineC);
      let result = 0;
      if (medidas[0] < medidas[1] + medidas [2]) {
        result += 1;
      }
      if (medidas[1] < medidas[0] + medidas [2]) {
       result += 1;
      }
      if (medidas[2] < medidas[0] + medidas [1]) {
        result += 1;
      }
      let resultado = (result === 3 ? true : false);
      return resultado;
    }
  
    function verificaLadosSubstracao() {
  
      let medidas = [];
      medidas.push(lineA, lineB, lineC);
      let soma = 0;
      if (medidas[0] > Math.abs(medidas[1] - medidas[2])) {
        soma += 1;
      }
      if (medidas[0] > Math.abs(medidas[2] - medidas[1])) {
       soma += 1;
      }
      if (medidas[1] > Math.abs(medidas[0] - medidas[2])) {
        soma += 1;
      }
      if (medidas[1] > Math.abs(medidas[2] - medidas[0])) {
        soma += 1;
      }
      if (medidas[2] > Math.abs(medidas[1] - medidas[0])) {
        soma += 1;
      }
      if (medidas[2] > Math.abs(medidas[0] - medidas[1])) {
        soma += 1;
      }
      let resultado = (soma === 6 ? true : false);
      return resultado;
    }
  
    let resultadoFinal = (verificaLadosSoma() === true && verificaLadosSubstracao() === true ? true : false);
    return resultadoFinal;
  }
  
  console.log(triangleCheck(10, 14, 8));
  
  // Desafio 13
  // resolvido após a leitura da página https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
  // e também o site https://www.alura.com.br/artigos/convertendo-string-para-numero-em-javascript?gclid=CjwKCAiA9aKQBhBREiwAyGP5lSGV5uCnZ2mbyl4iXzEop8gUO637haQ0Oo7NXF78btYczUAUktGVPxoCFKQQAvD_BwE
  
  function hydrate(string) {
    let r = /\d+/g;
    let array = string.match(r);
    let waterQtde = 0;
    let numberSoma = 0;
    for (let index in array) {
      numberSoma = parseInt(array[index]);
      waterQtde += numberSoma;
    }
  
    let waterString = '';
    if (waterQtde <= 1) {
      waterString = '1 copo de água';
    } else if (waterQtde > 1) {
      waterString = waterQtde + ' copos de água';
    }
  
    return waterString;
  }
  
  module.exports = {
    generatePhoneNumber,
    hydrate,
    triangleCheck,
    calcArea,
    catAndMouse,
    compareTrue,
    concatName,
    decode,
    encode,
    fizzBuzz,
    footballPoints,
    highestCount,
    splitSentence,
    techList,
  };
  