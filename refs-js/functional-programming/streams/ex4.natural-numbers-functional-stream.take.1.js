function naturalNumbers() {
	function _stream(n) {
		return {
			value: n,
			next() {
				return _stream(n + 1);
			}
		};
	}

	return () => _stream(1);
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

const nats = naturalNumbers();
const firstTen = take(10, nats);

console.log(firstTen);
