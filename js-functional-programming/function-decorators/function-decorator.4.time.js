// function decorator
const fd_time = f => (...args) => {
	const start = Date.now()
	const r = f(...args)
	return r && typeof r.then === 'function'
		? r.then(r => ({ timespan: Date.now() - start, r }))
		: { timespan: Date.now() - start, r }
}

// synchronous function
const syncFn = x => x * 2

// asunchronous function
const asyncFn = x => new Promise(resolve =>
	setTimeout(() => resolve(x * 2), 2000)
)

// run decorates
console.log(fd_time(syncFn)(123))
console.log(fd_time(asyncFn)(123))
