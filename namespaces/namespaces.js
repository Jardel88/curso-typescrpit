"use strict";
/*
namespace Geometria {
    export namespace Area {

        const PI = 3.14

        export function areaCircunferencia(raio: number): number {
            return PI * Math.pow(raio, 2)
        }

        export function areaRetangulo(base: number, altura: number): number {
            return base * altura
        }
    }
}
*/
///<reference path="geometriaCirc.ts"/>
///<reference path="geometriaRect.ts"/>
const PI = 2.99;
console.log(Geometria.Area.circunferencia(10));
console.log(Geometria.Area.retangulo(10, 20));
console.log(PI);
