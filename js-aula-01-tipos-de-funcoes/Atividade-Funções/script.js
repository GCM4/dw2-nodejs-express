// 1 – Função simples
function mostrarInformacoes() {
    document.write("<h3>1 - Função simples</h3>");
    document.write("Nome: João <br>");
    document.write("Idade: 25 <br>");
    document.write("Cidade: São Paulo <br><br>");
}

// Invocando a função
mostrarInformacoes();


// 2 – Função com parâmetros
function diviNum(num1, num2) {
    let resultado = num1 / num2;
    document.write("<h3>2 - Função com parâmetros</h3>");
    document.write("O resultado da divisão foi: " + resultado + "<br><br>");
}

// Chamando a função
diviNum(10, 2);


// 3 – Função com retorno
function mult3Num(a, b, c) {
    return a * b * c;
}

document.write("<h3>3 - Função com retorno</h3>");
let resultadoMultiplicacao = mult3Num(2, 3, 4);
document.write("Resultado da multiplicação: " + resultadoMultiplicacao + "<br><br>");


// 4 – Função com mais de um retorno
function veriIdade(idade) {
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

document.write("<h3>4 - Função com mais de um retorno</h3>");
document.write(veriIdade(20) + "<br><br>");


// 5 – Função anônima
let veriMedia = function(nota1, nota2) {
    let media = (nota1 + nota2) / 2;

    if (media <= 5) {
        return "Reprovado";
    } else {
        return "Aprovado";
    }
};

document.write("<h3>5 - Função anônima</h3>");
document.write(veriMedia(6, 7) + "<br><br>");


// 6 – Arrow function com parâmetro único
let triplo = numero => numero * 3;

document.write("<h3>6 - Arrow function com parâmetro único</h3>");
document.write("O triplo do número é: " + triplo(5) + "<br><br>");


// 7 – Arrow function com mais de um parâmetro
let soma4num = (a, b, c, d) => a + b + c + d;

document.write("<h3>7 - Arrow function com mais de um parâmetro</h3>");
document.write("A soma dos números é: " + soma4num(1, 2, 3, 4) + "<br><br>");