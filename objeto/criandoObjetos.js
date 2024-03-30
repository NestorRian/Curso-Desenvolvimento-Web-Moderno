// usando a notação literal
const obj1 = {}
console.log(obj1)
 
// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Notebook','5000', 0.5)
const p2 = new Produto('Notebook','1000', 0.5)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 8000, 4)
const f2 = criarFuncionario('Maria', 10000, 1)
console.log(f1.getSalario().toFixed(2), f2.getSalario().toFixed(2))

// Object.create
const filha = Object.create(null) 
    filha.nome = 'Ana'
    console.log(filha)

// função famosa que retorna um Objeto...
const fromJSON = JSON.parse('{"info": "sou um JSON"}')
console.log(fromJSON.info)
