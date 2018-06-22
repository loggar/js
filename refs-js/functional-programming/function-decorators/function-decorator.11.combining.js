/*
Because each decorator also returns a function, function decorators can easily be combined to create one mega function.
*/

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

// our double function
const double = x => x * 2

// decorated double function
const safeDouble = tryCatch(onlyNumeric(double));

safeDouble('abc')
//=> { error: [TypeError: value must be numeric], value: null }

safeDouble(4)
//=> { error: null, value: 8 }
