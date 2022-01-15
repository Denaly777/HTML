"use strict";
// console.log("comprobación");

let num1 = Number(prompt("Primer número"));
let num2 = Number(prompt("Segundo número"));
/* let operador = prompt(
  "¿Qué quieres hacer? Opciones: suma, resta, multiplica, divide, eleva"
);
 */
function suma(num1, num2) {
  console.log("suma:", num1, "+", num2);
  return num1 + num2;
}

function resta(num1, num2) {
  console.log("resta:", num1, "-", num2);
  return num1 - num2;
}

function multiplica(num1, num2) {
  console.log("multiplica:", num1, "*", num2);
  return num1 * num2;
}
function divide(num1, num2) {
  console.log("divide:", num1, "/", num2);
  return num1 / num2;
}

function eleva(num1, num2) {
  console.log("eleva:", num1, "elevado a", num2);
  return num1 ** num2;
}

function calculadora(num1, num2, operador) {
  return console.log(operador(num1, num2));
}

calculadora(num1, num2, suma);
calculadora(num1, num2, resta);
calculadora(num1, num2, multiplica);
calculadora(num1, num2, divide);
calculadora(num1, num2, eleva);
