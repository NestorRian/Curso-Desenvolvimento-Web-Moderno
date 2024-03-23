var numero = 1;
// console.log('fora = ', numero);
{
    var numero = 2; // sobescreve o valor da variável numero
    console.log('dentro = ', numero);
}
console.log('fora = ', numero);
