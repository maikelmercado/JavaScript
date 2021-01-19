'use strict'
//funciones anonimas y callbacks funcion que no tiene nombre y se puede guardar dentor de una variable 
//callback es una funcion que se ejecuta dentro de otra


/*var pelicula = function (nombre){
    return"la pelicula es "+nombre;
}*/


function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);


    return sumar;
}
sumame(5,8, function (dato){
    console.log("la suma es:". dato);
},
function (dato){
    console.log("la suma de los dos numeros es:  ", (dato*2));
});