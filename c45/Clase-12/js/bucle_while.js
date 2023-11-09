//*BUCLE WHILE
//todo: Hacer un programa que ingrese por teclado 5 numeros y los sume, luego muestre el resultado en pantalla

let num; //global
let suma = 0;
let cont = 1;
let usuario = parseInt(prompt("Ingrese la cantidad que deas repetir lqa "))

while(cont <=5){
    num=parseInt(prompt("Ingrese un entero: "));
    document.write("Numero ingresado " + num +"<br>");
    suma=suma + num; 
    cont++
    //Permite que se valla sumando hasta llegar a 5 EVITAMOS BUCLE INFINITO
}
document.write("La suma es: " + suma);  