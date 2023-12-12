function aumento() {
    nome = document.getElementById("nome").value;
    depen = parseInt(document.getElementById("dependentes").value);
    sal = parseInt(document.getElementById("salario").value);
    resultado = document.getElementById("resultado");

    if (depen >= 1 && depen < 4) {
        novoSal = ((sal * 12) / 100) + sal;
    } else if (depen >= 4 && depen < 6) {
        novoSal = ((sal * 15) / 100) + sal;
    } else if (depen > 6) {
        novoSal = ((sal * 21) / 100) + sal;
    } else {
        novoSal = sal;
    }

    resultado.innerHTML = `O funcionário ${nome}, teve um aumento, com o novo salário de ${novoSal}`;
}