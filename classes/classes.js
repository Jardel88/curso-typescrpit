"use strict";
class Data {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(7, 3, 1988);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);
class DataTeste {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioTeste = new DataTeste(7, 3, 1988);
aniversarioTeste.dia = 4;
console.log(aniversarioTeste.dia);
console.log(aniversarioTeste);
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa R$${this.preco} (${this.desconto * 100}% off)`;
    }
}
const prod1 = new Produto('Caneta Bib Preta', 4.30);
prod1.desconto = 0.05;
console.log(prod1.resumo());
const prod2 = new Produto('Caderno escolar', 18.80, 0.15);
console.log(prod2.resumo());
