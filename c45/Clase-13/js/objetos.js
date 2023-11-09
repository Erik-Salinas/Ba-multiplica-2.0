//*RECORDAMOS
//Tipos de datos primitivos

/* console.log(typeof "Hello world");
console.log(typeof 100);
console.log(typeof false);

//OBJETOS
console.log(typeof {});
console.log(typeof []);  */


//*OBJETO LITERAL

/* let nombre = "Homero";
let edad   = 39;
let calle  = "Av. Siempreviva 742";
console.log(edad);  
console.log(nombre);  
console.log(calle);   */
//Los variables anteriores entran relacionados entre sí, entonces mejor usamos un objeto literal

/* const persona = { 
//Propiedad | Valor
nombre: "Homero",
edad: 39, 
calle: "Av. Siempreviva 742" 
}
console.log(persona);
 */

//!ASIGNAR VALORES A LAS PROPIEDADES 
/* const persona = {
    nombre: "Homero",
    edad: 39,
    calle: "Av. Siempreviva 742",
    apellido: "Bouvier"
}
console.log(persona);
console.log(persona.nombre="Marge");
console.log(persona.edad = 36);
console.log(persona);

console.log(persona.nombre=" Apu");
console.log(persona.edad = 41);
console.log(persona.calle = "kwee-e-mart");
console.log(persona); */



//*OBJETO CONSTRUCTORES
/* 
 function Persona(nombre, apellido, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle  = calle;
    this.apellido = apellido;
}  */

/* const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
console.log(persona1); 

 const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
console.log(persona2);  */
/* 
const persona3 = new Persona("Apu"," ",41,"kwee-e-mart");
console.log(persona3); */

//*MÉTODOS Y OPERACIONES CON OBJETOS

/* function Persona(nombre, edad, calle) {
    this.nombre = (nombre.toUpperCase());
    this.edad = edad;
    this.calle  = calle;
} */
/* const persona1 = new Persona("homero", 39, "Av. Siempreviva 742");
console.log(persona1); */

/* const persona2 =prompt("Ingrese su nombre");
const datos = new Persona(persona2,33,"Av. Siempreviva 742");
console.log(datos);
 */
/* const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
console.log(persona2); */

//EJEMPLO
/* let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
alert("Bienvenido "+ nombre.toUpperCase() + apellido.toLocaleLowerCase());
 */
//!METODOS PERSONALIZADOS
/* function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad   = edad;
    this.calle  = calle;
    this.hablar = function(){ 
        console.log("HOLA SOY "+ this.nombre)
    }
    this.saludar = function(){
        console.log("Bienvenido " + this.nombre + " a javascript" + " Tu edad es: " + this.edad);
    }
} */
/* const persona1 = new Persona("Lisa", 14, "Av. Siempreviva 742");
const persona2 = new Persona("Bart", 13, "Av. Siempreviva 742"); */
/* const persona3 = new Persona ("Lisa", 13 , "Av. Siempreviva 742");
console.log(persona3); */

//llamamos a los metodos personalizados
/* persona1.hablar();
persona2.hablar(); */
/* persona3.saludar(); */

//!OPERADOR IN Y FOR..IN
/*  const persona1 = { 
    nombre: "Homero", 
    edad: 39, 
    calle: "Av. Siempreviva 742"
}; */
//devuelve true porque la clave "nombre" existe en el objeto persona1
/* console.log( "nombre" in persona1); */
//devuelve false porque la clave "origen" no existe en el objeto persona1
/* console.log( "origen" in persona1); */
//recorremos todas las propiedades del objeto con el ciclo for...in
/* for (const propiedad in persona1) {
    console.log(persona1[propiedad]);
}  */

//*CLASES
//Comparación clase y constructor
/* class Persona {
    constructor(nombre, edad, calle) {
        this.nombre = (nombre.toLowerCase());
        this.edad = edad;
        this.calle = calle;
    }
    hablar() {
        console.log("HOLA SOY " + this.nombre);
    }
    saludar(){
        console.log("Bienvenido" + this.nombre);
    }
}
const persona1 = new Persona("Lisa", 14, "Av. Siempreviva 742");

persona1.hablar();


function Persona2(nombre, edad, calle) {
    this.nombre = (nombre.toLowerCase());
    this.edad = edad
    this.calle = calle
    this.hablar= function(){
        console.log("HOLA SOY " + this.nombre);
    }
}
const persona2 = new Persona("Bart", 13, "Av. Siempreviva 742");
persona2.hablar(); */

class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
    
}
const producto1 = new Producto("arroz", "125");
const producto2 = new Producto("fideo", "50");
const producto3 = new Producto("Asado", "6000");
producto1.sumaIva();
console.log(producto1);

producto2.vender();
console.log(producto2);

producto3.sumaIva();
producto3.vender();
console.log(producto3);

