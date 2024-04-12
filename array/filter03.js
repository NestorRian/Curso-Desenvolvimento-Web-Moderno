const produtos = [
    { nome: 'Notebook', preco: 2500, fragil: true, modelo: 2020},
    { nome: 'Ipad Pro', preco: 3199, fragil: true, modelo: 2029},
    { nome: 'Copo de Vidro', preco: 12.99, fragil: true, modelo: 2020},
    { nome: 'Copo de Plastico', preco: 3.99, fragil: false, modelo: 2019},
    { nome: 'Iphone', preco: 5000, fragil: true, modelo: 2010}
]

const modelo = produto => produto.modelo == 2020

console.log(produtos.filter(modelo))