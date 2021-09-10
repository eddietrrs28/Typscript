"use strict";
/*Promises states

1.- Pending: El estado inicial de las promesas que nos indica que la promesa no se hacompilado aun.
2.- Fulfiled: El estado indica que la promesa ha sido exitosa.
3.- Rejected: El estado indica que hubo un error en la promesa.*/
const promise1 = new Promise((resolve, rejected) => {
    let task_done = true;
    if (task_done) {
        resolve('Task succesfuly');
    }
    else {
        rejected('Task invalid');
    }
});
promise1.then((result) => {
    console.log(result);
})
    .catch((error) => {
    console.log(error);
});
//# sourceMappingURL=Ejemplo1.js.map