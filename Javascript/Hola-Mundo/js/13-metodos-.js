'use strict'

//METODOS PARA PROCESAR DATOS 

//transformacion de textos 

var numero = 444;
var texto1 = "bienvenido al curso";
var texto2 = "practicando como tranformar un numero a un string"

var dato = numero.toString(); //funcion que hace numero en texxto
dato =texto1.toUpperCase(); //convierte en mayuscula
dato=texto1.toLowerCase(); //convierrte en minuscula
console.log (dato);

//calcular longitud lenght

var nombre ="holaaaaaaaaaaaa"
console.log (nombre.length);

//concatenar - unir texto

var textoTotal = texto1+texto2;
console.log(textoTotal);