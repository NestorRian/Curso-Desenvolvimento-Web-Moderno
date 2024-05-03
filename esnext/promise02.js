/*setTimeout(() => console.log('Executando callback...'), 2000)
    setTimeout(() => console.log('Executando callback...'), 4000)
        setTimeout(() => console.log('Executando callback...'), 6000)*/


function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(esperarPor)
    .then(esperarPor)