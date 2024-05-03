const primeiroElemento = arrayOuString => arrayOuString[1]

const primeiraLetra = string => string[0]

const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise(function(resolve) {
    resolve(['Ana', 'Maria', 'João'])
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)