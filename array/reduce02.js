const aluno = [
    { nome: 'João', nota: 7.3, bolsista: true },
    { nome: 'Maria', nota: 9.3, bolsista: true },
    { nome: 'Pedro', nota: 6.0,  bolsista: false },
    { nome: 'Ana', nota: 9.3, bolsista: false }
]

// Desafio 1: todos os alunos sao bolsistas ?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(aluno.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: algum aluno é bolsista

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(aluno.map(a => a.bolsista).reduce(algumBolsista))


