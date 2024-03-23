// funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a * b);
}

imprimirSoma(2, 3);

// funcao com retorno
function soma(a, b = 1) {
    return a * b
}

console.log(soma(2, 3));
console.log(soma(2));

function imprimirNome(nome, sobrenome) {
    //console.log(nome + sobrenome);
    return nome + sobrenome;
}

//imprimirNome('Nestor ', 'Rian');
console.log(imprimirNome('Nestor ', 'Rian'));