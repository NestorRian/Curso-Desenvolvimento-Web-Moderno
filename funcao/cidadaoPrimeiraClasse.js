// Função em JS é First-Class Object 
// Higher-order function

// criar de forma literal
function fun1() { }

// Amarzenar em uma variavel 
const fun2 = function () { }

// Amarzenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Amarzenar em um atributo de um obejto
const obj = {}
obj.falar = function () { return 'opa' }
console.log(obj.falar())

// Passar como parametro
function run(fun) {
    fun()
}

run(function () { console.log('Executando...') })

// Funcao pode conter/retornar outra funcao
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 4)(5)
const seismais = soma(2, 4)
seismais(5)
