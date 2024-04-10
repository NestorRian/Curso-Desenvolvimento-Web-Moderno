const carrinho = [
    '{ "nome": "Borracha", "preco": 3.25 }',
    '{ "nome": "Caderno", "preco": 10.25 }',
    '{ "nome": "Lapis", "preco": 5.50 }',
    '{ "nome": "Caneta", "preco": 2.25 }'
]

const paraObj = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 

const resultado = carrinho.map(paraObj).map(apenasPreco)
console.log(resultado)

let somaMais10 = soma => soma + 10

let multiplicacao = mult => mult * 2

let formatParaReais = reais => `R$ ${parseFloat(reais).toFixed(2).replace('.', ',')}`

const resultadoSoma = carrinho.map(paraObj).map(apenasPreco).map(somaMais10)

const resultadoMult = carrinho.map(paraObj).map(apenasPreco).map(multiplicacao)

const formart = carrinho.map(paraObj).map(apenasPreco).map(multiplicacao).map(formatParaReais)

console.log(resultadoSoma)
console.log(resultadoMult)
console.log(formart)