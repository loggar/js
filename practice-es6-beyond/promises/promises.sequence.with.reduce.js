/*
const tasks = getTaskArray();
return tasks.reduce((promiseChain, currentTask) => {
    return promiseChain.then(chainResults =>
        currentTask.then(currentResult =>
            [ ...chainResults, currentResult ]
        )
    );
}, Promise.resolve([])).then(arrayOfResults => {
    // Do something with all results
});
*/

const tasks = [
	new Promise((resolve, reject) => {
		resolve(1);
	}),
	new Promise((resolve, reject) => {
		resolve(2);
	}),
	new Promise((resolve, reject) => {
		resolve(3);
	}),
];

return tasks.reduce((promiseChain, currentTask) => {
	return promiseChain.then(chainResults =>
		currentTask.then(currentResult => {
			console.log(currentResult);
			return [...chainResults, currentResult]
		})
	);
}, Promise.resolve([])).then(arrayOfResults => {
	console.log(arrayOfResults);
});