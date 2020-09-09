const math = {
  add: function(a, b) {
    return a + b;
  },
  sub: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  }
};

// You don't actually need to have the whole add: business from ES6 and forwards. You can just type it like so:
const math = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  }
};
