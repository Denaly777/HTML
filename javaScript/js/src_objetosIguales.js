"use strict";
console.log("ok");

const obj1 = {
  a: 2,
  b: 3,
};

const obj2 = {
  b: 3,
  a: 3,
};

function sonIgualesObjetos(objA, objB) {
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  console.log(keysA, keysB);
  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const key in objA) {
    console.log(key, objA[key], objB[key]);
    if (objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
}

console.log("comprobar objetos: ", sonIgualesObjetos(obj1, obj2));
