const assert = require("assert");

//Declare our custom type enum with his custom type validators, this could be extended if you want.
const types = {
  NUMBER: data => typeof data === "number" && !isNaN(data),
  STRING: data => typeof data === "string",
  DATE: data => typeof data === "date",
  BOOL: data => typeof data === "boolean",
  OBJECT: data => typeof data === "object"
};

//This function handle the variable assignation if this is succed return the value if fail throw exception.
const matchType = (value, validator) =>
  validator(value) ? value : assert(false, "INVALID TYPE ASSIGNATION");

/*
  How to use this in a function?
*/
const calcSalary = (baseValue, extraHsValue, workedHs, extraHs) => {
  const salary = matchType(baseValue * workedHs, types.NUMBER);
  const extras = matchType(extraHsValue * extraHs, types.NUMBER);
  const total = salary + extras;

  return total;
};

console.log(
  "TEST 1 calc with right values, result:",
  calcSalary(100, 150, 300, 50)
);
