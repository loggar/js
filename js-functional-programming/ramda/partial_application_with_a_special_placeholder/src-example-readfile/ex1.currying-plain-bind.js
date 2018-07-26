const multiply = (a, b) => a * b
const double = multiply.bind(null, 2)

console.log(double(3))
