/*
ES6 gave us Object.assign(), which copies all enumerable own properties from one or more objects, and return a new object.

However there is a problem with that, because it does not correctly copies properties with non-default attributes.

If an object for example has just a setter, it’s not correctly copied to a new object, using Object.assign().
*/

const person1 = {
  set name(newName) {
    console.log(newName);
  }
};

// This won’t work:

const person2 = {};
Object.assign(person2, person1);

// But this will work:

const person3 = {};
Object.defineProperties(person3, Object.getOwnPropertyDescriptors(person1));

// As you can see with a simple console test:

person1.name = 'x'; // 'x'
person2.name = 'x';
person3.name = 'x'; // 'x'

// person2 misses the setter, it was not copied over.

// The same limitation goes for shallow cloning objects with Object.create().
