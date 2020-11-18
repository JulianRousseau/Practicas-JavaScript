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

console.log("################## Cadenas de Texto-(Strings) ##################");

let nombre = "hola ";
//tambien se pueden crear con su constructor, pero es lo mismo (tienen los mismos metodos y propiedades)
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

console.log("##################  Números (Numbers)  ##################");
let numero = 10;
//su constructor
let numero2 = new Number(20);
let numero3 = 10.5;
console.log(numero3.toFixed(5)); // = nos dice cuantos numeros decimales va a tener
console.log(parseInt(numero3)); // = nos entrega un entero
let cadenaTexto = "15";
let vuelvoNumero = parseInt(cadenaTexto);
//typeof nos dice de que tipo es
console.log(typeof cadenaTexto + cadenaTexto);
console.log(typeof vuelvoNumero + vuelvoNumero);

console.log("##################  Booleans  ##################");
let veradero = true;
let falso = false;
console.log(veradero, falso);
//tienen su constructor pero este no tiene utilidad

console.log("##################  undefined, null & NaN  ##################");
let indefinida; //undefined indica que no se ha inicializado una variable y que el valor está ausente
console.log(indefinida);
let nulo = null; //el valor nulo se lo agrega intencionalmente
console.log(nulo);
let noEsUnNumero = "hola" * 3.7; //NaN - Not a Number
console.log(noEsUnNumero);

console.log("##################  Funciones  ##################");
//Una función es un bloque de código, autocontenido, que se puede definir una vez y
//ejecutar en cualquier momento. Opcionalmente, una función puede aceptar parámetros y devolver un valor (return).
//Las funciones en JavaScript son objetos, un tipo especial de objetos

//Declaracion de funcion
function estoEsUnaFuncion() {
  console.log("Esta");
  console.log("es");
  console.log("una");
  console.log("funcion");
}
//invocacion de una funcion, los parentesis indican que se va a ejecutar
estoEsUnaFuncion();

//funcion con parametros
function funcionConParametros(nombre, apellido) {
  return `usted es ${nombre} ${apellido}`; //return indica lo que va a devolver la funcion
  //si tenemos un return en el medio de una funcion, se devuelve el valor de ese return y
  //el resto de la funcion se ignora
  console.log("esto es ignorado");
}
console.log(funcionConParametros("Julian", "Rousseau"));

//de  la siguiente forma podemos agregar valores por defecto, en caso de que no se le den parametros
// en el momento de instanciar la funcion
function funcionConParametros2(
  nombre = "sin nombre",
  apellido = "sin apellido"
) {
  return `usted es ${nombre} ${apellido}`;
}
let valorDeFuncion = funcionConParametros2(); //esta variable recive el return //esta funcion no resive parametros
console.log(valorDeFuncion);

//Funciones declaradas VS funciones expresadas
funcionDeclarada();

function funcionDeclarada() {
  console.log(
    "Esto es un función declarada, puede invocarse en cualquier parte de nuestro código, incluso antes de que la función sea declarada"
  );
}

const funcionExpresada = function () {
  // En este caso no le damos un nombre a la funcion porque ya nombramos a la variable,
  // esto se conoce como funcion anonima
  console.log(
    "Esto es una función expresada, es decir, una función que se le ha asignado como valor a una variable, si invocamos esta función antes de su definición JS nos dirá 'Cannot access 'funcionExpresada' before initialization'"
  );
};

funcionExpresada();

console.log("##################  Arreglos (Arrays)  ##################");
//Un arreglo es una coleccion de elementos
//Declaracion de arry
const a = [];

const b = ["hola", "soy", 1, "arreglo", [1, 2, 3]];
console.log(b);

console.log(`longitud del arreglo = ${b.length}`);

console.log(`index numero 0 = ${b[0]}`);
console.log(`index numero 4 y subindex 2 = ${b[4][2]}`); //y asi sucesivamente dependiendo cuantas dimenciones tengamos

//otra forma de crear arrys (con el metodo of)
const c = Array.of("a", "b", "c", 1, 2, 3);

const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);
//Agregar elemento en la ultima posición
colores.push("Negro");
console.log(colores);
//Eliminar elemento en la ultima posición
colores.pop();
console.log(colores);
//metodo forEach para iterar en el arreglo
console.log("recorriendo arreglo");
colores.forEach(function (element, index) {
  // "por cada" elemento , posicion
  console.log(`<li id="${index}">${element}</li>`);
});

console.log("##################  Objetos  ##################");
//Un objeto es una coleccion de llaves : valores

//Declaracion de Objetos
const b2 = {};
console.log(b2);

const jr = {
  nombre: "Julian",
  apellido: "Rousseau",
  edad: 23,
  skills: ["CSS", "HTML", "JAVASCRIPT"],
  contacto: {
    email: "julianrousseau31@gmail.com",
    whatsapp: "5493624208302",
    instagram: "julianrousseau1",
  },
  saludar: function () {
    //this hace referencia al objeto donde estamos
    //this se vera en profundidad mas adelante
    console.log(`Hola ${this.nombre} ${this.apellido}`);
  },
};

console.log(jr);
// se puede acceder a los valores con corchetes
console.log(jr["nombre"]);
// de todos modos la forma mas comun de acceder es con el punto
// el punto determina que queremos acceder a propiedades o metodos del objeto
console.log(jr.apellido);
console.log(jr.contacto.instagram);
console.log(jr.skills[2]);

jr.saludar();
//keys es un metodo de object que nos permite listar las llaves de un objeto
console.log(Object.keys(jr));
//values es un metodo de object que nos permite listar los valores de un objeto
console.log(Object.values(jr));

console.log("##################  Tipos de Operadores  ##################");
// ARITMETICOS
// +, -, *, /, %, ()

let aritmeticos = 5 + (5-10) * -3
console.log(aritmeticos);
let modulo = 1099 % 100 //el modulo nos da el residuo de una division 
console.log(modulo);

// RELACIONALES
// >, <, <=, >=, ==, !=, ===, !==


// = 1 igual es asignación  de variable
// == 2 iguales es comparacion de valores
// === 3 igulaes es comparación de tipo de dato y de valor

console.log("7 == 7",        7 == 7);
console.log('"7" == 7',    "7" == 7);
console.log("7 === 7",       7 === 7);
console.log('"7" === 7',   "7" === 7);

console.log("7 != 7",        7 != 7);
console.log('"7" != 7',    "7" != 7);
console.log(" 7 !== 7",       7 !== 7);
console.log('"7" !== 7',   "7" !== 7);

// INCREMENTO - DECREMENTO
// +=, -=, *=, /=
let i =10
i/=5
console.log(i)

// UNARIOS
// ++, --

i=10
i++
console.log(i)
i--
console.log(i)

// LOGICOS
// !  Not 
// || Or 
// && And

console.log(!false);
console.log((9 === 9) || ("9" === 9));
console.log((9 === 9) && ("9" === 9));
console.log((9 === 9) && ("9" === "9"));


