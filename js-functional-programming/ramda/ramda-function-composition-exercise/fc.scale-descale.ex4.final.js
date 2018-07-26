const scale = (min, max) => x =>
	(x - min) / (max - min)

const descale = (min, max) => x =>
	(x * (max - min)) + min

const normalize = (min, max) =>
	R.pipe(scale(min, max), R.clamp(0, 1))

const denormalize = (min, max) =>
	R.pipe(R.clamp(0, 1), descale(min, max))

const rangeMap = calibration => R.pipe(
	normalize(calibration.x.min, calibration.x.max),
	denormalize(calibration.y.min, calibration.y.max)
)

/*
Observations:

Every function is an expression and not a block. The functions immediately return their value.

Every function is idempotent, meaning given the same inputs it will always produce the same output.

Every function is a pure function. The output it calculated from only the inputs.

The majority our functions do not contain any new code, they are simply composed of existing functions.
*/
