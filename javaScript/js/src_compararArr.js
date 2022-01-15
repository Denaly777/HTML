"use strict";

/* const arr1 = [1];
console.log(arr1);
const arr2 = [...arr1];
console.log(arr2); */

function compararArr(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log("Los arrays no tienen el mismo tamaño");
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

console.log(sonIguales([2, 2], [1]));

console.log(compararArr([1, 2, 3], [1, 3, 3]));
