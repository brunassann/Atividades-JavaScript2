let N = parseInt(prompt("Digite um número:"));


if (isNaN(N) || N <= 0) {
  alert(" Valor inválido! Digite um número maior que zero.");
} 

else {
  let resultado = "Números de 1 até " + N + ":\n";

  for (let i = 1; i <= N; i++) {
    resultado += i + "\n";}

  document.write(resultado);
}
