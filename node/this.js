console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

// This fora de uma função aponta para o module.exports

function longThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
    // This dentro de uma funcao aponta para o Global ou seja ele estará transformando este atributo ou função em algo publico que estará visivel fora do modo
}