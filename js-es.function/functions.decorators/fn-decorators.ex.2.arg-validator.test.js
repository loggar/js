const allArgsValid = require("./fn-decorators.ex.1.arg-validator");

//ordinary multiply function
let multiply = function (a, b) {
  return a * b;
};

//decorated multiply function that only accepts the required number of params and only integers
multiply = allArgsValid(multiply);

multiply(6, 8);
//48

multiply(6, 8, 7);
//Error: Only submit required number of params

multiply(3, null);
//TypeError: Argument cannot be a non-integer

multiply("", 4);
//TypeError: Argument cannot be a non-integer
