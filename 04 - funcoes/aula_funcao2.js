function escreverNome(nome) {
    return 'Meu nome é '+ nome;
}

escreverNome('Thiago');

function verificarIdade(idade) {
    if (idade >= 18){
        console.log('Meu nome é Thiago e sou ' + 'maior de idade');
    } else {
        console.log('Meu nome é Thiago e sou ' +'menor de idade');
    }
}

verificarIdade(17);