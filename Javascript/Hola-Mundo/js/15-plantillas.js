'use strict'

//plantillas


var nombre = prompt("mete tu nombre");
var apellidos = prompt("mete tu apillidos");

//var texto = "mi nombre es :  "+nombre+  " Mis apellidos son:  " + apellidos;
var texto = `
<h3>mi nombre es : ${nombre}</h3> 
<h4>mi apellido es : ${apellidos}</3>
`
//lo ultimo de javascrpt se ` comillas hacia arriba y se ponene las variables 

document.write(texto);