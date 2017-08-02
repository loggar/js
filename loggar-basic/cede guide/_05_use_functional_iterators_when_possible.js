// good :
var getCount = function getCount() {
  var i,
    count = [ 1, 2, 3 ],
    length = count.length,
    text = '';

  for (i = 0; i < length; i += 1) {
    text += count[i] + ' ';
  }

  return text;
};

test('Looping over an array:', function() {
  var text = getCount();

  equal(text, '1 2 3 ',
    'getCount() should count to three.');
});

// better for most situations : 
var getCount = function getCount() {
  var count = [ 1, 2, 3 ],
    text = '';

  count.forEach(function(number) {
    text += number + ' ';
  });

  return text;
};

test('Functional iterator:', function() {
  var text = getCount();

  equal(text, '1 2 3 ',
    'getCount() should count to three.'
  );
});


// even better : 
var getCount = function getCount() {
  var count = [ 1, 2, 3 ];

  return count.reduce(function(previous, number) {
    return previous + number + ' ';
  }, '');
};

// for older browsers :
//Shim .forEach()
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function(fn, scope) {
    for (var i = 0, len = this.length; i < len; ++i) {
      fn.call(scope || this, this[i], i, this);
    }
  };
}