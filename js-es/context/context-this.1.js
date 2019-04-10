var value = 1;

function bar() {
  console.log(value);
}

var obj = {
  value: 100,
  foo: function() {
    console.log(this.value);

    bar();
  }
};

obj.foo();

console.log(global);

console.log(this === global); // false, node

function a() {
  console.log(this === global); // true, node
}

a();
