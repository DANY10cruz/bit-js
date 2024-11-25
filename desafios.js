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

/* 5. Crear una función que reciba dos párametros, un nombre y un apellido y retorne
el nombre completo, primero el apellido y luego el nombre. */

function miFuncion5(nombre, apellido) {
  return apellido + " " + nombre;
}

let retornar = miFuncion5("Daniel", "Cruz");
let retornar2 = miFuncion5("sergio", "Fajardo");
console.log(retornar, retornar2);

/* 6. Crear una función que reciba cuatro párametros, un nombre, una prenda, un
color y una cantidad y retorne: ____ tiene __ ____ de color ____.
Ej entrada: pepita, camisas, azul, 2
Ej salida: Pepita tiene 2 camisas de color azul. */

function miFuncion6(nombre, cantidad, prenda, color) {
  return ` ${nombre} tiene ${cantidad} ${prenda} de color ${color}.`;
}

let prenda = miFuncion6("Daniel", 2, "camisas", "blanca");
let prenda2 = miFuncion6("Pepita", 2, "pantalones", "azul");
console.log(prenda, prenda2);

/*7. Crear una función para saludar, si la función recibe un nombre,
imprimir por consola: Hola, ____!
Si la función no recibe un nombre, imprimir: Hola, desconocido! */

function miFuncion7(nombre = "Desconocido") {
  console.log(`Hola ${nombre}`);
}
miFuncion7("Daniel");
miFuncion7();

function suma(a, b) {
  console.log(`Entrada: "5,5"`);
  console.log("Salida: 5 + 5 = " + " " + (a + b));
}
suma(5, 5);
suma(2 + 2);

function resta(a, b) {
  console.log(`Entrada: "5,5"`);
  console.log("Salida: 5 - 5 = " + " " + (a - b));
}

resta(5, 5);

function multi(a, b) {
  console.log(`Entrada: "10,5"`);
  console.log("Salida; 10 x 5 = " + " " + a * b);
}
multi(10, 5);

function dividir(a, b) {
  console.log(`Entrada: "50,5"`);
  console.log("Salida: 50 / 5 = " + " " + a / b);
}
dividir(50, 5);

function modulo(a, b) {
  console.log(`Entrada: "8,3"`);
  console.log("Salida: 8 % 3 = " + " " + (a % b));
}
modulo(8, 3);

function exponente(a, b) {
  console.log(`Entrada: "8,4"`);
  console.log("Salida: 8^4 = " + " " + a ** b);
}
exponente(8, 4);
exponente(100, 5);
