let soma = 0;
let quantidade = 0;

    for (let n = 15; n <= 100; n++) {
        soma += n;
        quantidade++;
    }

    let media = soma / quantidade;
    document.write("A média aritmética dos números de 15 a 100 é: " + media);