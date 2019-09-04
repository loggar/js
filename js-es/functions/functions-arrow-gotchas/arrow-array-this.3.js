/*
Also, since an arrow function has no this binding Function.prototype.call,
Function.prototype.bind and Function.prototype.apply won’t work with them either.
The this binding is set in stone when the arrow function was declared and can’t change.

So in the following example will run into the same issue as we had earlier,
the this binding is the global object when the adder’s add function is called despite our attempt to override it with Function.prototype.call:
*/

const adder = {
  add: values => {
    this.value = values.reduce((a, v) => a + v, this.value);
  }
};
let calculator = {
  value: 0
};
adder.call(calculator, [1, 2, 3]);
