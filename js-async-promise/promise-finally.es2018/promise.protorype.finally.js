// When a promise is ful􀁦lled, successfully it calls the then() methods, one after another.

// If something fails during this, the then() methods are jumped and the catch() method is executed.

// finally() allow you to run some code regardless of the successful or unsuccessful execution of the promise:

fetch('file.json')
	.then(data => data.json())
	.catch(error => console.error(error))
	.finally(() => console.log('finished'))
