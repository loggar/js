/*
// sample usage
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

var p = tasks.reduce((promiseChain, currentTask) => {
	return promiseChain.then(chainResults =>
		currentTask.then(currentResult => {
			console.log(currentResult);
			return [...chainResults, currentResult]
		})
	);
}, Promise.resolve([])).then(arrayOfResults => {
	console.log(arrayOfResults);
	var temp = 0;
	arrayOfResults.forEach(element => {
		temp += element;
	});
	return temp;
});

console.log(p);
setTimeout(() => console.log(p), 1);