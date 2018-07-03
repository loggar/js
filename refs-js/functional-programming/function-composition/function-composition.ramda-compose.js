const compose = Ramda.compose

const compute = compose(
	addTen,
	square,
	sum
)

compute(3, 5) // 74