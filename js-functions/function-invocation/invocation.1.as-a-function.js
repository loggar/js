//Global Scope

function add(a, b) {
  console.log(this);
  return a + b;
}

add(1, 5); // logs the "window" object and returns 6

const o = {
  method(callback) {
    callback();
  }
};

o.method(function() {
  console.log(this); // logs the "window" object
});
