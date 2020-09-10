// copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.

// Object.assign(target, ...sources)

const object1 = {
  a: 1,
  b: 2,
  c: 3
};

const object2 = Object.assign({ c: 4, d: 5 }, object1);

console.log(object2.c, object2.d);
// expected output: 3 5
