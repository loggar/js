function executeAsyncTask() {
	let valueA
	return functionA()
		.then((v) => {
			valueA = v
			return functionB(valueA)
		})
		.then((valueB) => {
			return functionC(valueA, valueB)
		})
}