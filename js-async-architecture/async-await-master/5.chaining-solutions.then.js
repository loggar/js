function executeAsyncTask() {
	return functionA()
		.then((valueA) => {
			return functionB(valueA)
				.then((valueB) => {
					return functionC(valueA, valueB)
				})
		})
}