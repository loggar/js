// function decorator to catch exceptions
const tryCatch = f => (...args) => {
	try {
		return { error: null, value: f(...args) }
	} catch (err) {
		return { error: err, value: null }
	}
}

const double = x => {
	if (!isNumeric(x)) {
		throw new TypeError('value must be numeric')
	}

	return x * 2
}

// new "safe" double function
const safeDouble = tryCatch(double);

console.log(safeDouble('abc'))
//=> { error: [TypeError: value must be numeric], value: null }

console.log(safeDouble(4))
//=> { error: null, value: 8 }
