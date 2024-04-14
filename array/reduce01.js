const aluno = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.3, bolsista: true },
    { nome: 'Pedro', nota: 6.0,  bolsista: false },
    { nome: 'Ana', nota: 9.3, bolsista: true }
]

const resultado = aluno.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)