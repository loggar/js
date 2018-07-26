/*
First I created a calibration object to transform the X’s to the Y’s.
*/

const calibration = {
	x: { min: 1000, max: 9000 },
	y: { min: 50, max: 85 },
}

/*
Then I almost wrote this code to return the min Y if the value is below the threshold and the max Y if it is above.

function(...) {
  if (value <= calibration.x.min) return calibration.y.min
  else if (value >= calibration.x.max) return calibration.y.max
  else ...
}

But I really don’t like if statements.
And there’s a better way of doing this using Math.min and Math.max. Since I need to use both I plan on just use Ramda’s clamp method, which does exactly this.
*/

const R = require('ramda')

/*
Feature Scaling
Feature scaling, also known as normalizing, is a machine learning technique that I think will apply well here.

The gist of feature scaling is to scale the input (the X) to a value between [0, 1]. Then I will do the reverse and de-scale the number into the Y scale.

You should ignore the majority of the code below, just take note of normalize, specifically how it calls two functions, scale and R.clamp. denormalize does the same, just in reverse.
*/

const scale = (min, max, x) =>
	(x - min) / (max - min)

const descale = (min, max, x) =>
	(x * (max - min)) + min

const normalize = (min, max, x) => {
	const value = scale(min, max, x)
	return R.clamp(0, 1, value)
}

const denormalize = (min, max, x) => {
	const value = R.clamp(0, 1, x)
	return descale(min, max, value)
}
