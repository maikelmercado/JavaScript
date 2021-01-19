'use strict'

//programa que pida  2 numeros y que diga cual es el mayor el menor y si son iguales
//plus si los numeros no son un numero que vuelva a pedir los numeros

var num1 = parseInt(prompt("digite un mumero",0));
var num2 =parseInt(prompt("digite otro numero", 0));


while(num1<=0 ||num2 <=0 ||isNaN(num1)|| isNaN(num2)){

    num1 = parseInt(prompt("digite un mumero",0));
    num2 =parseInt(prompt("digite otro numero", 0));


}

if (num1==num2){
    alert("los numeros no son iguales");
}else if(num1>num2){
    alert("el numero  es mayor " +num1);
    alert("el numero es menor "+num2);
}else if (num1<num2){
    alert("el numero es mayor "+num2);
    alert("el numero es menor "+num1);
}else {
    alert("introduce un numero correcto");

}

