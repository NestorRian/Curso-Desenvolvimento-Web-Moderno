const num = [1, 2, 3, 4, 5]

// map() é um for com propósito

let resultado1 = num.map(function(elemento) {
    return elemento.toString()
})

let resultado2 = num.map(function(elemento) {
    return elemento * 2
})

console.log(resultado1)
console.log(resultado2)

let soma10 = elemento => elemento + 10
let triplo = elemento => elemento * 3
let FormatParaReais = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.', ',')}`

const resultado = num.map(soma10).map(triplo).map(FormatParaReais)
console.log(resultado)