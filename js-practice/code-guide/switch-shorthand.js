// Longhand
switch (data) {
  case 1:
    test1();
    break;

  case 2:
    test2();
    break;

  case 3:
    test();
    break;
  // And so on...
}

// Shorthand
var data = {
  1: test1,
  2: test2,
  3: test,
};

data[anything] && data[anything]();
