// Arrow Function
 const soma = (a, b) => a + b
 console.log(soma(2, 5))

// Arrow Function (this)
const lexico = () => console.log(this === exports) // this aponta para global
lexico()

// parametro default
function log(texto = 'Node') {
    console.log(texto)
}
 log()
 log(null)
 log('Atribuindo novo valor>>')

 // operador rest
 function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))

