function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
};

foo.call(obj); // 2

// foo.call(obj, arg1, arg2, arg3)
// foo.apply(obj, [arg1, arg2, arg3])
