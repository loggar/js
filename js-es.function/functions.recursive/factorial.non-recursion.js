//prompt user to enter a number to calculate the factorial
var num = 100;

var factorial = function (n) {
  if (n == 0) {
    return 1;
  } else {
    let product = 1;
    for (let i = 1; i <= n; i++) {
      product *= i;
    }
    return product;
  }
};

console.log(factorial(num));
