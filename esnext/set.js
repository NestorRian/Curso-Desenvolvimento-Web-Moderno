//  nao aceita repitições/ não é indexada

const times = new Set()
times.add('Corinthians')
times.add('Palmeiras')
times.add('Flamengo')
times.add('Sãom Paulo')

console.log(times)

const nomes = ['Maria', 'João', 'Gabriel', 'Heitor']
const nomesSet = new Set(nomes)
console.log(nomesSet)