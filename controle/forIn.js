const notas = [7.8, 8.7, 8.6, 4.6];

for(i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Nestor',
    sobrenome: 'Rian',
    idade: 19,
    peso: 73
}

for(atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}