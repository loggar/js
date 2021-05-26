// Implicit lost
// Whenever we pass our function as a callback function, we will lose the binding of this, which usually means it fallbacks to the default binding (global object or undefined).

function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo,
};

setTimeout(obj.foo, 100); // undefined
