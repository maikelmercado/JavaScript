'use strict'

//mostrar todos los numeros impares que esten entre dos numeros introducidos por el teclado 


var num1 = parseInt(prompt("introduce el primer nuemero", 0));
var num2 = parseInt(prompt("introduce el segundo  nuemero", 0));


while(num1<num2){
    num1++;

    if(num1%2 !=0){

        console.log("el "+num1+"es impar")

}


}