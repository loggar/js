var something = {
  fn1: function() {
    console.log(this);
  }
};

var obj1 = {
  value: 1
};

var obj2 = {
  value: 2
};

// something.fn1();
// something.fn1.apply(something);

something.fn1.apply(obj1);
something.fn1.apply(obj2);
