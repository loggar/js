// Implicit lost
// In this example, bar is pointing to the foo function, so when we call bar() the call-site will depend on where bar is called, which is the global object in this example.

function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo,
};

var bar = obj.foo; // function reference/alias!

bar(); // undefined
