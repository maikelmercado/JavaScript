'use strict'

//METODO PARA ORDENAR UN ARRRAY

 var peliculas = ["Arocky", "Cblack", "Brobot"];

 peliculas.sort(); //METODO PARA ORDENAR o orden alfabetico
 peliculas.reverse(); //orden inverso

 console.log(peliculas);

 //otra forma de recorrer un array es  - for in


 //busquedas en un array con el metodo find


 //var busqueda = peliculas.find(function(peli){
   //  return peli =="Cblack";

 //});

 // lo mismo de arriba se puede hacer asi tambien para reducir codigo 

 var busqueda = peliculas.find(peli => peli == "Cblack");

console.log(busqueda);

//PPRUEBA DE CAMBIO MARTES 26-01 segundo intento otra rama    
//tercer cambio 
// cuarto cambio 