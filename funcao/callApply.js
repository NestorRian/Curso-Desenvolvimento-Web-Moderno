function getPreco (imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 5000,
    desc: 0.15,
    getPreco
}

global.preco = 100
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 100, desc: 0.1}

console.log(getPreco.apply(carro))
console.log(getPreco.call(carro))

console.log(getPreco.apply(carro, [0.1, '$', ]))
console.log(getPreco.call(global, 0.2, '$'))