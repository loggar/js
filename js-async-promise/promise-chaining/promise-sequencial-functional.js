require('isomorphic-fetch');

/*
 * promiseSerial resolves Promises sequentially.
 * @example
 * const urls = [ ... ]
 * const funcs = urls.map(url => () => $.ajax(url))
 *
 * promiseSerial(funcs)
 *   .then(console.log)
 *   .catch(console.error)
 */
const promiseSerial = funcs =>
	funcs.reduce((promise, func) =>
		promise.then(result => func().then(Array.prototype.concat.bind(result))),
		Promise.resolve([]))

// some url's to resolve
const urls = ['https://loggar.github.io/note/docs/sample-res/sample.1.json', 'https://loggar.github.io/note/docs/sample-res/sample.2.json', 'https://loggar.github.io/note/docs/sample-res/sample.3.json']

// convert each url to a function that returns a promise
const funcs = urls.map(url => () => fetch(url))

// execute Promises in serial
promiseSerial(funcs)
	.then(console.log.bind(console))
	.catch(console.error.bind(console))
