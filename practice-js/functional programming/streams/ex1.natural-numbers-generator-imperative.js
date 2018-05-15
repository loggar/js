function* naturalNumbers() {
	let n = 1;

	while (true) {
		yield n++;
	}
}

const nats = naturalNumbers();

console.log(nats.next().value);
console.log(nats.next().value);
console.log(nats.next().value);