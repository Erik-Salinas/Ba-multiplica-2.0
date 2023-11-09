/* let num, resultado;

num=parseInt(prompt("Ingrese un entero: "));
document.write("Valor ingresado: " + num + "<br>");

resultado=triple(num);//LLamado de la función (inventamos nombre)
document.write("El triple de " + num + " es " + resultado);


//Difinir función
                //variable
function triple(n){

    let r; //agregamos variable
    r=3*n;
    return r; //Devuelve al punto de llamada con el dato obtenido

}
 */

let modal = document.querySelector("#ventana_modal");
modal.addEventListener("click", ventana);

function ventana() {

    let num1 = parseInt(prompt("Ingrese un numero"));
    let operador = prompt("Ingrese un operador");
    let num2 = parseInt(prompt("Ingrese un numero"));
    let repeticiones = 2;

    for (cont = 1; cont <= repeticiones; cont++) {
        if (operador == "+") {
            document.write(num1 + " + " + num2 + " = " + (num1 + num2) + "<br>");
        }
        else if (operador == "*") {
            document.write(num1 + " * " + num2 + " = " + (num1 * num2) + "<br>");
        }
        else {
            alert("No se encuentra operador 😩")
        }
        num1 = parseInt(prompt("Ingrese un numero"));
        operador = prompt("Ingrese un operador");
        num2 = parseInt(prompt("Ingrese un numero"));
    }

}
