function stream(fn, initial) {
	function _stream(value) {
		return {
			value,
			next() {
				return _stream(fn(value));
			}
		};
	}

	return () => _stream(initial);
}

function take(n, str) {
	function _take(n, str, accum) {
		if (n === 0) {
			return accum;
		}

		const { value, next } = str();

		return _take(n - 1, next, accum.concat(value));
	}

	return _take(n, str, []);
}

const nats = stream(n => n + 1, 1);
const fibs = stream(([current, next]) => [next, current + next], [0, 1]);

console.log(take(10, nats));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(take(10, fibs));
// [0, 1, 1, 1, 1, 2, 2, 3, 3, 5, 5, 8, 8, 13, 13, 21, 21, 34, 34, 55]
