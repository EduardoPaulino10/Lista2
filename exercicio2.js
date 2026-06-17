// Lê a idade de 10 pessoas
// Calcula média, quantos são adultos, crianças pequenas e maior idade

somaIdades = 0;
adultos = 0;
criancasPequenas = 0;
maiorIdade = 0;

prompt = require("prompt-sync")();

for (i = 1; i <= 10; i++) {
  idade = parseInt(prompt("Idade: "));

  somaIdades = somaIdades + idade;

  if (idade > 18) {
    adultos = adultos + 1;
  }

  if (idade < 5) {
    criancasPequenas = criancasPequenas + 1;
  }

  if (idade > maiorIdade) {
    maiorIdade = idade;
  }
}

media = somaIdades / 10;

console.log("Média das idades: " + media);
console.log("Adultos: " + adultos);
console.log("Crianças pequenas: " + criancasPequenas);
console.log("Maior idade: " + maiorIdade);
