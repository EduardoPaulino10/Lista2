// Sorteia 20 números entre 0 e 10
// Mostra os números sorteados
// Conta quantos são maiores que 5 e quantos são divisíveis por 3

maioresQueCinco = 0;
multiplosDeTres = 0;

for (i = 1; i <= 20; i++) {
  numero = Math.floor(Math.random() * 11);

  console.log("Número: " + numero);

  if (numero > 5) {
    maioresQueCinco = maioresQueCinco + 1;
  }

  if (numero % 3 == 0) {
    multiplosDeTres = multiplosDeTres + 1;
  }
}

console.log("Maiores que 5: " + maioresQueCinco);
console.log("Múltiplos de 3: " + multiplosDeTres);