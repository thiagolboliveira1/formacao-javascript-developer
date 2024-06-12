//Definição
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }
    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}


//Ocorrencia
const thiago = new Pessoa('Thiago', 29);
const alice = new Pessoa('Alice', 2);
const adriele = new Pessoa('Adriele', 27);



console.log(thiago);
console.log(alice);
console.log(adriele);