//*BUCLE DO WHILE
//todo: Hacer un programa que ingrese por teclado 5 numeros y los sume, luego muestre el resultado en pantalla
let num, suma=0, cont=1;

do{ 
    num=parseInt(prompt("Ingrese un entero: "));
    document.write("Numero ingresado " + num +"<br>");
    suma=suma + num;
    cont++;
}
//El control se encuentra abajo
while( cont<=5){
    
    document.write("La suma es: " + suma);
}