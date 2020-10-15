let calculator = {
  value: 0,
  add: values => {
    console.log(this); // undefined
    this.value = values.reduce((a, v) => a + v, this.value); // TypeError: Cannot read property 'value' of undefined
  }
};
calculator.add([1, 2, 3]);
console.log(calculator.value);

/*
While one might expect the this binding here to be the calculator object there,
it will actually result in this being either undefined or the global object depending on if the code is running in strict mode or not.
This is because the closest lexical scope here is the global scope, in strict mode that is undefined, otherwise, it’s the window object in browsers
(or the process object in a Node.js compatible environment).
*/
