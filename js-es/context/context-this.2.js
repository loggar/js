var value = 1;

var obj = {
  value: 100,
  foo: function() {
    console.log(this.value);
    this.bar();
  },
  bar: function() {
    console.log(value);
  }
};

var obj2 = {
  value: 101,
  bar: function() {
    console.log(2);
  }
};

obj.foo();

obj.foo.apply(obj2);
