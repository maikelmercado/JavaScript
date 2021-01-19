'use strict'

//parametros REST y SPREAD, 
//rest vendria siendo como un array un conjunto de datos 

function listadoFrutas(fruta1, fruta2, ...resto_de_fruta){

    console.log("Fruta 1 ", fruta1);
    console.log("Fruta 2 ", fruta2);
    console.log(resto_de_fruta);

}
listadoFrutas("naraja","pera","melon", "sandia");

//que respete el parametro 1 y 2 que hace un spread
var frutas =["coco", "chirimoya "];
listadoFrutas(...frutas, "kiwi", "platano", "guinda");
 

