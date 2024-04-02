// coleção dinamica de pares chaves/valor

const produto = new Object
produto.Nome = 'Cadeira'
produto['Marca da Cadeira'] = 'Generica'
produto.Preco = 220

//console.log(produto)
delete produto.Preco
delete produto['Marca da Cadeira']
//console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 90000,
    proprietario: {
        nome: 'Nestor',
        idade: 20,
        endereco: {
            logadouro: 'ABC',
            numero: 123,
        }
    },
    condutores: [{
        nome: 'Nestor',
        idade: 20
    }, {
        nome: 'Mayara',
        idade: 18
    }],
    calcularValorDeSeguro: function() {
        //...........
    }
}

carro.proprietario.endereco.numero = 1000
carro.proprietario.endereco.logadouro = 'Av Dep. Emilio'
//carro['proprietario']['endereco']['logadouro'] = 'Av Dep. Emilio'
//console.log(carro)

delete carro.proprietario.endereco
delete carro.calcularValorDeSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.modelo)
