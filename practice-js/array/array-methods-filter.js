a = [5, 4, 3, 2, 1];
smallvalues = a.filter(function (x) { return x < 3 }); // [2, 1]
everyother = a.filter(function (x, i) { return i % 2 == 0 }); // [5, 3, 1]