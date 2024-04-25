const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1240.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquiviGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo!')
})