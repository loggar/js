const fs = require('fs');
const EventEmitter = require('events');

class WithTime extends EventEmitter {
	execute(asyncFunc, ...args) {
		this.emit('begin');
		console.time('execute');
		asyncFunc(...args, (err, data) => {
			if (err) {
				return this.emit('error', err);
			}

			this.emit('data', data);
			console.timeEnd('execute');
			this.emit('end');
		});
	}
}

const withTime = new WithTime();

withTime.on('begin', () => console.log('About to execute'));
withTime.on('end', () => console.log('Done with execute'));
withTime.on('error', (err) => console.error(err));

withTime.on('data', (data) => {
	console.log(`2. Length: ${data.length}`);
});

withTime.on('data', (data) => {
	console.log(`3. Characters: ${data.toString().length}`);
});

withTime.prependListener('data', (data) => {
	console.log(`1. Characters: ${data.toString().length}`);
});

withTime.execute(fs.readFile, __filename);
