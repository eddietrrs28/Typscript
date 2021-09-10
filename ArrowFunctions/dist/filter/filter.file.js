"use strict";
const userListFilter = [
    {
        nombre: 'Jose Carlos',
        apellido: 'Gonzales',
        edad: 24,
        email: 'Jcsoriano@outlook.es',
    },
    {
        nombre: 'Ignacio',
        apellido: 'Reyna',
        edad: 27,
        email: 'Jcsoriano@outlook.es',
    },
    {
        nombre: 'Edgardo',
        apellido: 'Trsitan',
        edad: 26,
        email: 'Jcsoriano@outlook',
    },
    {
        nombre: 'Arturo',
        apellido: 'Esqueda',
        edad: 29,
        email: 'Jcsoriano@outlook',
    },
];
/*let filerElements = userListFilter.filter(function (valor, index){
    if(valor.edad>=26){
        return valor;
    }
})*/
let filterElements = userListFilter.filter((valor, index) => valor.edad >= 26 && valor.email.indexOf(".") != -1);
console.log(filterElements);
//# sourceMappingURL=filter.file.js.map