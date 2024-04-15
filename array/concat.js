const filhas = ['Ana', 'Maria']
const filhos = ['João', 'Gabriel']
const todos = filhos.concat(filhas) // concat juntas os dois array
console.log(todos)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]])) // adicionando elementos dentro de um array vazio