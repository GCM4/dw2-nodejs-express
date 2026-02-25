function showMessage(){
    const Message = "<h2>Olá, bem-vindo</h2>";
    document.write(Message);
}
// INVOCANDO A FUNÇÃO
showMessage();

// FUNÇÃO COM PARÂMETRO / ARGUMENTO
const user = "Guilherme";

function showUserMessage(user) {
    // Essa função recebe um parâmetro
    document.write(`<h3>O que deseja fazer hoje, ${user}?</h3>`);
}

showUserMessage(user); //Envio de argumento

// FUNÇÃO COM MAIS DE UM PARÂMETRO
const n1 = 10;
const n2 = 5;

function sum(n1, n2) {
    // Essa função recebe dois parâmetros
    let result = n1 + n2;
    document.write(`<p>A soma de ${n1} + ${n2} é igual a ${result}.</p>`);
}

// Invocando a função
sum(n1, n2); // Enviando os argumentos

// FUNÇÃO COM RETORNO
const num1 = 50;
const num2 = 3;

// É INDICADO QUE AS FUNÇÕES POSSUAM O MÍNIMO DE RESPONSABILIDADES POSSIVEIS
// ESSA FUNÇÃO IRÁ MULTIPLICAR DOIS NÚMEROS
function mult(num1, num2) {
    return num1 * num2;
}

document.write(`O resultado da multiplicação é ${mult(num1,num2)}.`);

// FUNÇÃO COM RETORNO CONDICIONAL
const number = 4;

function parImpar(number) {
    if (number % 2 == 0) {
        return "par";
    } else {
        return "impar"
    }
}
document.write(`<p> O número ${number} é ${parImpar(number)}.</p>`);

// FUNÇÃO SETA (ARROW FUNCTION) -> É UM TIPO DE FUNÇÃO DE ANÓNIMA
const dobro = (x) => {
    return x * 2;
};
const x = 300;
document.write(`<p>O dobro de ${x} é ${dobro(x)}.</p>`)

// ARROW FUNCTION COM MAIS DE UM PARÂMETRO
const calculadora = (a, operador, b) => {
    return eval(`${a} ${operador} ${b}`);
};
document.write(`<p>O resultado da operação matematica é ${calculadora(1100, "-", 2)}</p>`);