function gerarNumeroEntre(min, max, tempo) {
    if(min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(function() {
            const fator = max - min + 1
            const numAleatorio = parseInt(Math.random() * fator) + min
            resolve(numAleatorio)

        }, tempo)
    })
}

function gerarVariosNum() {
    return Promise.all([
        gerarNumeroEntre(1, 60, 2000),
        gerarNumeroEntre(1, 60, 4000),
        gerarNumeroEntre(1, 60, 6000),
        gerarNumeroEntre(1, 60, 8000),
        gerarNumeroEntre(1, 60, 10000)
    ])
}

gerarVariosNum()
    .then(console.log)