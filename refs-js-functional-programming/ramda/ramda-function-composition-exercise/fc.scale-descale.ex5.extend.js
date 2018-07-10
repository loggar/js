/*
Because we have broken the code out into small pieces, it would be unbelievably simple to enhance this function. We simply have to add our transition into the R.pipe pipeline. Here’s a few ways this could be done:
*/

const rangeMapLinear = calibration => R.pipe(
	normalize(calibration.x.min, calibration.x.max),
	linear,
	denormalize(calibration.y.min, calibration.y.max)
)

const rangeMapEaseOutSine = calibration => R.pipe(
	normalize(calibration.x.min, calibration.x.max),
	easeOutSine,
	denormalize(calibration.y.min, calibration.y.max)
)

const rangeMap = calibration => R.pipe(
	normalize(calibration.x.min, calibration.x.max),
	calibration.ease,
	denormalize(calibration.y.min, calibration.y.max)
)
