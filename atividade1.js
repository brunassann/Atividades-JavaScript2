let numero1 = parseInt(prompt("Escolha um número:"))

let numero2
do {
    numero2 = parseInt(prompt("Escolha outro número (deve ser maior que zero):"))
    if (numero2 <= 0) {
        alert("O número digitado é inválido! Digite um número maior que zero.")
    }
} while (numero2 <= 0)

let resultado = numero1 / numero2
document.write("O resultado é: " + resultado)
