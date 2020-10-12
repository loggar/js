function f(foo, values) {
  with (foo) {
    console.log(values);
  }
}

f(1, 2);

function f2(x, o) {
  with (o) {
    console.log(x);
  }
}

f2(1, 2);
