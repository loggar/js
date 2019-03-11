import { compose, pipe } from './compose-pipe.module.build'

const composed = compose(
	(x) => {
		console.log(x + 1)
		return x + 1
	},
	(x) => {
		console.log(x + 2)
		return x + 2
	}, (x) => {
		console.log(x + 3)
		return x + 3
	}, (x) => {
		console.log(x + 4)
		return x + 4
	}
)

const piped = pipe(
	(x) => {
		console.log(x + 1)
		return x + 1
	},
	(x) => {
		console.log(x + 2)
		return x + 2
	}, (x) => {
		console.log(x + 3)
		return x + 3
	}, (x) => {
		console.log(x + 4)
		return x + 4
	}
)

console.log('composed')
composed(0);

console.log('piped')
piped(0);
