//*Intercambios de datos
//stingify

const objeto = {
    nombre: "Alejo",
    edad: 25,
    casado: true
}
console.log(objeto);
//Dos topos de forma para acceder a la información
console.log(objeto.casado);
console.log(objeto["edad"]);

//Convertir el objeto JS a JSON
/* console.log(objeto);
const json = JSON.stringify(objeto)
console.log(json); */


//parse
/* const json ='{ "nombre":"Alejo","edad":25,"casado": true}';
console.log(json);

const objeto = JSON.parse(json);
console.log(objeto); */

//Convertir la cadena JSON a objeto JS



//* Paso 1: Leer el contenido del archivo JSON
const productos = [{
    "id": 1,
    "nombre": "Remera",
    "Precio": 6000,
    "catidad": 10
},
{
    "id": 2,
    "nombre": "Pantalon",
    "Precio": 7000,
    "catidad": 5
},
{
    "id": 3,
    "nombre": "Zapatillas",
    "Precio": 50000,
    "catidad": 2
}


]
//* Paso 2: Mostrar la lista de productos en la página
let productoLista = document.querySelector("#productos-lista");

productos.forEach(producto => {
    let li = document.createElement("li");
    li.textContent = `
     ${producto.nombre} 
     - Precio: $${producto.Precio} 
     - Cantidad: ${producto.catidad}`;
    productoLista.appendChild(li);
});
//* Paso 3: Agregar un nuevo producto

let agregarForm = document.querySelector("#agregar-form");

agregarForm.addEventListener("submit", event => {
    event.preventDefault(); //No se reinicia la pagina web
    //Almacenamiento
    let nombre = document.querySelector("#nombre").value;
    let precio = document.querySelector("#precio").value;
    let cantida = document.querySelector("#cantidad").value;

    let nuevoProducto = {
        id: productos.length + 1,
        nombre: nombre,
        precio: precio,
        cantidad: cantida
    }
    /*  console.log(nuevoProducto); */
    productos.push(nuevoProducto); //Guarda y exporta la informacion a laa varianle prodcutos
    const li = document.createElement("li");

    li.textContent = `${nuevoProducto.nombre} - Precio: $${nuevoProducto.precio} - Cantidad: ${nuevoProducto.cantidad}`;
    productoLista.appendChild(li);

    agregarForm.reset();
});




