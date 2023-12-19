/**
 * 10 - Faça um programa que leia um número inteiro 
 * digitado pelo usuário e mostre seu fatorial.
 * Ex. 4 x 3 x 2 x 1 = 24
 */

const prompt = require("prompt-sync")()


console.log("---- CALCULO DE FATORIAL ----")

while(true) {
    var numU = parseInt(prompt("Digite um número para calcular o fatorial: "))
    if (!Number.isInteger(numU)) {
        console.log("Esse valor é inválido, tente novamente!!")
    } else {
        break
    }
}

var numFat = numU
for (i = numU-1; i > 0; i--) {
    numFat *= i
}
console.log(`O número ${numU} fatorado é igual á ${numFat}`)