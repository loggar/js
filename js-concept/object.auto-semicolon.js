function foo1() {
  return {
    bar: 'bar'
  };
}

function foo2() {
  return;
  {
    ('bar');
  }
}

console.log(foo1());
console.log(foo2());

/*
This will print out object and undefined.
Javascript has automatic semicolon insertion and one of them is inserting semicolon after return statement, making second function equal to return;, thus returning undefined.
*/