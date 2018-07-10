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
Function composition is one of my favorite FP tools. It’s a technique to create new functions using existing functions.

normalize and denormalize are great candidates for function composition and we can use Ramda’s pipe method to transform them into this:
*/

const normalize = (min, max) => R.pipe(
	x => scale(min, max, x),
	x => R.clamp(0, 1, x)
)

const denormalize = (min, max) => R.pipe(
	x => R.clamp(0, 1, x),
	x => descale(min, max, x)
)

/*
Not vastly different, but we’re only half way there. We’ll reduce this more in the Currying & Partial Application section (next example codes)
*/
