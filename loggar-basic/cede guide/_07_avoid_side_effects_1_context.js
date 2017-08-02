// wrong : 
var x = 0;

function increment() {
  x += 1;
  return x;
}

test('increment() with side effects.', function () {
  var val = increment();

  equal(val, 1,
    'increment() should add one.'
  );

  equal(x, 0,
    'x should be unchanged outside the function.'
  ); // Fails
});

// right : 
var x = 0;

function increment(x) {
  x += 1;
  return x;
}

test('increment() without side effects.', function () {
  var val = increment(x);

  equal(val, 1,
    'increment() adds one.');

  equal(x, 0,
    'x is unchanged.');
});