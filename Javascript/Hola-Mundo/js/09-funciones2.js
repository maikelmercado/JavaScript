'use strict'

function porConsola(num1, num2){

    console.log("suma " + (num1+num2));
    console.log("resta " + (num1-num2));
    console.log("multiplicacion " + (num1*num2));
}


function porPantalla(num1, num2){

        document.write("suma " + (num1+num2)+ "<br/>");
        document.write("resta " + (num1-num2)+ "<br/>");
        document.write("multiplicacion " + (num1*num2)+ "<br/>");
        document.write("*******************")+ "<br/>";
}

function calcular (num1, num2, mostrar= false){

    if (mostrar==false){
        porConsola(num1,num2);
        porPantalla(num1,num2);
    }else{
        

    }
    return(true);
}

calcular(50, 50, false);
calcular(70,80);