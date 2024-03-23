// Amarzenando uma funcao em uma variavel

const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(2, 4);

// Armazenando uma funcao arrow em uma variavel

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 4));

// retorno implicido
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 4));

