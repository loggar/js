const o1 = {};
console.log(o1.toString());
// logs [object Object] get this method to the Object.prototype

const o2 = Object.create(null);
// the first parameter is the prototype of the object "o2" which in this
// case will be null specifying we don't want any prototype
console.log(o2.toString());
// throws an error o2.toString is not a function
