class Pet {
  constructor(name) {
    this.name = name;
  }
}

const myPet = new Pet("Lily");

myPet instanceof Pet; // => true

const plainPet = { name: "Zoe" };
plainPet instanceof Pet; // => false

function isRegExp(value) {
  return value instanceof RegExp;
}
isRegExp(/Hello/); // => true
isRegExp("Hello"); // => false

function isArray(value) {
  return value instanceof Array;
}
isArray([1, 2, 3]); // => true
isArray({ prop: "Val" }); // => false
