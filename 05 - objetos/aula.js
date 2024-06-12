
const pessoa = {
    nome: 'Thiago',
    idade: 28,
    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

const atributo = 'idade';

console.log(pessoa[atributo]);


//da para usar essas duas formas dependendo do que vai fazer.
pessoa['nome'] = 'teste';
pessoa.nome = 'teste';