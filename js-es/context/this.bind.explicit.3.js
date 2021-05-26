function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
};

var bar = foo.bind(obj);
bar(); // 2
