/**
 * 6 - Faça um programa que leia 10 números inteiros e
 *  mostre quantos deles são pares e quantos são ímpares.
 * 
 * Instale a biblioteca prompt-synnc com o comando npm install --save prompt-sync
 */

const prompt = require("prompt-sync")(); // Para podermos peir um valor ao usuario

const nums = [] // Declarando uma lista para todos os números
const numPar = [] // Declarando uma lista para os números pares 
const numImpar = [] // Declarando uma lista para os números impares


// Loop de 10 vezes
for (i = 1; i <= 10; i ++) {
    var numAtual = parseInt(prompt(`Digite o ${i}º número: `)); // Pede o usuário um número
    nums.push(numAtual) // Coloca na lista o número digitado

    if (numAtual%2 == 0) { // Se o número for par
        numPar.push(numAtual) // Então ele adiciona a lista de pares
    } else { // Senão
        numImpar.push(numAtual) // Ele adiciona na lista de ímpares
    }
}

console.log("Os números digitados foram: ")
console.log(nums.join(", "))
console.log("Os números pares digitados são: ")
console.log(numPar.join(", "));
console.log("Os números ímpares digitados são: ")
console.log(numImpar.join(", "));
