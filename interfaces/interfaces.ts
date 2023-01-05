interface Humano {
    nome: string
}

function saudarComOla(pessoa: Humano) {
    console.log('Olá, ' + pessoa.nome)
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Outro nome'
}

const pessoa = {
    nome: 'Teste',
    idade: '100'
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)