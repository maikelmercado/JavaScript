'use strict'
//ARRAY MULTIDIMENCIONALES array dentros de otros array 

var categorias =["accion", "terror","comedia"];
var peliculas =["rocky", "robot", "picapiedras"];

var cine = [categorias, peliculas];

//console.log(cine[0][1]); 
//console.log(cine[1][2]);
//aca se ve que el array tiene dos categorias y se puede ingresar y llamando a los parametros de los array



//añadir elementos a la array, se hace con metodo PUSH
var elemento = prompt("introduce una pelicula");

while (elemento!="ACABAR"){
    elemento = prompt("introduce una pelicula");
    peliculas.push(elemento);
}

peliculas.pop(); //METODO  POP elimina el ultimo elemnto de un array
                //INDEXOF () METODO para buscar en el array
                //splice    cuantos eleementos borra desde  y borra elementos de un array
                //join convierte a un string el array

var cadena =("texto", "texto1", "texto2");
var cadena_array = cadena.split(",");
            
console.log(cadena_array);




