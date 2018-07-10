// requireAll decorator
const requireAll = f => (...args) => {
	const valid = args.filter(arg => arg != null)
	if (valid.length < f.length) {
		// throw new TypeError('Argument cannot be null or undefined.')
		console.log('[function requireAll] Argument cannot be null or undefined.');
		return null;
	}
	return f(...valid)
}

// decorated add function
const add = requireAll((a, b) => a + b)

console.log(add(3, 4))
//=> 7

console.log(add(3))
// [function requireAll] Argument cannot be null or undefined.

console.log(add(null, 4))
// [function requireAll] Argument cannot be null or undefined.
