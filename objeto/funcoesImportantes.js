const pessoa = {
    nome: 'Nestor',
    idade: 20,
    peso: 70
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // Enumerable serve para incrementar esse valor no objeto pessoa
    writable: false, // Writable serve para congelar o valor não sendo possivel modificar.
    value: '01/10/1990'
})

pessoa.dataNascimento = '02/02/2000'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)//Object.freeze serve para congelar o objeto não sendo possivel alterar o valor
obj.c = 1234
console.log(obj)