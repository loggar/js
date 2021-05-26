function foo() {
  console.log("inside", this);
  console.log(this.a);
}

var a = "2"; // If we declare var in global scope => there will be a property with the same name in the global object.
console.log("outside", this);

foo(); // 2 => Foo is called within the global scope (window)
foo(); // undefined => Foo is called within the empty scope (window)
