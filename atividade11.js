let dentro = 0
        let fora = 0
        
        for (let n = 1; n <= 10; n++) {
            let num = parseFloat(prompt("Digite o " + n + " valor:"))
            
            if (isNaN(num)) {
                alert("Número inválido! Digite um número.")
                i--
                continue
            }
            
            if (num >= 24 && num <= 42) {
                dentro++
            } else {
                fora++
            }
        }

        document.write("Valores entre 24 e 42: " + dentro + "<br>")
        document.write("Valores fora do intervalo: " + fora)