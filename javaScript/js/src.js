"use strict";

const persons = [
  {
    name: "Berto",
    country: "ES",
    age: 44,
    car: "LU9286V",
    pet: {
      name: "Moon",
      type: "perro",
    },
  },
  {
    name: "Jess",
    country: "UK",
    age: 29,
    car: "GB2913U",
    pet: {
      name: "Kit",
      type: "gato",
    },
  },
  {
    name: "Tom",
    country: "UK",
    age: 36,
    car: "GB8722N",
    pet: {
      name: "Rex",
      type: "perro",
    },
  },
  {
    name: "Alexandre",
    country: "FR",
    age: 19,
    car: "FT5386P",
    pet: {
      name: "Aron",
      type: "gato",
    },
  },
  {
    name: "Rebeca",
    country: "ES",
    age: 32,
    car: "MD4578T",
    pet: {
      name: "Carbón",
      type: "gato",
    },
  },
  {
    name: "Stefano",
    country: "IT",
    age: 52,
    car: "LP6572I",
    pet: {
      name: "Bimbo",
      type: "perro",
    },
  },
  {
    name: "Colette",
    country: "FR",
    age: 22,
    car: "FU8929P",
    pet: {
      name: "Amadeu",
      type: "gato",
    },
  },
];

const cars = [
  {
    id: "LU9286V",
    brand: "Citroen",
    model: "Xsara",
  },
  {
    id: "GB2913U",
    brand: "Fiat",
    model: "Punto",
  },
  {
    id: "GB8722N",
    brand: "Opel",
    model: "Astra",
  },
  {
    id: "FT5386P",
    brand: "Ford",
    model: "Focus",
  },
  {
    id: "MD4578T",
    brand: "Opel",
    model: "Corsa",
  },
  {
    id: "LP6572I",
    brand: "Ford",
    model: "Fiesta",
  },
  {
    id: "FU8929P",
    brand: "Fiat",
    model: "Uno",
  },
];

/*  * Utiliza los métodos funcionales de array para resolver las siguientes propuestas: */
/* *
/*  *  - 1. Obtén la suma total de todas las edades de las personas. */

const sumarEdades = persons.reduce((accEdad, arr) => accEdad + arr.age, 0);
console.log(sumarEdades);

function getSum(accEdad, arr) {
  return accEdad + arr.age;
}
console.log("Con función fuera", persons.reduce(getSum, 0));

/*  *  - 2. Obtén la suma total de todas las edades de las personas francesas. */

const sumarEdadesFranceses = persons.reduce(
  (accEdad, arr) => (arr.country === "FR" ? accEdad + arr.age : accEdad),
  0
);
console.log(sumarEdadesFranceses);

function getSumFrench(accEdad, arr) {
  if (arr.country === "FR") {
    return accEdad + arr.age;
  } else return accEdad;
}
console.log("Con función fuera", persons.reduce(getSumFrench, 0));

/*  *  - 3. Obtén un array con el nombre de todas las mascotas. */

const nombreMascotas = persons.map((arr) => arr.pet.name);
console.log(nombreMascotas);

function petNames(arr) {
  return arr.pet.name;
}
console.log(persons.map(petNames));

/*  *  - 4. Obtén un array con las personas que tengan gato. */

const personasConGato = persons
  .filter((arr) => arr.pet.type === "gato")
  .map((arr) => arr.name);
console.log(personasConGato);

function withCat(arr) {
  return arr.pet.type === "gato";
}
function personName(arr) {
  return arr.name;
}
console.log(persons.filter(withCat).map(personName));

/*  *  - 5. Obtén un array con los coches de los españoles. */

const cochesDeEspanoles = persons
  .filter((arr) => arr.country === "ES")
  .map((arr) => arr.car);
console.log(cochesDeEspanoles);

function fromSpain(arr) {
  return arr.country === "ES";
}
function carId(arr) {
  return arr.car;
}
console.log(persons.filter(fromSpain).map(carId));

/*  *  - 6. Obtén un array con las personas que tengan un coche de la marca Ford. */

const unirArrayPorCoche = (arr1, arr2) =>
  arr1.map((key1) => ({
    ...arr2.find((key2) => key1.car === key2.id),
    ...key1,
  }));

const newArray = unirArrayPorCoche(persons, cars);
console.log(
  newArray.filter((arr) => arr.brand === "Ford").map((arr) => arr.name)
);

/* console.log(unirArrayPorCoche(persons, cars)); */

/*  *  - 7. ¡Bonus point! Obtén un array con todas las personas en el que cada persona tenga toda
 *       la info de su coche. Ejemplo a continuación:
 *
 *      [
 *          {
 *               name: 'Berto',
 *               country: 'ES',
 *               age: 44,
 *               car: {
 *                  id: 'LU9286V',
 *                  brand: 'Citroen',
 *                  model: 'Xsara'
 *               },
 *               pet: {
 *                   name: 'Moon',
 *                   type: 'perro'
 *               }
 *           },
 *           (...)
 *      ]
 *
 *  Tip: en algún caso es probable que el método "nombreArray.find()" te sea de ayuda.
 * */

const unirArraysPorCoche2 = (arr1, arr2) =>
  arr2.map((car) => ({
    ...arr1.find((person) => person.car === car.id),
    car,
  }));

console.log(unirArraysPorCoche2(persons, cars));
