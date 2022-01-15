/* "use strict";

const iPadMini = 500;

const iPad = 1000;

const iPadPro = 1500;

let ahorros = 750;

if (ahorros < iPadMini) {
  console.log("No puedes comprar ningún modelo");
}

if (ahorros >= iPadMini) {
  console.log("Puedes comprar un iPadMini");
}
if (ahorros >= iPad) {
  console.log("Puedes comprar un iPad");
}
if (ahorros >= iPadPro) {
  console.log("Puedes comprar un iPadPro");
} */

/* const ipadmini = 750;
const ahorros = 500;

switch ((resultado = ipadmini - ahorros)) {
  case resultado == 250:
    console.log("prueba");
    break;
  default:
    console.log(resultado);
} */

const fruta = "pera";

switch (fruta) {
  case "fresa":
    console.log("roja");
    break;
  case "manzana":
    console.log("verde, roja o amarilla");
    break;
  case "platano":
    console.log("amarillo");
    break;
  case "naranja":
    console.log("naranja");
    break;
  default:
    console.log("No se ha identificado la fruta");
}
