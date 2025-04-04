var num1 = parseInt(prompt("Digite um número inteiro (Menor)"))
var num2 = parseInt(prompt("Digite outro número (Maior)"))

let soma = 0;
let quantidade = 0;

for (let n = num1; n <= num2; n++) {
soma += n;
quantidade++;
}



let media = soma / quantidade;

document.write("A média aritmética dos números entre " + num1 + " e " + num2 + " é: " + media);
