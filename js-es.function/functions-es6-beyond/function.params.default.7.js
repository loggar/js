function foo(a = 10) {
  console.log(a);
}

foo(undefined); // 10
foo(20); // 20
foo(null); // null

function foo2(a = 10) {
  if (!a) a = 10;
  console.log(a);
}

foo2(null); // 10

function foo3(a = 10) {
  a = a || 10;
  console.log(a);
}

foo2(null); // 10
