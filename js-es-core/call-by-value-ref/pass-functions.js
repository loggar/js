// function
let fn_1 = function(n) {
  return n + 1;
};

let fn_2 = fn_1;
fn_2 = function(n) {
  return n + 2;
};

console.log(fn_1(0));
console.log(fn_2(0));

let fn_3 = function(fn, n) {
  return fn(n) + 10;
};

console.log(fn_3(fn_1, 0));

// function
let function1 = function() {
  return 1;
};

let function2 = function1;

function function3(fn) {
  fn = function() {
    return 2;
  };
}

function3(function2);

console.log(function1());
