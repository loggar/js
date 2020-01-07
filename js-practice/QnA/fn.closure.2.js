function multiply(a) {
  return function(b) {
    return a * b;
  };
}

multiply(5)(6);
