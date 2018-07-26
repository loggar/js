// function decorator
const fd_print_arity = f => (...args) => {
	console.log(args)
	return f(...args)
}

// function to be decorate
const add = (a, b) => a + b

// decorate
const fd_print_arity_add = fd_print_arity(add)

// run
console.log(fd_print_arity_add(3, 4))
