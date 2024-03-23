// par Chave/Valor
const saudacao = 'ola'; //contexto léxico

function exec() {
    const saudacao = 'oi'; //contexto léxico 2
    return saudacao;
}

// Objetos são grupos aninhados de pares Chave/Valor
const cliente = {
    nome: 'Nestor',
    idade: 19,
    peso: 72,
    endereco: {
        logadouro: 'Av. Deputado Emilio Carlos',
        numero: 940
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);