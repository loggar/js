function foo() {
  let a = (b = 0); // b - Accidental global variable
  a++;
  return a;
}

foo();
console.log(typeof a); // undefined
console.log(typeof b); // number
