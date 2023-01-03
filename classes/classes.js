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
