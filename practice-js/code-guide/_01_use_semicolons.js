test('Missing semicolon before +', function() {
  var a = 1 + 1
    + '3';

  equal(a, 2,
    'a should be 2.'
  ); // Fails. a = 23
});

test('Missing semicolon before [', function() {
  var b = 1 + 1[1, 1].forEach(function(num) {
    b += num;
  });

  // Error: Cannot call method forEach of undefined.
  equal(b, 4,
    'b should be 4.');
});

test('Missing semicolon before (', function() {
  var x = 1,
    f = function f() {
      ok(false, 'This test should not run.'); // Fails.
    }(function() {
      /* Do something interesting. */
    }());
});
