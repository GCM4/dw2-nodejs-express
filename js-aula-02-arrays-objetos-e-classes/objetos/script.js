//OBJETOS LITERAIS NO JAVASCRIPT
document.write("<h4>Objetos literais possuem Atributos (propriedades) e Métodos (funções)</h4>");
const pessoa = {};
document.write(typeof(pessoa));

//CRIANDO UM OBJETO
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    cor: "Vermelho",
    //METODOS
    acelerar() {
        return "Vrum Vrum...";
    },
    frear() {
        return "Freando...";
    },
};
document.write(`<p>O modelo do carro é: ${carro.modelo}</p>`);
document.write(`<p>A marca do carro é: ${carro.marca}</p>`);
document.write(`<p>A cor do carro é: ${carro.cor}</p>`);
document.write(`<p>Quando o carro acelera, ele faz: ${carro.acelerar()}</p>`);
document.write(`<p>Ativando os freios: ${carro.frear()}</p>`);

//MANIPULANDO ARRAYS DE OBJETOS
const productList = [
    {
        none: "Computador",
        marca: "Dell",
        preco: 3000,
        descricao: "Computador de alta performance para trabalho",
    },{
        none: "Tablet",
        marca: "Samsung",
        preco: 1500,
        descricao: "Otima velocidade de processamento",
    },{
        none: "Celular",
        marca: "Apple",
        preco: 5000,
        descricao: "Otima câmera e bateria de longa duração",
    }];

//EXIBINDO O ARRAY DE OBJETOS ATRAVÉS DO FOREACH
document.write("<h4>Exibindo o array de objetos através do forEach:</h4>");
productList.forEach((product) => {
    document.write(`
        Produto: ${product.none} <br>
        Marca: ${product.marca} <br>
        Preço: R$ ${product.preco} <br>
        Descrição: ${product.descricao} <br><br>`);
});