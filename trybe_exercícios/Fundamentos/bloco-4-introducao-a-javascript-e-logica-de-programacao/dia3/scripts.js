// EXERCÍCIO 1

const numero = 4;
let fatorial = 0;

for(let index = 1; index <= numero - 1; index += 1) {
    if(index !== 1) {
        fatorial = fatorial * (numero - index);
    } else {
        fatorial = numero * (numero - index);
    }
}

console.log(fatorial);