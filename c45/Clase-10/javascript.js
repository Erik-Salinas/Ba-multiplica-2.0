//*VARIABLES
//?EJERCICIO 1
/* let num1 = 2;
let num2 = 5;
let num3 = 8;
let resultado = ((num1 + num3) - num2); */
/* console.log(resultado); */
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
let num1 = parseInt(prompt("Ingrese un numero"));
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
