function pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new pessoa('Nestor')
const p2 = new pessoa('Nestor')
p1.falar()
p2.falar()