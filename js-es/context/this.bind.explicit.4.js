// In ES6, functions provide an optional parameter called "context" which is a work-around for people not to use bind() :
function foo(el) {
  console.log(el, this.id);
}

var obj = {
  id: "awesome",
};

// use `obj` as `this` for `foo(..)` calls
[1, 2, 3].forEach(foo, obj); // 1 awesome  2 awesome  3 awesome
