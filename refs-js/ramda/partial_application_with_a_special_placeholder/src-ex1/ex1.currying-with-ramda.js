import curry from 'ramda/src/curry'

const multiply = curry((a, b) => a * b)

const double = multiply(2)

console.log(double(3))
