function gerarNumeroEntre(min, max, numerosProibidos) {
    if(min > max)  [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)) {
            reject('Numero repitido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaCena(qtdeNumeros, tentivas = 1) {
    try {
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()) { 
            numeros.push(await gerarNumeroEntre(1, 60, numeros))
        }
        return numeros
    } catch(e) {
        if(tentivas > 5) {
            throw "Não foi desta vez..."
        } else {
            return gerarMegaCena(qtdeNumeros, tentivas + 1)
        }
    }
}

gerarMegaCena(15)
    .then(console.log)
    .catch(console.log)