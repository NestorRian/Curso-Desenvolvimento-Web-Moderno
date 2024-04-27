// let e const 

{
    var a = 3
    let b = 5 // a variavel let dentro de {} nao é visível fora do escopo
    console.log(b)
}
console.log(a)
// console.log(b) 

// Template String
const produto = 'Ipad'
console.log(`${produto} é caro`)

// Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 10}
console.log(i, nome)

