// Factory simples

function criarProduto(nome, preco, desconto) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Boné', 20))
