function abc() {
  function def() {
    let a = 3;
  }

  return a; // ReferenceError: a is not defined
}
