const R = require('ramda')

const calibration = {
	x: { min: 1000, max: 9000 },
	y: { min: 50, max: 85 },
}

const scale = (min, max, x) =>
	(x - min) / (max - min)

const descale = (min, max, x) =>
	(x * (max - min)) + min

/*
Currying is the technique of translating the evaluation of a function that takes multiple arguments into evaluating a sequence of functions, each with a single argument. — WikiPedia

Currying allows us to easily partially apply arguments to scale and R.clamp.
*/

const normalize = (min, max) =>
	R.pipe(scale(min, max), R.clamp(0, 1))

const denormalize = (min, max) =>
	R.pipe(R.clamp(0, 1), descale(min, max))

/*
Note: While I didn’t follow the 1 argument rule here, min and max should have also been broken out and separated. Though, it didn’t add any utility since both min and max will be supplied at the same time and it would have complicated the examples. Sometimes it’s better to go with the spirit of the law and not the letter of the law :)
*/

/*
Usage
*/

/*
Building the function is now super easy. This is because we have written all of the logic already. All that is left is to compose normalize and denormalize like this:
*/

const rangeMap = calibration => R.pipe(
	normalize(calibration.x.min, calibration.x.max),
	denormalize(calibration.y.min, calibration.y.max)
)
