/**
 * 7 - Crie um programa que faça o sorteio de 20 números 
 * inteiros aleatórios entre 0 e 20 e mostre numa janela:
 * Quais números foram sorteados
 * Quantos números estão acima de 10
 * Quantos números são divisíveis por 5
 */
var listaNum = []
var listaMaior10 = []
var listaDiv5 = []

for (var i = 10; i > 0; i--) {
    listaNum.push(Math.floor(Math.random() * (20 - 1) + 1))
}

listaNum.forEach(e => {
    if (e > 10) {
        listaMaior10.push(e)
    }
    if (Number.isInteger(e/5)) {
        listaDiv5.push(e)
    }
});

console.log("Os números escolhidos foram: ")
console.log(listaNum.join(", "))
console.log("Os números maiores que 10 são: ")
console.log(listaMaior10.join(", "))
console.log("Os números divisiveis por 5 são: ")
console.log(listaDiv5.join(", "))
