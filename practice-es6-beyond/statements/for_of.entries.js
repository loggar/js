function fn_1() {
	var towns = ["Causeway Bay", "Central", "Diamond Hill"];

	// Loop over each item of the array, 
	// supporting `return`, `break` and `continue`:
	for (let town of towns) {
		if (town === "Central")
			return;
	}
}

function fn_2() {
	var towns = ["Causeway Bay", "Central", "Diamond Hill"];

	// Get the index variable, just like in `for` loops:
	for (let [i, town] of towns.entries()) {
		towns[i] = `The great city of ${town}!`;
	}
}
