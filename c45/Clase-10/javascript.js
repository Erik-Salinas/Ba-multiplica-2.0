//*VARIABLES
//?EJERCICIO 1
var num = 0;
var num = 0;
var num = 0;

let num1 = 2; //global
num1 = 5;
num1 = 6;

const num3 = 8;


var resultado = ((num1 + num2) - num3);
console.log(resultado);

var resultado = ((num1 + num1) - num1);
console.log(resultado);
/* document.write(resultado); */ //Muestra la información en pantalla como la consola.

//?EJERCICIO 2
/* let usuario = prompt("Ingrese nombre de usuario"); */
/* let numero = parseInt(prompt("Ingrese un numero"));
let numer2 = parseInt(prompt("Ingrese otro numero")); */
/* console.log(usuario);
console.log(numero);
console.log(numer2); */

//*CONDICIONALES

/* if (usuario == "juan" || usuario == "JUAN") {
    let numero = parseInt(prompt("Ingrese un numero"));
    let numer2 = parseInt(prompt("Ingrese otro numero"));
    document.write("El usuario es correcto, BIEVENIDO JUAN" + "<br>" + "Numero ingresados: "+ numero + "+" + numer2 + "=" + (numero + numer2));
}
else {
    alert("Usuario incorrecto");
}
 */

//?EJERCICIO 3
/* let num1 = parseInt(prompt("Ingrese un numero"));
let op = prompt("Ingrese operador");
let num2 = parseInt(prompt("Ingrese un numero"));

if(op == "+"){
    document.write("La suma es: " + num1 + " + " + num2 + " = " + (num1 + num2));
}
else if(op == "-"){
    document.write("La resta es: " + num1 + " - " + num2 + " = " + (num1 - num2));
}
else if(op == "*"){
    document.write("La multiplicación es: " + num1 + " * " + num2 + " = " + (num1 * num2));
}
else if(op == "/"){
    if(num2  != 0){
        document.write("La divición es: " + num1 + " / " + num2 + " = " + (num1 / num2));
    }
    else{
        document.write("NO SE PUEDE DIVIDIR POR 0 !!!")
    }
}
else{
    alert("NO EXISTE ESE OPERADOR 😡")
}
 */

//*ACTIVIDADES
/* 
?ACTIDIAD 1
? Ingrese  nota entre 1 al 10 y muestre por pantalla si esta aprobado o desaprobado.
*/

/* let nota = parseInt(prompt("Ingrese nota"));

if(nota >= 1 && nota <= 10){ 
    if(nota >= 5){
        document.write("APROBADO 🥳")
    }
    else{
        document.write("DESAPROBADO 😔")
    }
} 
else{
    alert("ERROR AL INGRESAR NOTA")
} */
/* else{ 
    document.write("APROBADO🥳")
} */

/* if(nota <= 5){
    console.log("DESAPROBADO😔");
    alert("DESAPROBADO😔");
    document.write("DESAPROBADO😔")
}
else{
    console.log("APROBADO🥳");
    alert("APROBADO🥳");
    document.write("APROBADO🥳")
} */

/* hola*/
//hola
/* if(nota >= 5 && nota <= 10){ 
    document.write("DESAPROBADO😔")
} 
else{ 
    document.write("APROBADO🥳")
} */


/* var nota;
nota=parseInt(prompt("Ingrese la nota: "));
document.write("Nota ingresada: "+nota+"<br>");
if(nota>=1 && nota<=10)
{
    if(nota>=4)
        document.write("Aprobado");
    else
        document.write("Desaprobado");
}
else
    document.write("Nota incorrecta"); */
/* 

?AVTIVIDAD 2

?Ingrese nota entre 1 al 10, si no nota incorrecta si nota == 10 (exelente), <= 8 (muy bueno), <= 6 (bueno), <= 4(regular), nota < 0 (mal) 
*/



/* var nota = parseInt(prompt("Ingrese su una nota del 1 al 10"));



document.write("Numero ingresado: " + nota + "<br>");
if (nota >= 1 && nota <= 10) {
    if (nota == 10)
        document.write("Su nota es excelente");
    else if (nota >= 8)
        document.write("Su nota es muy buena");
    else if (nota >= 6)
        document.write("Su nota es buena");
    else if (nota >= 4)
        document.write("Su nota es  regular");
    else
        document.write("Su nota es mala");
}
else
    document.write("Nota incorrecta")
 */



/* let num1 = parseInt(prompt("Ingrese numero"));
console.log(num1);

let num2 = parseInt(prompt("Ingrese numero"));
console.log(num2);

let suma = (num1 + num2);
console.log(suma); */

