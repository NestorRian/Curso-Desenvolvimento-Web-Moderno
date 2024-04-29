const tecnologias = new Map()
tecnologias.set('React', { framework: false })
tecnologias.set('Angular', { framework: true })

console.log(tecnologias.get('React').framework)
console.log(tecnologias.get('Angular').framework)

const chavesVariadas = new Map([
    [function () {}, 'funcao'],
    [{}, 'objeto'],
    [123, 'numero']
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})