console.log("##################  Variables: var 🥊VS🥊 let ##################");
/*
Diferencia entre var y let es que:
var genera variables globales 
let genera variables de bloque 

es mejor practica usar let
*/
console.log("************** var **************");
var musica = "rock";

console.log("variable musica Antes del bloque = ", musica);
//esto es un bloque   {}
{
  var musica = "pop";
  console.log("variable musica Durante del bloque = ", musica);
}
console.log("variable musica Despues del bloque = ", musica);

console.log("************** let **************");
let musica2 = "rock";

console.log("variable musica2 Antes del bloque = ", musica2);
{
  let musica2 = "pop";
  console.log("variable musica2 Durante del bloque = ", musica2);
}
console.log("variable musica2 Despues del bloque = ", musica2);








