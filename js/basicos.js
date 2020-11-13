console.log("##################  Variables: var 🥊VS🥊 let ##################");
/*
Diferencia entre var y let es que:
var genera variables globales 
let genera variables de bloque 

es mejor practica usar let
*/
console.log("************** var **************");
var musica = "rock";

console.log("variable musica Antes del bloque = " + musica);
//esto es un bloque   {}
{
  var musica = "pop";
  console.log("variable musica Durante del bloque = " + musica);
}
console.log("variable musica Despues del bloque = " + musica);

console.log("************** let **************");
let musica2 = "rock";

console.log("variable musica2 Antes del bloque = " + musica2);
{
  let musica2 = "pop";
  console.log("variable musica2 Durante del bloque = " + musica2);
}
console.log("variable musica2 Despues del bloque = " + musica2);

console.log("##################  Constantes (const)  ##################");
/*
Tipos de datos primitivos:
Debemos agregarle su valor en el mismo momento que la instanciamos 
No cambian su tipo de dato, ni su valor en el transcurso de la aplicacion
 */
const number = 123.123;
console.log("Cosntante tipo de dato primitivo =", number);
/*
Tipos de datos compuestos:
podemos instanciarlas y luego agregar su valor 
podemos agregar, quitar y cambiar valores pero no podemos cambiar el tipo de dato (obj, arrey, etc)
*/
const objeto = {
  nombre: "julian",
  apellido: "rousseau",
};

console.log("Constante tipo de dato compuesto inicializado", objeto);

objeto.edad = 23;
objeto.trabajo = "Software Developer";

console.log("Constante tipo de dato compuesto modificado", objeto);

console.log("##################  Cadenas de Texto-Strings  ##################");

let nombre = "hola ";
//otra forma de crear string, pero es lo mismo (tienen los mismos metodos y propiedades)
let nombre2 = new String("soy un string");
console.log(nombre, nombre2);

//algunos metodos de string
console.log(
  nombre.length,
  nombre2.length,
  nombre.toUpperCase(),
  nombre2.toLowerCase(),
  nombre2.includes("un"),
  nombre2.split(" ")
);

console.log("##################  Template Strings  ##################");
//concatenacion
let nombre3 = "Julian";
let apellido3 = "Rousseau";
let saludo = "Hola mi nombre es " + nombre3 + " " + apellido3;
console.log(saludo);
//Usando template strings (``) debemos usar asentos invertidos (back tick)
//Nos permiten interpolar datos (dentro de una cadena de texto, el valor dinamico de una variable)
let saludo2 = `Hola mi nombre es ${nombre3} ${apellido3} , un gusto`;
console.log(saludo2);
//Nos permiten escribir cadenas de text con saltos de linea sin problemas
let ul = `<ul>
    <li>primavera</li>
    <li>invierno</li>
</ul>`;
console.log(ul);
