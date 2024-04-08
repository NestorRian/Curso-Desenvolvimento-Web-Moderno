const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remoto o ultimo elemento do Array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um elemento no ultimo indice do Array
console.log(pilotos)

pilotos.shift() // esse metodo remove o primero do Array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um elemento no primeiro indice do Array
console.log(pilotos)

// splice() pode adiconar e remover elementos

// adicionar
pilotos.splice(1, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array a partir do indice passado

const algunsPilotos2 = pilotos.slice(1, 4) // esse metodo vai criar uma array novo pegando os elementos entre o indice 1 ao indice 4
console.log(algunsPilotos1)