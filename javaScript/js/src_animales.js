"use strict";

const animales = ["perro", "gato", "pajaro", "gato", "gato", "pajaro", "perro"];
console.log(animales);

/*
 * Transfomar el array de animales para que ponga el sonido que hacen
 *en lugar del nombre del animal ["guau", "miau", "pio", "miau", "miau", "pio", "guau"]
 *
 * Obtener un array nuevo en el que solo haya gatos (a partir del array de animales)
 *
 * Obtener un array nuevo en el que no haya perros ( a partir del array de animales)
 *
 * Obtener el total de perros
 */

console.log(
  'Transfomar el array de animales para que ponga el sonido que hacen en lugar del nombre del animal ["guau", "miau", "pio", "miau", "miau", "pio", "guau"]'
);

const sonido = (animal) => {
  if (animal === "perro") {
    return "guau";
  }
  if (animal === "gato") {
    return "miau";
  }
  if (animal === "pajaro") {
    return "pio";
  }
};
console.log(animales.map(sonido));

console.log(
  "Obtener un array nuevo en el que solo haya gatos (a partir del array de animales)"
);

const esGato = (animal) => animal === "gato";

/* const esGato = (animal) => {
  if (animal === "gato") {
    return true;
  }
}; */

console.log("Comprobación del callback para el primer elemento");
console.log(esGato(animales[0]));

console.log("Comprobación del callback para el segundo elemento");
console.log(esGato(animales[1]));

console.log(animales.filter(esGato));

console.log(
  "Obtener un array nuevo en el que no haya perros ( a partir del array de animales)"
);
console.log(animales.filter((animal) => animal !== "perro"));

console.log("Obtener el total de perros");

const soloPerros = animales.filter((animal) => animal === "perro").length;
console.log(soloPerros);

function reducer(acc, animal) {
  if (animal === "perro") {
    acc++;
  }
  return acc;
}

console.log(animales.reduce(reducer, 0));

console.log(
  animales.reduce((acc, animal) => (animal === "perro" ? acc + 1 : acc), 0)
);
