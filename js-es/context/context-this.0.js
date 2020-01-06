function getContext() {
  return this;
}

// creating custom object
const user = { age: 20 };

// calling and setting functions context to the object "user"
var obj = getContext.call(user); // { a: 20 }

console.log(obj);
console.log(getContext());
