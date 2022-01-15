"use strict";

const patients = [true, false, true, false, false, false, true, true];

function infectar(arr) {
  const infectados = [];
  for (let i = 0; i < patients.length; i++) {
    console.log(patients[i]);
    if (patients[i] === "true") {
      infectados.push(patients[i]);
    }
    return infectados;
  }
  return infectados;
}

console.log(infectar(patients));
console.log(infectados);
