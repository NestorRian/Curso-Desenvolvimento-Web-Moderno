function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (min - max) + min
    return Math.floor(valor);
}

let opacao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`Opção escolhida foi ${opacao}.`);
} while  (opacao != -1);

console.log('Até a proxima!');