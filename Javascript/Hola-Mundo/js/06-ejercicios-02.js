'use strict'
//Ejercicio utilizando un bucle, mostrar a suma y la media de los numeros introducidos hasta introducir un numero negativo ahi mostrar el resultado


var suma=0;
var contador=0;

do {
    var num1 = parseInt(prompt("introduce numeros hasta que metas un numero negativo"));
    if (isNaN(num1)){
        num1 =0;

    }else if (num1>0){
        suma = suma + num1;

        contador++;
    }
    console.log(suma);
    console.log(contador);

    }while(numero>=0)

    alert("la suma de todos los numeros es "+suma);
    alert("la media de todos los nuemros es "+(suma/contador));
  

    


}

