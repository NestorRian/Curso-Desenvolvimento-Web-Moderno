const produtos = [
    { nome: 'Notebook', preco: 2500, fragil: true, modelo: 2020, novo: false},
    { nome: 'Ipad Pro', preco: 3199, fragil: true, modelo: 2029, novo: true},
    { nome: 'Copo de Vidro', preco: 12.99, fragil: true, modelo: 2020, novo: false},
    { nome: 'Copo de Plastico', preco: 3.99, fragil: false, modelo: 2019, novo: true},
    { nome: 'Iphone', preco: 5000, fragil: true, modelo: 2010, novo: false}
]

const modelo = produtos => produtos.modelo == 2020
const novo = produtos => produtos.novo == true

console.log(produtos.filter(modelo))
console.log(produtos.filter(novo))
