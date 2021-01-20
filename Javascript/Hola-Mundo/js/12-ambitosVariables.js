'use strict'

// EL AMBITO DE LAS VARIABLES 

//las variables que estan dentro de la funcion se pueden utilizar ahi y no pueden ser  llamadas desde afuera las variables solas solo con la funcion
// en cambio las variable fuera del la funcion puden ser llamadas desde el interior

//metodo .toString  permite trasnformar el numero a un string  

function holaMundo (texto, hola){
    var  hola = "holamundo";
    console.log(texto);
    console.log(hola);

}

var texto = "hola mundo variable global";

 holaMundo(texto);
 holaMundo(texto);
