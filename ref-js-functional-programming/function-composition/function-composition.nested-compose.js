const sum = (a, b) => a + b
const square = x => x * x
const addTen = x => x + 10

const computeNumbers = addTen(square(sum(3, 5))) // 74

// nested

const computeNumbers = addTen(
	square(
		sum(3, 5)
	)
) // 74