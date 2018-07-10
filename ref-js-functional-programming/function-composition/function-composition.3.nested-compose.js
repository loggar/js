const sum = (a, b) => a + b
const square = x => x * x
const addTen = x => x + 10

// nested
// const r = addTen(square(sum(3, 5)))

const r = addTen(
	square(
		sum(3, 5)
	)
)

console.log(r)
