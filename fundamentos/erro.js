function tratarErroELancar(erro) {
  // throw new Error("....")
  // throw true
  // throw 10
  // throw 'mensagem'
  throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date
  }
}


function imprimirNoma(obj) {
    try {

        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e);
    } finally {
        console.log('Final');
    }
}

const obj = { nome: 'Nestor' }
imprimirNoma(obj)