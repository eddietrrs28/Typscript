"use strict";
/*
Un callback (llamada de vuelta) es una función que recibe como argumento otra función y la ejecuta. En el siguiente ejemplo,
la función foo recibe por parámetro otra función, que es el callback. La función foo es la encargada de ejecutar el callback.
 */
function foo(callback) {
    callback();
}
/*
  Es importante tener en cuenta que cuando pasamos un callback solo pasamos la definición
  de la función y no la ejecutamos en el parámetro. Así, la función contenedora elige cuándo ejecutar el      callback.
    
    Un ejemplo muy común de callback es como función escuchadora de un evento.
 */
/*let showAlert = ()=>{
    console.error("Hubo un error");
};
window.addEventListener('click', showAlert);*/
/* Los callbacks también se utilizan para “avisar” cuando una función termina de hacer algo */
function foo2(callback) {
    console.log(2 + 2);
    callback();
}
foo2(() => {
    console.log('Finalizado');
});
//For each creado por nosotros
let numberList = [1, 2, 3, 4, 5, 6, 7, 8];
numberList.forEach((value, index) => {
    console.log(value * 2);
});
function PorCada(lista, callback) {
    for (let i = 0; i < lista.length; i++) {
        callback(lista[i], i);
    }
}
/*(numberList,(valor:any, index:number)=>{
    console.log(`${index + 1} -> ${valor * 2}`);
})*/
numberList.filter((value, index) => value > 3);
function filtro(numberList, callback) {
    let filterList = [];
    for (let index = 0; index < numberList.length; index++) {
        const element = numberList[index];
        if (callback(element, index) == true) {
            filterList.push(element);
        }
    }
    return filterList;
}
let filtroNuevo = filtro(numberList, (element, index) => {
    return element > 3;
});
console.log(filtroNuevo);
let x = numberList.map((value, index) => `${value}`);
function mapa2(numberList, callback) {
    let newList = [];
    for (let index = 0; index < numberList.length; index++) {
        const element = numberList[index];
        newList.push(callback(element, index));
    }
    return newList;
}
let y = mapa2(numberList, (valor, index) => {
    return `numero ${index}`;
});
console.log(y);
//# sourceMappingURL=callback.js.map