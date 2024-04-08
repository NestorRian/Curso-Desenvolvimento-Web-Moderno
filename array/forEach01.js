const aprovados = ['Ana', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach( nome => console.log(nome))

const exibirResultados = aprovado => console.log(aprovado)
aprovados.forEach(exibirResultados)