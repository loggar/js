let calculator = {
  value: 0,
  add(values) {
    this.value = values.reduce((a, v) => a + v, this.value);
  }
};
calculator.add([10, 10]);
console.log(calculator.value);

// Regular functions do have a this binding, when called on an object this will point at the object so using a regular function is still the way to go for member functions.
