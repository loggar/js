async function executeParallelAsyncTasks() {
	const [valueA, valueB, valueC] = await Promise.all([functionA(), functionB(), functionC()])
	doSomethingWith(valueA)
	doSomethingElseWith(valueB)
	doAnotherThingWith(valueC)
}