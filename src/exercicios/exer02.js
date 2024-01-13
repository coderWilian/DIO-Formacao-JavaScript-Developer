/**
 * Faça um programa que receba N (Quantidade de numeros) e seus respectivos valores
 * Imprima o maior número par e o maior número impar
 * Números utilizados = [5, 3, 4, 1, 10, 8]
 */

const { gets, print } = require("./funcoes-auxiliares2")

const n = gets()

let maiorNumeroPar = null
let maiorNumeroImpar = null
for (let i = 0; i < n; i++) {
  const numero = gets()
  if (numero % 2 === 0) {
    if (maiorNumeroPar === null || numero > maiorNumeroPar) {
      maiorNumeroPar = numero
    }
  } else {
    if (maiorNumeroPar === null || numero > maiorNumeroImpar) {
      maiorNumeroImpar = numero
    }
  }
}
print(`Maior Número Par: ${maiorNumeroPar}`)
print(`Maior Número Impar: ${maiorNumeroImpar}`)



/* Minha forma */
// const { gets, print } = require("./funcoes-auxiliares")

// let numeros = []

// for (let i = 0; i < 6; i++) {
//   numeros.push(gets())
// }

// let maiorNumeroPar = null
// let maiorNumeroImpar = null
// for (let i = 0; i < numeros.length; i++) {
//   if numero % 2 === 0) {
//     if (maiorNumeroPar === null || numeros[i] > maiorNumeroPar) {
//       maiorNumeroPar = numeros[i]
//     }
//   } else {
//     if (maiorNumeroPar === null || numeros[i] > maiorNumeroImpar) {
//       maiorNumeroImpar = numeros[i]
//     }
//   }
// }
// print(`Maior Número Par: ${maiorNumeroPar}`)
// print(`Maior Número Impar: ${maiorNumeroImpar}`)
