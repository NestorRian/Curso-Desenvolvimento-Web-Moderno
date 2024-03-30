const pessoa = { nome: 'Nestor' }

pessoa.nome = 'Heitor'

console.log(typeof pessoa)

Object.freeze(pessoa)

// o método Object.freeze() congela o objeto não permitindo outras atualizações.

pessoa.nome = ('Maria')
pessoa.endereco = ('ABC')
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = { nome: 'Nestor' }
pessoaConstante.nome = 'Heitor'
console.log(pessoaConstante)