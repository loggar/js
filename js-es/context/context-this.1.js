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
