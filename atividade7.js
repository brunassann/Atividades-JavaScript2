let soma = 0;
let totalNotas = 6;

for (let i = 1; i <= totalNotas; i++) {
  let nota;

  do {
    nota = parseInt(prompt(`Digite a nota ${i} (de 0 a 10):`));

    if (isNaN(nota) || nota < 0 || nota > 10) {
      alert("Nota inválida! Digite um valor entre 0 e 10.");
    }

  } while (isNaN(nota) || nota < 0 || nota > 10);

  soma += nota;
}

let media = soma / totalNotas;

alert("A média do aluno é: " + media.toFixed(2));



