function getImage(filename = "kitten.jpg") {
	return readFile(filename);
}

// This function can take any number of arguments.
// All of them will be placed into an array:
function sum(...numbers) {
	let sum = 0;

	for (let number in numbers) {
		sum += number;
	}

	return sum;
}

let result = sum(18, 23, 45);