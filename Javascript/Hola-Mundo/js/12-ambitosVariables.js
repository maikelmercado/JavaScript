'use strict'


//las variables que estan dentro de la funcion se pueden utilizar ahi y no ser llamadas desde afuera 
// en cambio las variable fuera del la funcion puden ser llamadas desde el interior

function holaMundo (texto){
    console.log(texto);
}

var texto = "hola mundo variable global";
 holaMundo(texto);
