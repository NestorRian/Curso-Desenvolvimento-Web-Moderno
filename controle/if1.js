function boaNota(nota) {
    if(nota >= 7) {
        console.log('Aprovado com: ' + nota);
    } else {
        console.log("Você foi Reprovado! " + nota);
    }
}

boaNota(8.0);
boaNota(6.0);