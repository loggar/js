const sumFunctionWithNullish = (a, b, inconsistentParameter) => {
  inconsistentParameter = inconsistentParameter ?? 0.424242;
  return a + b + inconsistentParameter;
};

sumFunctionWithNullish(2, 40, undefined); // => 42.424242
sumFunctionWithNullish(2, 40, null); // => 42.424242

// but:
sumFunctionWithNullish(1, 39, 2); // => 42
sumFunctionWithNullish(2, 40, false); // => 42
sumFunctionWithNullish(2, 40, ""); // => "42"
sumFunctionWithNullish(2, 40, 0); // => 42
