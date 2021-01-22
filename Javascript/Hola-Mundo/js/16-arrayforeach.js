'use strisct'
//ARRAY  FOR FOREACH 
//METODO FOREACH Recorre todo el array y lo itera 


var lenguajes = new Array("php", "java", "javascripts", "c#");

document.write("<h1>lenguajes de programacion 2021</h1>");
document.write("<ul>");


lenguajes.forEach((elem,ind )=>{

    document.write("<li> "+ind+"-"+elem+"</li>");

    
});