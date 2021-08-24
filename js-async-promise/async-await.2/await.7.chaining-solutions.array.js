function executeAsyncTask() {
	return functionA()
		.then(valueA => {
			return Promise.all([valueA, functionB(valueA)])
		})
		.then(([valueA, valueB]) => {
			return functionC(valueA, valueB)
		})
}