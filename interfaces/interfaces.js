"use strict";
function saudarComOla(pessoa) {
    console.log('Olá, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Outro nome';
}
const pessoa = {
    nome: 'Teste',
    idade: '100'
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
