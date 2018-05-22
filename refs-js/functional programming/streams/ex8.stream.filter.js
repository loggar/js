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

function filter(fn, originalStr) {
	function _stream(str) {
		const { value, next } = str();

		if (fn(value)) {
			return {
				value,
				next() {
					return _stream(next);
				}
			};
		}

		return _stream(next);
	}

	return () => _stream(originalStr);
}

const nats = stream(n => n + 1, 1);
const oddNumbers = filter(n => n % 2 !== 0, nats);
const gte42 = filter(n => n >= 42, nats);

console.log(take(10, oddNumbers));
// [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

console.log(take(10, gte42));
// [42, 43, 44, 45, 46, 47, 48, 49, 50, 51]
