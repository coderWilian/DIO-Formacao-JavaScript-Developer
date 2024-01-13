/**
 * Faça um programa que receba média do aluno:
 * Caso a média seja < 5 Imprima "Reprovado"
 * Caso a média seja >= 5 e < 7 Imprima "Recuperação"
 * Caso a média seja >= 7 Imprima "Aprovado"
 */


const { gets, print } = require("./funcoes-auxiliares1")

let average = gets()

if (average < 5) {
  resultado = "Reprovado"
} else if (average >= 5 && average < 7) {
  resultado = "Recuperação"
} else {
  resultado = "Aprovado"
}

print(resultado)
