const compose = (...functions) => data => functions.reduceRight((value, func) => func(value), data)

const compute = compose(
	(x) => {
		console.log(x + 10)
		return x + 10
	},
	(x) => {
		console.log(x * x)
		return x * x
	},
	(x, y) => {
		console.log(x + x)
		return x + x
	}
)

const r = compute(3)
console.log(r) // 46
