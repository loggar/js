const getItem = v => v === 'a' ? 1 : null

/**
 * execute the function if the value is not null or undefined
 * @param {Object} val - the value to test
 * @param {Function} fn - the function to execute.
 * @returns {Object} - null or the value of the executed function.
 */
const ifVal = (val, fn) => val == null ? null : fn(val)

// functional example
const someAction = value => fn =>
	ifVal(getItem(value), item => fn(item))

someAction('a')(console.log)