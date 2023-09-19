/* ¿Que es  Programación Orientada a Objetos.? */
//{} representamos los objetos

//*Introdcuccion
//Tipos de datos primitivos
/* console.log(typeof "Hello world");
console.log(typeof 100);
console.log(typeof false);

//objetos
console.log(typeof {});
console.log(typeof []);
console.log(typeof new date);

console.log(typeof new Number(100));
console.log(typeof new String("Hola mundo"));
console.log(typeof new Boolean(true)); */

//* objeto Literal
/* console.log( {}); */
//evitamos usar tantas variables

/* let nombre = "Juan"
let apellido = "Torres"
let edad = 30; */

//!objetos sin datos
/* const usuario2 ={} */

//!objeto con datos
/* const usuario ={
//Key/clave //  valor
    nombre: "Juan",
    apellido: "Torres",
    edad:30,
    hobbies:  ["Leer", "progrmar", "correr"],//areglo. No string
    //*Agregamos otro  objeto
    claves:{
        celular: "te quiero mama",
        auto:"toyota"
    }
}
console.log(usuario);
 */

//*Propiedad

/* Los datos de un objeto virtual (no se puede ver en la vida real )se puede convertir en obejeto literal con {} */


/* const usuario ={
    nombre: "Juan", //propiedad de los objetos
    apellido: "Torres",
    edad:30
} */

//*Metodo
/* Metodo dentro de un bojeto */
/* Se incorporan las funciones (pasa a llamarse  metodos) */
/* Pasamos una función a un metodo */
/* function nombreCompleto(){
    return "Juan Torres"
} */

/* const usuario ={
    nombre: "Juan", 
    apellido: "Torres",
    edad:30,
    // creamos propiedad */
    // nombreCompleto:nombreCompleto */ //opcion 1
    // nombreCompleto:function nombreCompleto(){
        //return "Juan Torres"  //opcion 2
    //} 
    //nombreCompleto(){
       // return this.nombre /* opcion 3 (recomendado para cambiar los datos, usando this) */
    //}
//} 
//!llamamos el metodo
/* console.log(usuario.nombreCompleto()); //opcion 1
 */
/* console.log(usuario.nombreCompleto()); */

//Ejemplo
/* const tarjeta = {
    numero: "123455667795045",
    monto:10000,
    // Pueden resivir parametros
    deposito(cantidad){
        this.monto = this.monto + cantidad
    },
    retirar(cantidad){
        this.monto = this.monto - cantidad
    }
} */
 //Aumenta el monto
/* tarjeta.deposito(100)
tarjeta.deposito(50)
tarjeta.deposito(10)
console.log(tarjeta);

tarjeta.retirar(10)
tarjeta.retirar(200)

console.log(tarjeta);
 */
//*Constructor


/* const usuario ={
    nombre: "Juan", 
    apellido: "Torres",
    edad:30,
    nombreCompleto(){
        return this.nombre + " " + this.apellido 
    }
} */
//mala practica agregar tantos objetos con los mismo datos
/* const usuario2 ={
    nombre: "Monica", 
    apellido: "Torres",
    edad:10,
    nombreCompleto(){
        return this.nombre + " " + this.apellido 
    }
}
const usuario3 ={
    nombre: "Lucas", 
    apellido: "Torres",
    edad:20,
    nombreCompleto(){
        return this.nombre + " " + this.apellido 
    }
} */

//No es una funcion es un Costructor por utilizar la primera palabra en mayuscula
/* function Persona (){
    this.nombre = ""
    this.apellido = ""
    this. edad = 0
    this.nombreCompleto = function (){
        return this.nombre + " " + this.apellido 
    }
} */
/* Nuevo objeto */ /* Evitamos hacer objetos literarios */
/* const usuario2 = new Persona() //pasamos valores
usuario2.nombre = "Mario"
usuario2.apellido = "Fernandez"
usuario2.edad = 20
console.log(usuario2.nombreCompleto()); */

/* console.log(usuario2); */


//*Objeto costructor object 

/* const persona = new Object() //objeto vasio /objeto literal
console.log(persona) */;

//Mas practico utilizar en objeto literales
/* const persona1 ={}
console.log(persona1.constructor); */ // verificamos que es unb objeto
/* console.log(persona1.constructor==Object); */ // verificamos que es verdadero


/* const numero = new Object(2)
console.log(numero); */
/* 
const string = new Object("hola mundo ")
string.test = function(){
    return this + "test"
}
console.log(string.test);
 */
//EJMNEPLO EN CONSOLA window.document.title = "hola"

//*Clases
/* function Persona(){
this.nombre = ""
this.apellido = ""
} */
/* 
!AMBOS METODOS SON LO MISMO 
*/
/* class Define como esta conformado el objeto */
/* class Persona{
    //PARAMETROS
    constructor(nombre, apellido){ //devuelve un bojeto nuevo
        this.nombre = nombre
        this.apellido= apellido
    }
    //Agregamos metodo

    saludar(){
        return "Hola mi nombre es" + this.nombre
    }

}
const usuario1 = new Persona("Mica", "Torres")
const usuario2 = new Persona("Matias","Torres")

console.log(usuario1.saludar());//llamaos un metodo
console.log(usuario2); */

//*Herencia
/* Nos permite ahorrar el codigo cuando describimos dos objetos similares ,  un objeto obtiene el digo del otro objeto  */

/* 
function Persona(){
    this.nombre = ""
    this.apellido = ""
} */
/* Nos ahooramos en escribir codigo */

//function Programador(){
    // this.nombre = ""
    ///this.lenguaje = ""
/* }
Programador.prototype = new Programador();

console.log(Programador);
console.log(Persona);

const persona = new Persona()
persona.nombre = "maria"
persona.apellido ="perez"
console.log(persona);

const programador = new Programador()
programador.nombre = "maria"
programador.apellido ="perez"
programador.lenguaje ="javascript"
console.log(programador);
 */

//!RECOMENDADO USAR LA HERENCIA CON CLASES

class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = null
    }
}
/* extends dice que va a hederar del bojeto .. persona */
class Programador extends Persona{
    constructor(nombre,apellido,lenguaje){
        super(nombre, apellido);//atrae las propiedades de/ agregamos parametros Persona
        this.lenguaje = lenguaje
    }
}
const persona = new Persona("maria","perez");
console.log(persona);
const programador = new Programador("joel","torres","javascript");
console.log(programador);