"use strict";
const MainList = [
    {
        nombre: 'Jose Carlos',
        apellido: 'Gonzales Soriano',
    },
    {
        nombre: 'Edgar',
        apellido: 'Torres',
    },
    {
        nombre: 'Arturo',
        apellido: 'Esqueda',
    },
];
let arrayNuevo = MainList.forEach(imprimirDato);
console.log(arrayNuevo);
function imprimirDato(value, index) {
    let nombreCompleto = `${index + 1}.- ${value.nombre} ${value.apellido}`;
    console.log(nombreCompleto);
    return nombreCompleto;
}
/*function imprimirDato(numero: number){
    console.log(numero)
}

function calcularValor(numero1: number, numero2: number, callback: Function){
    let resultado: number= numero1 + numero2;
    callback(resultado);
}

calcularValor(1, 2, imprimirDato);*/ 
//# sourceMappingURL=foreach.js.map