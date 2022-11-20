"use strict";
/*
    Criar um objeto funcionario com:
     - Array de string com nomes dos supervisores.
     - Função de bater ponto que recebe a hora e retorna uma string
       -> Ponto normal (<= 8)
       -> Fora do horário (> 8)
 

let funcionario: {
    supervisores: string[],
    baterPonto: (horas: number) => string
} = {
    supervisores: ['Maria', 'Jose'],
    baterPonto(horario: number): string {
        if(horario <= 8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horário'
        }
    }
}
*/
let funcionario1 = {
    supervisores: ['Maria', 'Jose'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log(funcionario1.supervisores);
console.log(funcionario1.baterPonto(10));
console.log(funcionario1.baterPonto(8));
console.log(funcionario1.baterPonto(7));
let funcionario2 = {
    supervisores: ['Antônio', 'João'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log(funcionario2.supervisores);
console.log(funcionario2.baterPonto(10));
console.log(funcionario2.baterPonto(8));
console.log(funcionario2.baterPonto(7));
