//DECLARANDO E EXIBINDO ITENS DE UM ARRAY
let produtos = [];
document.write(typeof(produtos));

let products = ['Notebook', 'Smartphone', 'Tablet', 'Monitor', 'Teclado'];
document.write(`<p>${products}</p>`);

document.write('<p>Exibindo os elementos do vetor através do índice:</p>')
document.write(`<p>${products[0]}</p>`);
document.write(`<p>${products[1]}</p>`);
document.write(`<p>${products[2]}</p>`);
document.write(`<p>${products[3]}</p>`);
document.write(`<p>${products[4]}</p>`);

document.write('<p>Exibindo os elementos do vetor através do forEach:</p>')
products.forEach((products) => {
    document.write(`<p>${products}</p>`);
});

document.write('<p>Exibindo os elementos do vetor através do forEach COM OS ÍNDICES:</p>')
products.forEach((products, i) => {
    document.write(`<p>${i+1} - ${products}</p>`);
});

//METODOS DE MANIPULAÇÃO DE VETORES
let frutas = ['Maçã', 'Banana', 'Laranja'];
document.write(`<p>Nossa lista de frutas é: ${frutas}</p>`);
frutas[3] = 'Abacaxi';
document.write(`<p>Agora nossa lista de frutas é: ${frutas}</p>`);

document.write('<h4>O método PUSH - Insere um novo elemento no final do vetor.</h4>');
frutas.push('Uva');
document.write(`<p>Agora nossa lista de frutas é: ${frutas}</p>`);

document.write('<h4>O método UNSHIFT - Insere um novo elemento no início do vetor.</h4>');
frutas.unshift('Morango');
document.write(`<p>Agora nossa lista de frutas é: ${frutas}</p>`);

//COMO CONTAR OS ELEMENTOS DE UM VETOR - Método LENGTH
const itens = frutas.length;
document.write(`<p>O número de itens da nossa lista de frutas é: ${itens}</p>`);