// You might want to return Array objects in your derived array class MyArray. The species pattern lets you override default constructors.

// For example, when using methods such as map() that returns the default constructor, you want these methods to return a parent Array object, instead of the MyArray object.
// The Symbol.species symbol lets you do this:

class MyArray extends Array {
  // Overwrite species to the parent Array constructor
  static get [Symbol.species]() {
    return Array;
  }
}

let a = new MyArray(1, 2, 3);
let mapped = a.map(x => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true
