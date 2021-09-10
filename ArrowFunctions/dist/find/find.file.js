"use strict";
let userListFind = [
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
let usuario = userListFind.find((valor, index) => valor.edad > 25);
console.log(usuario);
//# sourceMappingURL=find.file.js.map