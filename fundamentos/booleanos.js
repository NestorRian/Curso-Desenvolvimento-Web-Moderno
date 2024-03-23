let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo)

console.log('Retorna booleanos True');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'text');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('Retorna booleanos False');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('Para finalizar...');
console.log(('' || null || 0 || 'texto')); // Retorna apenas valor True

//let nome = 'Nestor';
let nome = '';
console.log(nome || 'Desconhecido'); // Caso a variável NOME não estaja valido retorna o valor declarado após o "||" = OU