class Data {
    dia: number
    mes: number
    ano: number

    constructor(dia: number, mes: number, ano: number){

        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(7, 3, 1988)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

class DataTeste {

    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970){}

}

const aniversarioTeste = new DataTeste(7, 3, 1988)
aniversarioTeste.dia = 4
console.log(aniversarioTeste.dia)
console.log(aniversarioTeste)