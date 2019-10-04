'use strict';

const promisify = require('es6-promisify');

const myTimeout = (msec, cb) => {
	if (msec < 1000) {
		cb(new Error('invalid time, msec: ' + msec));
	}
	setTimeout(() => {
		cb(null, 'timer expired, msec: ' + msec);
	}, msec);
};


const myprom = promisify(myTimeout);

myprom(1500)
	.then(res => {
		console.log('res: ' + res);
	})
	.catch(err => {
		console.log('err: ' + err.message);
	});

myprom(500)
	.then(res => {
		console.log('res: ' + res);
	})
	.catch(err => {
		console.log('err: ' + err.message);
	});