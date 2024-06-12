/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class Pessoa{
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }

    classificarImc(){
        const imc = this.calcularImc();
        if(imc < 18.5){
            return ('Abaixo do peso')
        }else if(imc >= 18.5 && imc < 25) {
            return ('Peso normal')
        } else if(imc >= 25 && imc < 30) {
            return ('Sobrepeso')
        } else if(imc >= 30 && imc < 40) {
            return ('Obesidade')
        } else {
            return ('Obesidade mórbida')
        }
    }

   
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose.classificarImc());
const thiago = new Pessoa('Thiago', 88, 1.88);
console.log(thiago.classificarImc());
const adriele = new Pessoa('Adriele', 74, 1.83);
