function* naturalNumbers() {
	function* _naturalNumbers(n) {
		yield n;
		yield* _naturalNumbers(n + 1);
	}

	yield* _naturalNumbers(1);
}

const nats = naturalNumbers();

console.log(nats.next().value);
console.log(nats.next().value);
console.log(nats.next().value);