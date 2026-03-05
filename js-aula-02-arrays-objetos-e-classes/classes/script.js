//CLASSES NO JAVACRIPT
//NOME DE CLASSES DEVEM INICIAR COM A PRIMEIRA LETRA MAIUSCULA
class Carro {
    constructor(marca, modelo, ano) {
        //this é uma referência às instâncias que serão criadas através dessa classe
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }    
    //DEFININDO OS MÉTODOS
    buzinar() {
        return "BEEP!, BEEP!";
    }
}

//INSTANCIANDO OBJETOS
const carroPopular = new Carro("Fiat", "Uno", "2012");

document.write(`<p>O carro é um ${carroPopular.marca} ${carroPopular.modelo} do ano ${carroPopular.ano} e quando buzina faz ${carroPopular.buzinar()}</p>`);

const carroEsportivo = new Carro();
carroEsportivo.marca = "Chevrolet";
carroEsportivo.modelo = "Camaro";
carroEsportivo.ano = "2020";
carroEsportivo.turbo = function () {
return "Vrummmm!";
};
document.write(`<p>O carro é um ${carroEsportivo.marca} ${carroEsportivo.modelo} do ano ${carroEsportivo.ano} e quando buzina faz ${carroEsportivo.buzinar()} e quando acelera faz ${carroEsportivo.turbo()}</p>`);
