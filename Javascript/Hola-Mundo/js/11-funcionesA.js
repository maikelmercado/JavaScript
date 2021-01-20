'use strict'

// FUNCIONES ANONIMAS Y CALLBACKS

//funciones anonimas y callbacks funcion que no tiene nombre y se puede guardar dentor de una variable 

//FUNCION ANONIMA
/*var pelicula = function (nombre){
    return"la pelicula es "+nombre;
}*/


//callback es una funcion que se ejecuta dentro de otra funcion 

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);


    return sumar;
}
sumame(5,8, function (dato){
    console.log("la suma es:", dato);
},
function (dato){
    console.log("la suma de los dos numeros es:  ", (dato*2));
});