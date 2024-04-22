const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chinesa = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}
const salarioExato = f => f.salario === 7832.05

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    // mulher chinesa com menor salario ?
    const func = funcionarios
    .filter(chinesa)
    .filter(mulheres)
    .reduce(menorSalario)

    console.log(func)

    const salarioEx = funcionarios
    .filter(salarioExato)
    console.log(salarioEx)
})