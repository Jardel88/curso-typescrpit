"use strict";
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        const PI = 3.14;
        function areaCircunferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Area.areaCircunferencia = areaCircunferencia;
        function areaRetangulo(base, altura) {
            return base * altura;
        }
        Area.areaRetangulo = areaRetangulo;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
const PI = 2.99;
console.log(Geometria.Area.areaCircunferencia(10));
console.log(Geometria.Area.areaRetangulo(10, 20));
console.log(PI);
