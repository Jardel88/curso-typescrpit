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
function contagemRegressiva(inicio: number = 5, fim: number = inicio -5): void {
    console.log(inicio)
    while (inicio > fim) {
        inicio --
        console.log(inicio)
    }
    console.log("fim!")
}
contagemRegressiva()
contagemRegressiva(3)


