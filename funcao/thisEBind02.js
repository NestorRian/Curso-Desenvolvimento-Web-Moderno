function Pessoa() {
    this.idade = 0

    // a funcao setInterval dispara outra funcao a partir de um determinado intervalo que voce passou.
    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa