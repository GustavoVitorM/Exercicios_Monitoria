/**
 * 8 - Desenvolva um script que leia o nome a idade e o sexo de várias pessoas, 
 * perguntando se o usuário deseja continuar para cada pessoa. 
 * Mostre os seguintes resultados: 
 * Qual maior idade
 * Qual menor idade
 * Qual a mulher mais jovem
 * Qual o homem mais velho
 * Qual a média da idade entre as mulheres
 */


const prompt = require("prompt-sync")()

const pessoas = []
var i = 1
// Cria um loop infinito
while (true){
    //Pergunta as informações da pessoa
    console.log(`${i}ª pessoa`) 
    var nome = prompt("Nome: ")
    var idade = prompt("Idade: ")
    var sexo = prompt("Sexo (M/F): ")
    var continuar = prompt("Quer Continuar? (S/N)") // pergunta se quer continuar

    var pessoa = {'nome': nome, 
                'idade': parseInt(idade), 
                'sexo': sexo} // Adiciona as informações a um objeto pessoa
    // Adiciona a pessoa a uma lista de pessoas
    pessoas.push(pessoa)

    if (continuar === 'N') {
        break
    }
    ++i
}

var maiorIdade = pessoas[0]
var menorIdade = pessoas[0]
var mulMaisNova = pessoas[0]
var homMaisVelho = pessoas[0]
var medIdadeMul = 0
var quantMul = 0

pessoas.forEach(el => {

    if (maiorIdade['idade'] < el['idade']) {
        maiorIdade = el
    } 

    if (menorIdade['idade'] > el['idade']) {
        menorIdade = el
    }

    if (mulMaisNova['idade'] < el['idade'] && el['sexo'] === 'F' ) {
        mulMaisNova = el
    }

    if (homMaisVelho['idade'] > el['idade'] && el['sexo'] === 'M' ) {
        homMaisVelho = el
    }

    if (el['sexo'] === 'F') {
        medIdadeMul += el['idade']
        quantMul++
    }
});

medIdadeMul = medIdadeMul/quantMul

console.log(pessoas)

console.log(maiorIdade)
console.log(menorIdade)
console.log(mulMaisNova)
console.log(homMaisVelho)
console.log(medIdadeMul)