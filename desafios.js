/*1. Crear una variable y asignarle su nombre, crear una constante y asignarle su
edad, luego imprimir en consola: Hola, soy ____ y tengo ____ años. */

let nombre = "Daniel Cruz";
const edad = 27;
console.log("Hola soy " + nombre + " y tengo " + edad + " años");

console.log(`Hola soy ${nombre} y tengo ${edad} años`);

/*2. Crear una función llamada presentarme, dentro crear una variable y asignarle
su nombre, crear una constante y asignarle su edad, luego imprimir en consola:
Hola, soy ____ y tengo ____ años.*/

function presentarme() {
  let nombre = "Daniel Cruz";
  const edad = 27;
  console.log(`Hola soy ${nombre} y tengo ${edad} años`);
}
presentarme();

/*3. Crear una función que reciba un nombre y edad por parámetros, luego imprimir
en consola: Hola, soy ____ y tengo ____ años.*/

function nombre_edad(nombre, edad) {
  console.log(`Hola soy ${nombre} y tengo ${edad} años`);
}
nombre_edad("Alberto", 27);

/*4. Crear una función que reciba un nombre, un apellido y una edad por parámetros,
la función debe imprimir en consola: Su nombre es ____ y usted tiene ____ años,
si no se recibe la edad imprimir: Su nombre es ____ y usted tiene 100 años. */

function ejercicio(nombre, apellido, edad = 100) {
  console.log(` Mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);
}

ejercicio("Daniel", "Cruz");
ejercicio("Daniel", "Cruz", 27);
