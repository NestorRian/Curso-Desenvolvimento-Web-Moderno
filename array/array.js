console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

console.log(aprovados)

aprovados.sort() // Atualizar os valores do Array em ordem alfabetica

console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // Remover e/ou adiciona parametros apartir da indice passado primeiro, no caso seria a partir do primeiro indice
console.log(aprovados)


