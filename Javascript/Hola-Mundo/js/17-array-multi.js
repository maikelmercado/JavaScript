'use stric'

//Array multidimencianal Array dentro e otro array

var categorias =['acccion','terror', 'comedia'];
var peliculas  = ['rapido y furioso', 'toreto', 'perros'];

var cine = [categorias, peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][2]);


var elemento = ("");
do {
    elemento = prompt("introduce una  pelicula");
    peliculas.push(elemento);
}while(elemento !="ACABAR"){

  peliculas.pop(peliculas); // pop lo que hace eliminar  el ultimo elemento de una array

  //METODO split 

   

}


//peliculas.push("batman"); //metodo push para añadir un elemento a la array
console.log(peliculas);

