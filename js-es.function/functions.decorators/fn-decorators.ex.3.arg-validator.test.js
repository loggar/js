const allArgsValid = require("./fn-decorators.ex.1.arg-validator");

//ordinary add function
let add = function (a, b) {
  return a + b;
};

//decorated add function that only accepts the required number of params and only integers
add = allArgsValid(add);

add(6, 8);
//14

add(3, null);
//TypeError: Argument cannot be a non-integer

add("", 4);
//TypeError: Argument cannot be a non-integer
