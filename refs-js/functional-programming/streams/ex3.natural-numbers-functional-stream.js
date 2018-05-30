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

const nats = naturalNumbers();
const one = nats();
const two = one.next();
const three = two.next();

console.log(one.value);
console.log(two.value);
console.log(three.value);