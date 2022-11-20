//TIPOS IMPLICITOS

//string
let nome = 'João'
console.log(nome)
//nome = 28


//numbers
let idade = 27
console.log(idade)
//idade = 'João'

//Em js tudo é number
idade = 27.5
console.log(idade)

// boolean
let possuiHobbies = false
console.log(possuiHobbies)
//possuiHobbies = 1
possuiHobbies = true
console.log(possuiHobbies)

//TIPOS EXPLICITOS

let minhaIdade: number
minhaIdade = 100
console.log(typeof minhaIdade) //pegando o tipo da variável

//array
let hobbies = ["correr", "malhar"]
console.log(hobbies[0])
console.log(hobbies[1])
//hobbies = [100]

//array tipo any
let hobbies2: any[] = ["correr", "malhar"]
console.log(hobbies2[0])
console.log(hobbies2[1])
hobbies2 = [100, 200]
console.log(hobbies2)

//tuplas
let endereco: [string, number] = ["AV Paulista", 99] 
console.log(endereco)
console.log(endereco[1])
console.log(endereco[0])

//let endereco2: [string, number] = [99, "AV Paulista"] 
//console.log(endereco)

//enum
enum Cor {
    Cinza, //0
    Verde, //1
    Azul, //2
    Laranja, //3
    Amarelo, //4
    Vermelho //5
}
console.log(Cor)

let minhaCor = Cor.Verde
console.log(minhaCor)
console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Vermelho)
console.log(Cor.Verde, Cor.Cinza)

enum Cor2 {
    Cinza,
    Verde, //1
    Azul = 100, //100
    Laranja, //3
    Amarelo = 200, //200
    Vermelho, //201
    Preto, //202
    Branco = 3, //3
}
let minhaCor2 = Cor2.Verde
console.log(minhaCor2)
console.log(Cor2)

// any
let carro: any = "BMW"
console.log(carro)
carro = {marca: 'BMW', ano: 2022}
console.log(carro)

//funções
function retornaMeuNome(){
    return minhaIdade
    return nome
}
console.log(retornaMeuNome())

function retornaMeuNome2(): string{
    //return minhaIdade
    return nome
}
console.log(retornaMeuNome2())

function digaOi() {
    console.log('Oi')
    return minhaIdade
}
digaOi()

function digaOi2(): void {
    console.log('Oi')
    //return minhaIdade
}
digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}
//console.log(multiplicar(2, 'Teste'))
console.log(multiplicar(2.5, 4))

const teste = function(a: number, b: number): boolean {
    return false
}

//tipo função
//let calculo: (x: number, y: number) => number
let calculo: (x: number, y: number) => number //Surgiu no ES6
calculo = multiplicar
console.log(calculo(5, 4))

//objetos
let usuario: {nome: string, idade: number} = {
    nome: 'João',
    idade: 100
}
console.log(usuario)

usuario = {
    nome: 'Maria',
    idade: 100
}
console.log(usuario)

//union types
/*
let nota: any = 10
console.log(`Minha nota é ${nota}`)
nota = '10'
console.log(`Minha nota é ${nota}`)
nota = true
*/

let nota: number | string = 10
console.log(`Minha nota é ${nota}`)
nota = '10'
console.log(`Minha nota é ${nota}`)

//checando tipos manualmente
let valor = 30
if (typeof valor === "number") {
    console.log("é um number!")
} else {
    console.log(typeof valor)
}

//tipo never, utilizada quando a função n~~ao tem um retorno correto ou entra em looping infinito
 function falha(msg: string): never {
    throw new Error(msg)
 }

 const produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0){
            falha('O produto precisa ter um nome!')
        }
        if (this.preco <= 0){
            falha('Preço inválido!')
        }
    }
 }
 produto.validarProduto()

 // valores opcionais tipo null

let altura = 12
//altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null

 type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
 }

 const contato1: Contato = {
    nome: 'Teste',
    tel1: '123456789',
    tel2: null
 }

 console.log(contato1.nome)
 console.log(contato1.tel1)
 console.log(contato1.tel2)

 let podeSerNulo = null //Nesse caso a variável assume o tipo any
 podeSerNulo = 12
 console.log(podeSerNulo)
 podeSerNulo = 'abc'
 console.log(podeSerNulo)
 podeSerNulo = true
 console.log(podeSerNulo)