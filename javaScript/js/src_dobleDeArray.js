"use strict";

function dobleDeArray(arrayInicio) {
  const newArray = [];
  for (let i = 0; i < arrayInicio.length; i++) {
    console.log(arrayInicio[i]);
    newArray.push(arrayInicio[i] * 2);
  }
  return newArray;
}

console.log(dobleDeArray([1, 4, 8, 3]));
