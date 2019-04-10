function f1() {
  return this;
}

// In a browser:
// f1() === window; // true

// In Node:
console.log(f1() === global); // true
