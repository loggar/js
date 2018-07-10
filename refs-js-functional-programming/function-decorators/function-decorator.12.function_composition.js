/*
You can also use function composition to combine decorators
*/

// function composer
const compose = (f, g) => x => f(g(x))

// returns true if is numeric
const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n)

// function decorator for only numeric args
const onlyNumeric = f => (...args) => {
	const valid = args.filter(isNumeric)
	if (valid.length < f.length) {
		throw new TypeError('Argument must be numeric.')
	}
	return f(...valid)
}

// function decorator to catch exceptions
const tryCatch = f => (...args) => {
	try {
		return { error: null, value: f(...args) }
	} catch (err) {
		return { error: err, value: null }
	}
}

// compose two decorators into one decorator
const tryCatchOnlyNumeric = compose(tryCatch, onlyNumeric)

// decorated double function
const double = tryCatchOnlyNumeric(x => x * 2)

double('abc')
//=> { error: [TypeError: value must be numeric], value: null }

double(4)
//=> { error: null, value: 8 }
