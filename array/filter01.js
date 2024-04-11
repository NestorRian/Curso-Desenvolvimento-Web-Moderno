const produtos = [
    { nome: 'Notebook', preco: 2500, fragil: true},
    { nome: 'Ipad Pro', preco: 3199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.99, fragil: true},
    { nome: 'Copo de Plastico', preco: 3.99, fragil: false}
]

// Retornar objetos caros e obejetos nao fragil
console.log(produtos.filter(function(p) {
    return p.preco > 500
}))

console.log(produtos.filter(function(p) {
    return p.fragil === false
}))

let filtrarPreco = filtP => filtP.preco > 500
let filtrarFragil = filtF => filtF.fragil === false

const resultadoP = produtos.filter(filtrarPreco)
const resultadoF = produtos.filter(filtrarFragil)
console.log(resultadoP)
console.log(resultadoF)

// Retornar objetos caros e fragil

const caro = produtos => produtos.preco >= 12.99
const fragil = produtos => produtos.fragil 

console.log(produtos.filter(caro).filter(fragil))