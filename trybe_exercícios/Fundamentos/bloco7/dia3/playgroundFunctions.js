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
  
  const techList = (array, name) => {
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
    hydrate,
    decode,
    encode,
    techList,
  };
  