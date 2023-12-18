/**
 * 9 - Crie um programa que leia o nome e idade de 10 pessoas e armazene-os num array.
 * Mostre como resultado:
 * • Qual o nome da pessoa mais velha
 * • Qual o nome da pessoa mais jovem
 * • Qual a média de idade
 */


const prompt = require("prompt-sync")();

const listaPessoas = []

for (i = 1; i <= 4; i++) {
    console.log(`-- ${i}ª pessoa --`)
    var nome = prompt("Nome: ")
    var idade = prompt("Idade: ")

    listaPessoas.push({'nome': nome, 'idade': parseInt(idade)})
}

var somaIdades = 0;

var maisVelha = listaPessoas[0]
var maisNovo = listaPessoas[0]

listaPessoas.forEach(el => {
    if (maisVelha['idade'] < el['idade']) {
        maisVelha = el
    }
    if (maisNovo['idade'] > el['idade']) {
        maisNovo = el
    }
    somaIdades += el['idade']
})

var mediaIdades = Math.round(somaIdades/listaPessoas.length)

console.log("-- Resultado --")

console.log(`Das pessoas cadastradas... \n` + 
            `A pessoa mais jovem é ${maisNovo['nome']}; \n` +
            `A pessoa mais velha é ${maisVelha['nome']}; \n` +
            `A média de idade é ${mediaIdades}.`)
