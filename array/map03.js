Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this) )
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.25 }',
    '{ "nome": "Caderno", "preco": 10.25 }',
    '{ "nome": "Lapis", "preco": 5.50 }',
    '{ "nome": "Caneta", "preco": 2.25 }'
]

// Retornar apenas os preços

const paraObj = json => JSON.parse(json) // formatando o elemento para obj
const apenasPreco = produto => produto.preco 

const resultado = carrinho.map2(paraObj).map2(apenasPreco)
console.log(resultado)