function fibonacciSequence() {
	function _stream(current, next) {
		return {
			value: current,
			next() {
				return _stream(next, current + next);
			}
		};
	}

	return () => _stream(0, 1);
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

const fibs = fibonacciSequence();
const firstTen = take(10, fibs);

console.log(firstTen);
