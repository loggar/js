//prompt user to enter a number to calculate the factorial
var num = 100;

//recursive
var factorial = function (n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(num));
