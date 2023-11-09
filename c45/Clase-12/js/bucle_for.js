//*BUCLE FOR
//todo: Hacer un programa que ingrese por teclado 5 numeros y los sume, luego muestre el resultado en pantalla.
//Opción 1

/* let num, suma= 0, cont; *///*Contador

//opción 2
let num; //global
let suma = 0;
let cont;

for(cont = 6; cont <= 5; cont++){
    num =parseInt(prompt("Ingrese un numero entero: "));
    document.write("Numero ingresado " + num + "<br>");
    suma = suma + num;
}
document.write("La suma es: " + suma);




