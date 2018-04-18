[0, 1, 2, 3, 4].reduce(
	(accumulator, currentValue, currentIndex, array) => {
		console.log(currentValue);
		return accumulator + currentValue;
	},
	10
);