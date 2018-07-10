// function decorator
const fd_log = f => (...args) => {
	const r = f(...args)
	console.log(`[function fd_log] ${f.name || 'Anonymous'}(${args}) = ${r}`)
	return r
}

// function to be decorate
const add = (a, b) => a + b

// decorate
const fd_log_add = fd_log(add)

// run
console.log(fd_log_add(3, 4))
