// operador rest(juntar)/spread(espalhar)
// usar rest com parâmetro de funcão

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12000.00 }
const clone = { ativo: true, ...funcionario}
console.log(clone)

// usar spread com array
const grupoA = ['Maria', 'Joao', 'Gloria']
const grupoFinal = ['Gabriela', ...grupoA, 'Gabriel']
console.log(grupoFinal)