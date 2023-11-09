//*ARRYS
let grupo = []; // Array vacio
                //0      1       2      3    //BIEN
let mascotas = ["gato","perro","pez","tigre"]; //Array de strings
                //1      2       3      4   //MAL


const numeros = [1,2,3,4,9] //Array de números
let booleanos = [true,false,true]; //array booleanos
let persona = [26592093, "Perico","Pérez",1981,false]; 

let resultados = [["gato","miau"],["perro","guau"],["ardilla","wheee"]];



/* console.log(mascotas); */
/* console.log(mascotas[0]); */ //El elemento se encuentra  en el indice 0
/* console.log(mascotas[3]); */
/* console.log(resultados);
console.log(resultados[2]);
console.log(resultados[2][0]); */
/* console.log(mascotas.length);  *///Cantidad de elementos en una array
/* console.log(resultados[0][1]); */


//*FOREACH
/* mascotas.forEach(function(objeto,indice,array){
    console.log(objeto,indice,array);
}) */

numeros.forEach(objeto=>{
    console.log(objeto);
})

//MAP
/* mascotas.map(objeto=>{
    console.log(objeto);
}) 
 */
//FIND
console.log(numeros);
const encontrado = numeros.find(elemento=> elemento >2);
console.log(encontrado);

//FILTER
/* numeros.filter(n =>{
    return n > 5
}); */