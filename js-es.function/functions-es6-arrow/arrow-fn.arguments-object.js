// arrowFunction() is invoked with the arguments 'C', 'D'. Still, inside of its body, arguments object equals to the arguments of regularFunction() invocation: 'A', 'B'.
function regularFunction() {
  const arrowFunction = () => {
    arguments; // => { 0: 'A', 1: 'B' }
  };

  arrowFunction("C", "D");
}

regularFunction("A", "B");

// To access the direct arguments of the arrow function use a rest parameter ...args:
function regularFunction2() {
  const arrowFunction = (...args) => {
    args; // => ['C', 'D']
  };

  arrowFunction("C", "D");
}

regularFunction2("A", "B");
