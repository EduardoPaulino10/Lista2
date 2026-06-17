// Lê idade e sexo de 5 pessoas
// Conta homens, mulheres, média geral, média dos homens e mulheres com mais de 20 anos

prompt = require("prompt-sync")();

homens = 0;
mulheres = 0;
somaIdades = 0;
somaHomens = 0;
mulheresMais20 = 0;

for (i = 1; i <= 5; i++) {
  idade = parseInt(prompt("Idade: "));
  sexo = prompt("Sexo (M ou F): ");

  somaIdades = somaIdades + idade;

  if (sexo == "M" || sexo == "m") {
    homens = homens + 1;
    somaHomens = somaHomens + idade;
  }

  if (sexo == "F" || sexo == "f") {
    mulheres = mulheres + 1;

    if (idade > 20) {
      mulheresMais20 = mulheresMais20 + 1;
    }
  }
}

mediaGrupo = somaIdades / 5;

if (homens > 0) {
  mediaHomens = somaHomens / homens;
} else {
  mediaHomens = 0;
}

console.log("Homens: " + homens);
console.log("Mulheres: " + mulheres);
console.log("Média do grupo: " + mediaGrupo);
console.log("Média dos homens: " + mediaHomens);
console.log("Mulheres +20: " + mulheresMais20);