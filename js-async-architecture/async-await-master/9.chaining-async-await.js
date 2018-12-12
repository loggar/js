async function executeAsyncTask() {
	const valueA = await functionA()
	const valueB = await functionB(valueA)
	return function3(valueA, valueB)
}