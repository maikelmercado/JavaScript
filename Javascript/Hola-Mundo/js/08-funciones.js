'use strict'
// funciones son un grupo de ordenes agrupados con un nombre concreto, cosas que se van a ejecutar 
//tengo una funcion que es acelerar que conbina varias ffunciones del motor


//funcion con parametros
function calculadora(num1, num2, mostrar =false){

    //parametro opcionales - no son obligatorios

    if (mostrar == false){
    console.log("suma " + (num1+num2));
    console.log("resta " + (num1-num2));
    console.log("multiplicacion " + (num1*num2));
    

    }else{
        
        document.write("suma " + (num1+num2)+ "<br/>");
        document.write("resta " + (num1-num2)+ "<br/>");
        document.write("multiplicacion " + (num1*num2)+ "<br/>");
        document.write("*******************")+ "<br/>";


    }

    //return("calculadora hhhahahahah");
     
}
calculadora(8,3);
calculadora (2,5,true);




//invoca o llama a la funcion
//calculadora(10,25);


//en bucle
/*
for(var i = 1; i<=10; i++)
{
    console.log(i);
    calculadora(i,1);
}
*/




