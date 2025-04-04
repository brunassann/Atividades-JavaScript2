let aprovados = 0
let continuar;

do {
  
  let nota1 = parseInt(prompt("Digite a primeira nota:"))
  let nota2 = parseInt(prompt("Digite a segunda nota:"))
  
  let media = (nota1 + nota2) / 2

 
  if (media >= 9.5) {
    alert("Média final: " + media + "\nSituação: Aprovado")
    aprovados++;
    }

    else {
    alert("Média final: " + media + "\nSituação: Aprovado")
    }

  
    continuar = prompt("Calcular a média de outro aluno? (S/N)").toUpperCase()

} while (continuar == "S")


alert("Quantidade de alunos aprovados: " + aprovados)
