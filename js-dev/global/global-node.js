console.log(global); // Object [global]
console.log(this); // Object [global]
console.log(global === this); // true

test_1 = function() {
  console.log(this); // undefined
};

test_1();
