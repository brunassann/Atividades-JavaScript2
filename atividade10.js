let N = parseInt(prompt("Digite um número:"));

if (isNaN(N) || N <= 0) {
  alert("Valor inválido! Digite um número maior que zero.");
} 

else {
  for (let i = 1; i <= N; i++) {
    document.write("Tabuada do " + i + ":" + "<br>");

    for (let j = 1; j <= 10; j++) {
      document.write(i + " x " + j + " = " + i * j + "<br>");
    }

    document.write("<br><br>");
  }
}
