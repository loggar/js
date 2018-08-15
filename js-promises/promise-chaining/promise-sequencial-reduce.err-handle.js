const logger = {
	log: console.log.bind(console),
	info: console.log.bind(console),
	error: console.error.bind(console)
}

const tasks = [
	new Promise((resolve, reject) => {
		resolve('done task 1');
	}),
	new Promise((resolve, reject) => {
		reject('fail task 2');
	}),
	new Promise((resolve, reject) => {
		resolve('done task 3');
	}),
	new Promise((resolve, reject) => {
		reject('fail task 4');
	}),
	new Promise((resolve, reject) => {
		resolve('done task 5');
	})
];

tasks.reduce((promiseChain, currentTask) => {
	return promiseChain.then(chainResults =>
		currentTask.then(currentResult => {
			return [...chainResults, currentResult]
		}, function (msg) {
			return [...chainResults, msg]
		})
	);
}, Promise.resolve([])).then(arrayOfResults => {
	logger.info(`finish promise arr ${arrayOfResults}`);
}, function (err) {
	logger.error(err.stack);
});
