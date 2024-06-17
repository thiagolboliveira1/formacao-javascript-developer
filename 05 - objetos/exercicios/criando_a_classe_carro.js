/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilometros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Car{
    constructor(marca, cor, consumo){
        this.marca = marca;
        this.cor = cor;
        this.consumo = consumo;
    }
    calcGasto(km, preco){
        return (km * this.consumo) * preco;
    }
    resultado(){
        return `Marca: ${this.marca}, Cor: ${this.cor}, Consumo: ${this.consumo}`;
    }
}

const uno = new Car('Fiat', 'Preto', 1/14);
console.log(uno.calcGasto(700, 6.29))

const ford = new Car('Fiesta', 'Vermelho',1/12);
console.log(ford.calcGasto(700, 6.29))
