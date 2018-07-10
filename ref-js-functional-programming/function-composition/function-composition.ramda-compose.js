import Ramda from 'ramda'

const compose = Ramda.compose

const addTen = x => x + 10
const square = x => x * x
const sum = (x, y) => x + y

const compute = compose(
	addTen,
	square,
	sum
)

const result = compute(3, 5) // 74
console.log(result)
