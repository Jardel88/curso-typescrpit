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

class Produto {
    constructor(public nome: string, public preco: number, public desconto: number = 0){}

    public resumo(): string {
        return `${this.nome} custa R$${this.preco} (${this.desconto * 100}% off)`
    }
}

const prod1 = new Produto('Caneta Bib Preta', 4.30)
prod1.desconto = 0.05
console.log(prod1.resumo())

const prod2 = new Produto('Caderno escolar', 18.80, 0.15)
console.log(prod2.resumo())

class Carro {
    private velocidadeAtual: number = 0

    constructor(public marca: string, public modelo: string,
        private velocidadeMaxima: number = 200) {
            
    }

    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima

        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }

        return this.velocidadeAtual
    }

    public acelerar(): number {
        return this.alterarVelocidade(5)
    }

    public frear(): number {
        return this.alterarVelocidade(-5)
    }

}

const carro1 = new Carro('ford', 'ka', 185)

Array(50).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar())

Array(20).fill(0).forEach(() => carro1.frear())
console.log(carro1.frear())

class Ferrari extends Carro{

    constructor(modelo: string, velocidadeMaxima: number){

        super('Ferrari', modelo, velocidadeMaxima)

    }

    public acelerar(): number {
        return this.alterarVelocidade(20)
    }

    public frear(): number {
        return this.alterarVelocidade(-10)
    }

}

const f40 = new Ferrari('F40', 324)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())