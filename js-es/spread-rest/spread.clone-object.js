let objA = {};

const objB = {
  name: "Alexander",
  age: 26,
  Licensed: true,
  location: "Ikeja",
};

objA = { ...objA, ...objB };
console.log(objA);
