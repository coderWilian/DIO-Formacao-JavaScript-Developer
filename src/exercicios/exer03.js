/**
 * Calculo de sálario com adicionais
 */

const { gets, print } = require("./funcoes-auxiliares3")

let valorSalarioBruto = gets()
let valorBeneficios = gets()
let valorATransferir = null

function calculaPorcentagem(valor, percentual) {
  return valor * (percentual / 100)
}


function pegarAliquota(valor) {
  let valorImposto = null
  if (valor > 0 && valor <= 1100) {
    valorImposto = 5
  } else if (valor > 1100 && valor <= 2500) {
    valorImposto = 10
  } else {
    valorImposto = 15
  }
  return valorImposto
}

const aliquotaImposto = pegarAliquota(valorSalarioBruto)
const valorImposto = calculaPorcentagem(valorSalarioBruto, aliquotaImposto)
valorATransferir = valorSalarioBruto - valorImposto + valorBeneficios

print(`Valor a transferir: ${valorATransferir}`)