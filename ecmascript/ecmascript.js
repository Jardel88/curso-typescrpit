"use strict";
/*let & var
console.log(seraQuePode)
var seraQuePode = "?"


let estaFrio = true
if (estaFrio) {
    let acao = 'Colocar o casaco.'
    console.log(acao)
}
//console.log(acao)

const cpf: string = '123.456.789-01'
//cpf = '123.456.789-02'
console.log(cpf)

// Arraow function
function somar(n1: number, n2: number): number {
    return n1 + n2
}
console.log(somar(2, 4))

const subtrair = (n1: number, n2: number): number => {
    return n1 - n2
}
console.log(subtrair(2, 4))

// Sintaxe reduzida
const multiplicar1 = (n1: number, n2: number): number => n1 * n2
console.log(multiplicar1(2, 4))

const saudacao = () => console.log("Olá")
saudacao()

const falarCom = (pessoa: string) => console.log('Olá ' + pessoa)
falarCom('João')

// this
function normalComThis(){
   // console.log(this)
}

const normalComThisBind = normalComThis.bind('123')
normalComThis()

// this???
//const arrowComThis = () => console.log(this)
arrowComThis()

const arrowComThisBind = arrowComThis.bind('123')
arrowComThisBind()
*/
// Parâmetros padrão
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("fim!");
}
contagemRegressiva();
contagemRegressiva(3);
// Spread operator, faz o espalhamento
const numbers = [1, 10, 20, 100, 90, 2];
//console.log(Math.max(numbers))
console.log(Math.max(...numbers));
const turmaA = ['João', 'Maria', 'José'];
const turmaB = ['Antonio', 'Francisco', ...turmaA, 'Lorena'];
console.log(turmaB);
/*
function retornaArray(arg1: number, arg2: number): number[] {
    return [arg1, arg2]
}
const numeros = retornaArray(1, 2)
console.log(numeros)
*/
// Rest operator, faz o agrupamento
function retornaArray(...args) {
    return args;
}
const numeros = retornaArray(1, 2, 3, 4, 5, 10, 20);
console.log(numeros);
// Spread e Rest com Tupla
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(Array.isArray(params));
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
// Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020];
//const motor = caracteristicas[0]
//const ano = caracteristicas[1]
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);
// Destructuring (objeto)
const item = {
    nome: 'SSD 1GB',
    preco: 500,
    caracteristicas: {
        w: 'Importado'
    }
};
// Sem destructuring
const nomeItem = item.nome;
const precoItem = item.preco;
console.log(nomeItem);
console.log(precoItem);
// Com destructuring
const { nome: n, preco: p, caracteristicas: { w } } = item;
console.log(n);
console.log(p);
console.log(w);
// Template string
const usuarioId = 'Teste';
const notificacoes = '8';
// Sem template
const boasVindas = 'Boas vindas' + usuarioId +
    'Notificações: ' + notificacoes;
// Com template
const boasVindas2 = `
    Boas vindas ${usuarioId},
    Notificações: ${parseInt(notificacoes) > 10 ? '+9' : notificacoes}
`;
console.log(boasVindas2);
console.log(`${(1 + 1) * 30}`);
console.log(`Motor: ${caracteristicas[0]}`);
