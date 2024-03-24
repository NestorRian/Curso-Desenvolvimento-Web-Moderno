function pessoa() {
    this.idade = 0

    // a funcao setInterval dispara outra funcao a partir de um determinado intervalo que voce passou.
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }, 10000)
}