'use strict'

alert ("funciones flechas");

// las funciones de flechas es para definir funciones de callback =>

function flecha(num1, num2, prueba, prueba1){

    var suma = (num1 + num2);
    prueba (suma);
    prueba1(suma);
    
    
    
    return suma;
    }
    flecha ( 5,8, function(dato){
        console.log("la suma es:", dato);
    },
    function(dato){
        console.log("la suma x 2 es:", (dato*2));
    });
    


    //funciones por flecha
    function flecha(num1, num2, prueba, prueba1){

        var suma = (num1 + num2);
        prueba (suma);
        prueba1(suma);
        
        
        
        return suma;
        }
        flecha ( 5,8, dato=>{
            console.log("la suma es:", dato);
        },
        dato=>{
            console.log("la suma x 2 es:", (dato*2));
        });
        