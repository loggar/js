// basic curry function decorator
const curry = f => (...args) =>
	args.length >= f.length
		? f(...args)
		: curry(f.bind(undefined, ...args))

const multiply = curry((a, b) => a * b)
const double = multiply(2)

double(3)
//=> 6

multiply(3, 3)
//=> 9

multiply(4)(4)
//=> 16
