//Definição
class Pessoa {
    nome;
    idade;

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}


//Ocorrencia
const thiago = new Pessoa();
thiago.nome = 'Thiago Oliveira';
thiago.idade = '28';

const alice = new Pessoa();
alice.nome = 'Alice Oliveira';
alice.idade = '2';

const adriele = new Pessoa();
adriele.nome = 'Adriele Oliveira';
adriele.idade = '26';

thiago.descrever();
console.log('---------------------')
alice.descrever();
console.log('---------------------')
adriele.descrever();