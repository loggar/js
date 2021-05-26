function foo() {
  console.log(this.a);
}

const object = {
  a: 42,
  foo: foo,
};

object.foo(); // 42
