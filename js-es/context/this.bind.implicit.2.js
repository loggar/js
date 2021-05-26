function foo() {
  console.log(this.a);
}

var obj2 = {
  a: 42,
  foo: foo, // for stays in obj2 => obj2 will be the call-site for foo
};

var obj1 = {
  a: 2,
  obj2: obj2,
};

obj1.obj2.foo(); // 42
