const notas = [7.7, 6.5, 8.8, 7.7, 8.4, 7.3, 6.4]

// sem callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7 
})
 
console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)