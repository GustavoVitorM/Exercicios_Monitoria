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
    var idade = prompt("Idade: ")
    var sexo = prompt("Sexo (M/F): ")
    pessoas.push({'idade': parseInt(idade), 'sexo': sexo})

    while(true) {
        var continuar = prompt("Quer Continuar? (S/N)") // pergunta se quer continuar
        if (continuar == 'S' || continuar == 'N') {
            break
        } else {
            console.log("Erro! Resposta inválida, digite 'S' para SIM e 'N' para NÃO. Tente novamente!" )
        }
    }

    if (continuar === 'N') {
        break
        sexo = null
        idade = null
    }
    ++i
}

var maiorIdade = pessoas[0]
var menorIdade = pessoas[0]
var mulMaisNova = {'idade': 99999}
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

    if (mulMaisNova['idade'] > el['idade'] && el['sexo'] === 'F' ) {
        mulMaisNova = el
    }

    if (homMaisVelho['idade'] < el['idade'] && el['sexo'] === 'M' ) {
        homMaisVelho = el
    }

    if (el['sexo'] === 'F') {
        medIdadeMul += el['idade']
        quantMul++
    }
});

console.log("\n---- RESULTADOS ----\n")

console.log("As pessoas cadastradas foram: ")
pessoas.forEach(e => {
    console.log(`idade = ${e['idade']} / sexo = ${e['sexo']}`)
})
console.log(`\nOnde, o mais velho tem ${maiorIdade['idade']} anos e é do sexo ${maiorIdade['sexo']}. `)
console.log(`\nO mais novo tem ${menorIdade['idade']} anos e é do sexo ${menorIdade['sexo']}. `)
console.log(`\nA mulher mais nova tem ${mulMaisNova['idade']} anos`)
console.log(`\nO homem mais velho tem ${homMaisVelho['idade']} anos`)
console.log(`\nA média de idade entre as mulheres é ${medIdadeMul/quantMul}`)