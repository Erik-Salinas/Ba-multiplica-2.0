/* document */ //*⬅️ accedemos al DOM

//* SELECCIONAR ELEMENTOS

let lista = document.getElementsByClassName("lista");
console.log(lista); /* nombre de la clase */

let html = document.getElementById("html");
console.log(html); /* nombre por ID */

let css = document.querySelector("#css");
console.log(css); /* Especificamos el id o class */

let javascript = document.querySelectorAll("#javascript")
console.log(javascript);

let etiqueta = document.getElementsByTagName ("p");
console.log(etiqueta);

const listaNueva = document.getElementById("lista-nueva");
const exitos = "HTML, CSS Y JAVASCRIPT";


//*CONSOLA
/* console.log(lista);
console.log(html);
console.log(css);
console.log(javascript);
console.log(etiqueta); */

//*METODOS
/* html.innerText = "HTML INICIAL";
listaNueva.innerHTML =`
<h2>Cursos nuevos</h2>
<ul>
    <li>Angular</li>
    <li>React</li>
    <li>C++</li>
</ul>
<p>Este curso fue realizado gracias a los existos de </p> 
<a href="https://erik-salinas.github.io/Psicologa-Andrea-Morales/">Enviar</a>
`+ exitos; */
 listaNueva.innerHTML = `
<h2>Cursos nuevos</h2>
<ul>
    <li>Angular</li>
    <li>React</li>
    <li>C++</li>
</ul>
<p>Este curso fue realizado gracias a los existos de </p> ${exitos}
`; 
/* listaNueva.innerHTML = ' <h2>Cursos nuevos</h2> <ul> <li>Angular</li> <li>React</li> <li>C++</li> </ul> <p>Este curso fue realizado gracias a los existos de </p> ' +  exitos; */

/* listaNueva.innerHTML = ' <h2>Cursos nuevos</h2> <ul> <li>Angular</li> <li>React</li> <li>C++</li> </ul> <p>Este curso fue realizado gracias a los existos de </p> ' +  exitos; */
/* listaNueva.style.background="red";  */
/* html.style.fontSize="2rem";  */

html = document.getElementById("html").classList.add("html");
/* html = document.getElementById("html").remove("html");  */
