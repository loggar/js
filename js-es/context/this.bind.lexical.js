// When you are using the arrow function, that function will bound to whatever foo's this is at its call-time.
function foo() {
  setTimeout(() => {
    // `this` here is lexically adopted from `foo()`
    console.log(this.a);
  }, 100);
}

var obj = {
  a: 2,
};

foo.call(obj); // 2
