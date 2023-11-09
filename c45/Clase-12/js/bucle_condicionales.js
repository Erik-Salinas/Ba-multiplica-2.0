//*BUCLE WHILE CON IF ELSE
//todo:Hacer un programa que ingrese por teclado numeros enteros , 0 para terminar y los sume,luego muestre por pantalla el resultado de la suma.

let num,suma =0;

num=parseInt(prompt("Ingrese un entero, 0 para terminar"));

while(num!=0){
    document.write("Numero ingresado: "+ num + "<br>");
    suma+=num; //Forma corta
    /* suma = suma + num; */ //Forma larga

    //llamamos a la variable, evitar un bucle infinito y cerrar repetición
    num=parseInt(prompt("Ingrese un entero, 0 para terminar"));
}
//Condicionales 
if(suma!=0){
    document.write("La suma es: " + suma);
}
else{
    document.write("No se ingresaron numeros")
}