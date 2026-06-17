// Lê peso e altura de 7 pessoas
// Calcula média de altura e algumas contagens

somaAltura = 0;
pesados = 0;
levesBaixos = 0;
altosPesados = 0;

prompt = require("prompt-sync")();

for (i = 1; i <= 7; i++) {
  peso = parseFloat(prompt("Peso: "));
  altura = parseFloat(prompt("Altura: "));

  somaAltura = somaAltura + altura;

  if (peso > 90) {
    pesados = pesados + 1;
  }

  if (peso < 50) {
    if (altura < 1.6) {
      levesBaixos = levesBaixos + 1;
    }
  }

  if (altura > 1.9) {
    if (peso > 100) {
      altosPesados = altosPesados + 1;
    }
  }
}

mediaAltura = somaAltura / 7;

console.log("Média da altura: " + mediaAltura);
console.log("Pesados (+90kg): " + pesados);
console.log("Leves e baixos: " + levesBaixos);
console.log("Altos e pesados: " + altosPesados);
