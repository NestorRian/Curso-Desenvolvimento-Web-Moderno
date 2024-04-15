const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 7.0
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Roberto',
        nota: 6.0
    }, {
        nome: 'Roberta',
        nota: 10.0
    }]
}]

const getNotasDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotasDoAluno)

const notas1 = escola.map(getNotasDaTurma)

console.log(notas1)

console.log([].concat([ 8.1, 7 ], [ 6, 10 ]))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)