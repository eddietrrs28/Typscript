"use strict";
function funcionUno(numero1, numero2) {
    let Resultado = numero1 + numero2;
    return Resultado;
}
let resultadoFuncUno = funcionUno(5, 6);
console.log(resultadoFuncUno);
let funciondos = (numero1, numero2) => numero1 + numero2;
console.log(funciondos(7, 8));
let funciontres = (saludo) => saludo.toLowerCase();
console.log(funciontres("Hola"));
let palabra1 = "Hola mundo";
let palabra2 = "odnum aloH";
let validarPalabraIgual = (palabra1, palabra2) => palabra1.split('').reverse().join() == palabra2 ? 'Es igual la palabra' : 'La palabra no es igual';
console.log(validarPalabraIgual(palabra1, palabra2));
//# sourceMappingURL=arrowFunction.js.map