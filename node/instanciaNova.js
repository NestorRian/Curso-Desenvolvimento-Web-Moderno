// uma Factory retorna uma novo objeto

module.exports = () => {
    return{
        valor: 1,
        inc() {
            this.valor++
        }
    }
}