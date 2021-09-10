"use strict";
const userList = [
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
];
let newUserList = userList.map(function (value, index) {
    let nombreCompleto = `${value.nombre} ${value.apellido}`;
    let birthYear = new Date().getFullYear() - value.edad;
    let newEmail = value.email;
    if (newEmail.indexOf(".") == -1) {
        newEmail = `${newEmail}.com`;
    }
    let newObject = {
        nombreCompleto: nombreCompleto,
        birthYear: birthYear,
        newEmail: newEmail,
    };
    return newObject;
});
//# sourceMappingURL=map.file.js.map