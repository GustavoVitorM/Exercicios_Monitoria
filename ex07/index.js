/**
 * 7 - Crie um programa que faça o sorteio de 20 números 
 * inteiros aleatórios entre 0 e 20 e mostre numa janela:
 * Quais números foram sorteados
 * Quantos números estão acima de 10
 * Quantos números são divisíveis por 5
 */
var listaNum = []
var listaPar = []
var listaDiv5 = []

for (var i = 10; i > 0; i--) {
    listaNum.push(Math.floor(Math.random() * (20 - 1) + 1))
}

listaNum.forEach(e => {
    if (e%2 === 0) {
        listaPar.push(e)
    }
    if (Number.isInteger(e/5)) {
        listaDiv5.push(e)
    }
});




document.getElementById("resultado").innerHTML = `
    <h1>Foram sorteados os seguintes números:</h1>
    <p>${listaNum}</p>
    <h3>Os pares sorteados são: </h3>
    <p>${listaPar}</p>
    <h3>Os números divisiveis por cinco são: </h3>
    <p>${listaDiv5}</p>`
    