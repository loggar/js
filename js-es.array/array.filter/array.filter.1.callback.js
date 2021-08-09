let a = [5, 4, 3, 2, 1];

let small_values = a.filter(function (x) {
  return x < 3;
}); // [2, 1]
let every_other = a.filter(function (x, i) {
  return i % 2 == 0;
}); // [5, 3, 1]

// Filtering
let evenNumbers = numbers.filter((n) => n % 2 == 0);
