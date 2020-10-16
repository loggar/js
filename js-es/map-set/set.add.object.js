const person = {
  name: "Alex",
  age: 32,
};

// Create a set and add the object to it
const pSet = new Set();
pSet.add(person);
console.log(pSet);

// Change the name of the person
person.name = "Bob";

// Add the person object to the set again
pSet.add(person);
console.log(pSet);
