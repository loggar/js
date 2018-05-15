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

function map(fn, originalStr) {
	function _stream(str) {
		const { value, next } = str();

		return {
			value: fn(value),
			next() {
				return _stream(next);
			}
		};
	}

	return () => _stream(originalStr);
}

const fibs = map(function (array) {
	return array[0];
}, stream(([current, next]) => [next, current + next], [0, 1]));

console.log(take(10, fibs));
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]



/*
even-numbers-sequence
*/

const nats = stream(n => n + 1, 1);
const evenNumbers = map(n => n * 2, nats);

console.log(take(10, evenNumbers));
// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
