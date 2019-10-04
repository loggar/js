const converge = (...promises) => (...args) => {
	let [head, ...tail] = promises
	if (tail.length) {
		return head(...args)
			.then((value) => converge(...tail)(...args.concat([value])))
	} else {
		return head(...args)
	}
}

functionA(2)
	.then((valueA) => converge(functionB, functionC)(valueA))