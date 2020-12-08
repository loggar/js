let a = [5, 4, 3, 2, 1];
let smallvalues = a.filter(function (x) { return x < 3 }); // [2, 1]
let everyother = a.filter(function (x, i) { return i % 2 == 0 }); // [5, 3, 1]

// Filtering
let evenNumbers = numbers.filter(n => n % 2 == 0);
